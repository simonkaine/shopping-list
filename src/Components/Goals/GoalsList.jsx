import React from 'react';
import Goal from './Goal';
// map through goals 
// function takes goals state and both handles for edit and delete
// pass in handles and individual goals to the Goal creation file 

export default function GoalsList({goals, onUpdate, onDelete}) {
    return (
        <div>
            <ul aria-label='list' style={{listStyleType: 'none'}}>
                {goals.map((theGoal) => (
                    <li key={theGoal.id} >
                        <Goal goal={theGoal} onUpdate={onUpdate} onDelete={onDelete}/>
                    </li>
                ))}
            </ul>
        </div>
    )
};
