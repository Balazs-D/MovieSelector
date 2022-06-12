import React from "react";
import fetch from "node-fetch";
import {render} from "@testing-library/react"
import {Home} from "../Screens/Home/Home";
import {Header} from "../Components/Header/Header"





// describe("<Home />", () => {
//     test("render header with searchbar in it", async () => {
//       const expectedTerm = "this is a render";
//       const {} = render(<Header >);
//           getByText(
//     });
// });

describe("<Home />", () => {
    test("should display a list of items with movie genre names", async () => {
        const res = await fetch('https://https://api.themoviedb.org/3/genre/movie/list?api_key=$86cc61c0363c975b6de2d10f8d915694&language=en-US');
        const result: any = await res.json();
        expect(result.genres).toHaveLength(19);
    });
});