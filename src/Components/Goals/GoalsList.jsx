import React from 'react';
import Goal from './Goal';
// map through goals 
// function takes goals state and both handles for edit and delete
// pass in handles and individual goals to the Goal creation file 

export default function GoalsList({goals, onUpdate, onDelete}) {
    return (
        <div>
            <ul aria-label='list'>
                {goals.map((goal) => (
                    <li key={goal}>
                        <Goal goal={goal} onUpdate={onUpdate} onDelete={onDelete}/>
                    </li>
                ))}
            </ul>
        </div>
    )
};
