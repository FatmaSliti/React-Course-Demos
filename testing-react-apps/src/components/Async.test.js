import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        //Arrange
        //override the build in fetch function with our own one to not actually send a request to the API (reduce network traffic ...) also avoid potential problems where the server is down and our test would fail for that reason
        window.fetch = jest.fn(); //fn creates a mock function
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post'}] //because data in our case is an array
        });
        render(<Async />)

        //Act
        //...nothing

        //Assert
        // const listItemElements = screen.getAllByRole('listitem') //getAllByRole because getByRole will fail if we have more than one item but also getAllByRole will fail because the list items should be initially on the screen but here they're fetched after rendering the empty array of the initial state
        const listItemElements = await screen.findAllByRole('listitem')
        //find queries unlike get queries returns a promise
        expect(listItemElements).not.toHaveLength(0);
    });
})

