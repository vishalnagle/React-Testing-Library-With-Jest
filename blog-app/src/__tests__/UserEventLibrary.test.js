import UserEventLibrary from "../components/UserEventLibrary";
import userEvent from "@testing-library/user-event";
import {render,screen} from "@testing-library/react"



test("Click event with user event library",async ()=>{
    userEvent.setup();
    render(<UserEventLibrary/>)
     const btn = screen.getByText("Click Me!")
     await userEvent.click(btn)
     expect(screen.getByText("hello")).toBeInTheDocument()
})

test("Onchange event testing with user event library",async ()=>{
    userEvent.setup();
    render(<UserEventLibrary/>)
     const textfield = screen.getByRole("textbox")
     await userEvent.type(textfield,"testing")
     expect(screen.getByText("testing")).toBeInTheDocument()
})