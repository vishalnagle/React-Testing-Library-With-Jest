import InputOnclick from "../components/InputOnclick";
import {render,screen,fireEvent} from "@testing-library/react";


test("Onclick function testing",()=>{
    render(<InputOnclick/>)
    const btn = screen.getByRole("button");
    fireEvent.click(btn)
    expect(screen.getByText("updated data")).toBeInTheDocument();
})
