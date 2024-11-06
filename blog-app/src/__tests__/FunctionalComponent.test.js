import {render,screen,fireEvent} from "@testing-library/react";
import FunctionalComponent from "../components/FunctionalComponent";
import handleOtherMethod from "../helper/helper";


test("Functional component testing",()=>{
    render(<FunctionalComponent/>)
    const btn1 = screen.getByTestId("btn1")
    fireEvent.click(btn1)
    expect(screen.getByText("hello")).toBeInTheDocument()
})


test("Other function testing",()=>{
    expect(handleOtherMethod()).toMatch("hi")
})