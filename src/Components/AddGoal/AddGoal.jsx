import React from 'react'
import { useState } from 'react';

export default function AddGoal({addGoal}) {
    const [goal, setGoal] = useState('');

    const submitHandle = (e) => {
        e.preventDefault();
        setGoal('');
        addGoal(goal);
    };

    return (
        <div>
            <form onSubmit={submitHandle}>
                <label aria-label='newGoal' htmlFor='addGoal'>Enter: </label>
                <input 
                    id='addGoal'
                    type='text' 
                    placeholder='Enter a goal!'
                    value={goal} onChange={(e) => setGoal(e.target.value)} />

                <button type='submit'>
                    Add GOAL!
                </button>
            </form>
        </div>
    )
}
