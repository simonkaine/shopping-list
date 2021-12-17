import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App'

beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
        <App />
    )
})

it('Should test for behavior for editing goal', async () => {

    const editButton = await screen.findAllByRole("button", { name: 'edit-Button'});
    userEvent.click(editButton[0]);
    expect(editButton[0]).toBeInTheDocument();

    const checkbox = await screen.findAllByRole("checkbox")
    fireEvent.click(checkbox[0])
    expect(checkbox[0]).toBeInTheDocument()
}) 