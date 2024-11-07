import GetAllByRole from "../components/GetAllByRole";
import {screen,render} from "@testing-library/react";


test("getAllByRole testing",()=>{
    render(<GetAllByRole/>)
    const btns = screen.getAllByRole("button")
    const options = screen.getAllByRole("option")

    for(let i=0;i<btns.length;i++){
        expect(btns[i]).toBeInTheDocument()
    }

    for(let j=0;j<options.length;j++){
        expect(options[j]).toBeInTheDocument()
    }
})