import InputOnchange from "../components/InputOnchange";
import {fireEvent,render,screen} from "@testing-library/react";


test("Onchange event testing",()=>{
    render(<InputOnchange/>)
    const input = screen.getByRole("textbox");
    fireEvent.change(input,{target:{value:"abc"}})
    expect(input.value).toBe("abc")
})
