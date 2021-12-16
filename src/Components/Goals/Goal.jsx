import React from 'react';
import { useState } from 'react';

export default function Goal({goal, onUpdate, onDelete}) {
    const [updating, setUpdating] = useState(false);

    let goalContent;

    if(updating) {
        goalContent = (
            <>
            <input
                value={goal.goal}
                onChange={(e) => {
                    onUpdate({
                        ...goal,
                        goal: e.target.value,
                    })
                }} />

            <button type='button' onClick={() => setUpdating(false)}>
                Save Goal
            </button>
            </>
        )
    } else {
        goalContent = (
            <>
            <p style={{ textDecoration: goal.completed ? 'line-through' : null }}>{goal.goal}</p>
            <button type='button' onClick={() => setUpdating(true)}>Edit</button>
            </>
        )
    }


    return (
        <div>
            <input 
                type='checkbox' 
                checked={goal.completed}
                onChange={(e) => {
                    onUpdate({
                        ...goal,
                        completed: e.target.value
                    })
                }} />

            {goalContent}

            <button type='button' 
            onClick={() => onDelete(goal.id)}>
                Mark it off!
            </button>
            
        </div>
    )
}

