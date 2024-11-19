import CustomQuery from "../components/CustomQuery";
import {render} from "@testing-library/react"


test("Testing custom query",()=>{
    render(<CustomQuery/>)
    const element = document.querySelector("#testId")
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent("Hello World")
    expect(element).toHaveAttribute("class")

})