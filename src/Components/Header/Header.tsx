import {Link, useNavigate} from "react-router-dom";
import {searchMovie, setListMode, setQuery} from "../../AppSlice";
import React, {useState, KeyboardEvent} from "react";
import {AppDispatch} from "../../store/store";
import {useDispatch} from "react-redux";
import {HeaderContainer} from "./HeaderStyle";
import {ListMode} from "../../Types";

export const Header = () => {
    const dispatch: AppDispatch = useDispatch();
    const [value, setValue] = useState("");
    const navigate = useNavigate()

    const handleSearch = () => {
        dispatch(setQuery(value));
        dispatch(searchMovie({query: value, page: 1}));
        dispatch(setListMode(ListMode.SEARCH))
    };

    const handleEnterKeydown = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
            navigate("/search-result")

        }
    }

    return (
        <HeaderContainer isQuery={0 < value.length}>
            <div className="header__actions">
                <Link to="/" className="header__title">
                    <div>MovieSelector</div>
                </Link>
                <div className="header__searchbar">
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Search movies.."
                        onKeyDown={handleEnterKeydown}
                    />
                    <Link
                        to="/search-results"
                        onClick={handleSearch}
                    >
                        Search
                    </Link>
                </div>
            </div>

        </HeaderContainer>
    );
};
