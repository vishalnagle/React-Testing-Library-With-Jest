import { render, screen } from "@testing-library/react"
import App from "../App"


test("Test first react app case", () => {
    render(<App />);
    const text = screen.getByText(/First React Test Case/i);
    const text2 = screen.getByText(/Anil/i)
    const title = screen.getByTitle("AI generated img")
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
})


test("Testing input box", () => {
    render(<App />)
    let checkInput = screen.getByRole("textbox");
    let checkInputPlaceholder = screen.getByPlaceholderText("Enter User Name")
    expect(checkInput).toBeInTheDocument()
    expect(checkInputPlaceholder).toBeInTheDocument()
    expect(checkInput).toHaveAttribute("name","username")
    expect(checkInput).toHaveAttribute("id","userId")
    expect(checkInput).toHaveAttribute("type","text")
})

