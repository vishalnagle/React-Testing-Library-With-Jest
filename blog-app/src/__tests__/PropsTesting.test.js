import PropsTesting from "../components/PropsTesting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


test("Functional props testing", async () => {
    const testFunction = jest.fn();
    userEvent.setup();
    render(<PropsTesting testFunction={testFunction} />)
    const btn = screen.getByRole("button");
    await userEvent.click(btn);
    expect(testFunction).toBeCalled();

})