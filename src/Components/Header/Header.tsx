import { Link } from "react-router-dom";
import { searchMovie, setQuery } from "../../AppSlice";
import React, { useState } from "react";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { HeaderContainer } from "./HeaderStyle";

export const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const [value, setValue] = useState("");


  return (
      <HeaderContainer>
        <div className="header__actions">
          <Link to="/" className="header__title">
            <div>MovieSelector</div>
          </Link>
          <div className="header__searchbar">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder=" Search movies.."
            />
            <Link
                className={0 === value.length ? "link--disabled" : ""}
                to="/search-results"
                onClick={() => {
                  dispatch(setQuery(value));
                  dispatch(searchMovie({ query: value }));
                }}
            >
              Search
            </Link>
          </div>
        </div>

      </HeaderContainer>
  );
};
