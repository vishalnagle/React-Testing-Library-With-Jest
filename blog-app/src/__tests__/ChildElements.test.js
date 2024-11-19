import { render, screen, within } from "@testing-library/react";
import ChildElements from "../components/ChildElements";


test("Testing child elements with within function", () => {
    render(<ChildElements />)
    let elm = screen.getByText("Hello World")
    let subEl = within(elm).getByText("hi")
    let subEl2 = within(elm).getByText("hello")

    expect(elm).toBeInTheDocument()
    expect(subEl).toBeInTheDocument()
    expect(subEl2).toBeInTheDocument()
})