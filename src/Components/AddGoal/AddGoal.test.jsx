import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App'

beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
        <App />
    )
})

it('Should test for input to add a goal', async () => {

    const labelInput = screen.getByLabelText(/Enter/i)
    expect(labelInput).toBeInTheDocument();

    const newInput = await screen.findAllByRole("textbox");
    userEvent.type(newInput[0], 'pass this test');
    expect(newInput[0]).toBeInTheDocument();
}) 

