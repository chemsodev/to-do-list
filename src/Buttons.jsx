import React, { useState, useEffect } from 'react';

function Buttons({ isdarkmode, todos, setFilteredTodos, activeButton, setActiveButton }) {

    useEffect(() => {
        if (activeButton === "All") {
            setFilteredTodos(todos);
        } else if (activeButton === "Active") {
            setFilteredTodos(todos.filter((todo) => !todo.ischecked));
        } else if (activeButton === "Completed") {
            setFilteredTodos(todos.filter((todo) => todo.ischecked));
        }
    }, [activeButton, todos, setFilteredTodos]);

    const showAll = () => {
        setActiveButton("All");
    }

    const showActive = () => {
        setActiveButton("Active");
    }

    const showCompleted = () => {
        setActiveButton("Completed");
    }

    return (
        <div className={`flex justify-center w-90 md rounded-md p-4 md:p-0 font-bold   ${isdarkmode ? 'text-dark-dark-grayish-blue bg-dark-very-dark-desaturated-blue' : 'text-light-dark-grayish-blue bg-light-very-light-gray'}`}>
            <button onClick={showAll} className={activeButton === "All" ? "mr-4 text-primary-bright-blue" : "mr-4"}>All</button>
            <button onClick={showActive} className={activeButton === "Active" ? "mr-4 text-primary-bright-blue" : "mr-4"}>Active</button>
            <button onClick={showCompleted} className={activeButton === "Completed" ? "text-primary-bright-blue" : ""}>Completed</button>
        </div>
    );
}

export default Buttons;
