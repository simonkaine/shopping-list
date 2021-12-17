import React from 'react';
import { screen, render } from '@testing-library/react';
import AddGoal from './AddGoal';

it('Should test for input to add a goal', async () => {
    const {container} = render(
        <AddGoal />
    )
    const labelInput = screen.getByLabelText(/Enter/i)
    expect(labelInput).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})
