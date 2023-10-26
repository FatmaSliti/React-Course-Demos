import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"

describe('Greeting component', () => { // to create a test suite
    test('renders Hello world as a text', () => {
        //Arrange
        render(<Greeting />)

        //Act 
        // ...

        //Assert
        // screen.getByText('Hello world', { exact: false })
        const helloWorldElement = screen.getByText('Hello world!')
        expect(helloWorldElement).toBeInTheDocument();
    })

    test('renders good to see you if the button was not clicked', () => {
        //Arrange
        render(<Greeting />)

        //Act
        //...nothing

        //Asset
        const text = screen.getByText('It\'s good to see you!');
        expect(text).toBeInTheDocument();

    });

    test('renders Changed! if the button was clicked', () => {
        //Arrange
        render(<Greeting />)

        //Act
        // const button = screen.getByText('Change Text!'); //also correct
        const button = screen.getByRole('button');
        // fireEvent.click(button);
        userEvent.click(button);

        //Asset
        const text = screen.getByText('Changed!')
        expect(text).toBeInTheDocument();
    });

    test('does not render good to see you! if the button was clicked', () => {
        //Arrange
        render(<Greeting />)

        //Act
        const button = screen.getByRole('button');
        userEvent.click(button);

        //Asset
        const text = screen.queryByText('It\'s good to see you!');// getByText would anyways throw an error if it's not founded
        //queryByText : return null if the element is not found
        expect(text).toBeNull();
        // expect(text).not.toBeInTheDocument();
    })
})
