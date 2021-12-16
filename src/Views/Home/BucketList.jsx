import React from 'react';
import { useReducer } from 'react';
// import { useState, useEffect } from 'react';
import AddGoal from '../../Components/AddGoal/AddGoal';
import GoalsList from '../../Components/Goals/GoalsList';

const newId = 6;

const goalsArray = [
    {id: 0, goal: 'Watch Spirited away', completed: false},
    {id: 1, goal: 'Sky dive', completed: false},
    {id: 2, goal: 'Make moms spaghetti', completed: false},
    {id: 3, goal: 'Learn spanish', completed: false},
    {id: 4, goal: 'Learn useReducer', completed: false},
    {id: 5, goal: 'Complete Alchemy', completed: false},
];

function goalReducer(goals, action) {
    switch(action.type) {
        case 'addGoal': {
            return [ ...goals, {
                id: action.id,
                goal: action.goal,
                completed: false,
            }]
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
};


export default function BucketList() {
    const [goals, dispatch] = useReducer(goalReducer, goalsArray);

    const handleAddGoal = (goal) => {
        dispatch({
            type: 'addGoal',
            id: newId + 1,
            goal,
        })
    };

    const handleUpdateGoal = (update) => {
        dispatch({
            type: 'update',
            update,
        })
    };

    const handleDelete = (goalId) => {
        dispatch({
            type: 'deleteGoal',
            id: goalId,
        })
    };

    // Needs a list to call that passes handle and state props
    return (
        <div>

            <h1>
                The Totally Tubular Bucket List!
            </h1>

            <AddGoal addGoal={handleAddGoal}/>

            <GoalsList 
                goals={goals} 
                onUpdate={handleUpdateGoal} 
                onDelete={handleDelete} />

        </div>
    )
}
