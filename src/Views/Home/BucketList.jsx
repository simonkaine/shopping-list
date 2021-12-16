import React from 'react';
import { useReducer } from 'react';
// import { useState, useEffect } from 'react';
import AddGoal from '../../Components/AddGoal/AddGoal';

const goalId = 0;

function goalReducer(goals, action) {
    switch(action.type) {
        case 'addGoal': {
            return [{
                id: action.id,
                goal: action.text,
                completed: false
            },]
        }
        case 'update': {
            return goals.map((goal) => {
                if(goal.id === action.update.id) {
                    return action.update;
                }
                return goal;
            })
        }
        case 'deleteGoal': {
            return goals.filter((goal) => goal.id !== action.id)
        }
        default: {
            throw Error(`Unknown action: ${action.type}`)
        }
    }
}


export default function BucketList() {
    const [goals, dispatch] = useReducer(goalReducer, goalId);

    const handleAddGoal = (goal) => {
        dispatch({
            type: 'addGoal',
            id: goalId + 1,
            goal
        })
    }

    const handleUpdateGoal = (update) => {
        dispatch({
            type: 'update',
            update
        })
    }

    const handleDelete = (goalId) => {
        dispatch({
            type: 'deleteGoal',
            id: goalId,
        })
    }


    return (
        <div>
            <h1>
                The Totally Tubular Bucket List!
            </h1>

            <AddGoal addGoal={handleAddGoal}/>

        </div>
    )
}
