import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import ApiCallWithMSW from "../components/ApiCallWithMSW";



const server = setupServer(
    rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([{ id: 1, name: "Vishal" }, { id: 2, name: "Rinku" }])
        )
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Renders a list of users after api call", async () => {
    render(<ApiCallWithMSW />)
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    const userItems = await screen.findAllByRole("listitem");
    expect(userItems).toHaveLength(2);
    expect(userItems[0]).toHaveTextContent('Vishal');
    expect(userItems[1]).toHaveTextContent("Rinku");
})

test("Show no users found when api returns an empty array", async () => {
    server.use(
        rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
            return res(ctx.json([]))
        })
    )

    render(<ApiCallWithMSW />);

    await waitFor(() => expect(screen.getByText(/no users found/i)).toBeInTheDocument());
})


test("Handle server error gracefully", async () => {
    server.use(
        rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
            return res(ctx.status(500))
        })
    )

    render(<ApiCallWithMSW />)

    await waitFor(() => expect(screen.getByText(/no users found/i)).toBeInTheDocument());
})




