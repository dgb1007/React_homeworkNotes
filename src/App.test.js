import {render, screen} from "@testing-library/react";
import App from "./App";

describe("Homworks App", () => {
 it("Preparar café", () => {
     render(<App />);
     expect(screen.getByAltText("Preparar café")).toBeInTheDocument();
 })
});