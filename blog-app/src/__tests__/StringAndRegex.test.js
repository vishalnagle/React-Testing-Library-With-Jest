
import {render,screen} from "@testing-library/react";
import StringAndRegex from "../components/StringAndRegex";

test("Testing strings",()=>{
    render(<StringAndRegex/>)
    const div = screen.getByText("Hello world",({exact:false}))
    expect(div).toBeInTheDocument()
})

test("Text match with regex",()=>{
    render(<StringAndRegex/>)
    const div = screen.getByText(/hello/i)
    expect(div).toBeInTheDocument()
})