import React, { useState } from 'react';
import Todo from './Todo';
import Buttons from './Buttons';

function Stodos({ isdarkmode, todos, counttodos,  setTodos, setFilteredTodos, activeButton, setActiveButton }) {
    const [draggingIndex, setDraggingIndex] = useState(-1);

    const handleDragStart = (index) => {
        setDraggingIndex(index);
    };

    const handleDragEnd = () => {
        setDraggingIndex(-1);
    };

    const handleDragOver = (index) => {
        if (draggingIndex === -1 || draggingIndex === index) {
            return;
        }

        const draggedTodo = todos[draggingIndex];
        const newTodos = [...todos];
        newTodos.splice(draggingIndex, 1);
        newTodos.splice(index, 0, draggedTodo);

        setTodos(newTodos);
        setDraggingIndex(index);
    };

    return (
        <div className={`${
            isdarkmode ? 'bg-dark-very-dark-desaturated-blue' : 'bg-light-very-light-gray'
        } App w-90 md:w-110 absolute top-50 md:top-56 lg:top-60 xl:top-62 font-josefin-sans rounded-md`}>
            <div>
                {todos.map((todo, index) => (
                    <div
                        key={index}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragEnd={handleDragEnd}
                        onDragOver={() => handleDragOver(index)}
                        className={`${
                            index === draggingIndex ? 'opacity-50' : ''
                        }`}
                    >
                        <Todo
                            isdarkmode={isdarkmode}
                            todo={todo}
                            index={index}
                            todos={todos}
                            setTodos={setTodos}
                            activeButton={activeButton}
                        />
                    </div>
                ))}
            </div>
            <div className={`${
                isdarkmode ? 'text-dark-very-dark-grayish-blue' : 'text-light-dark-grayish-blue'
            } flex  flex-row justify-between items-center p-4`}>
                <p>{counttodos.filter((todo) => !todo.ischecked).length} items left</p>
                <div className="hidden md:block">
                    <Buttons
                        isdarkmode={isdarkmode}
                        todos={counttodos}
                        setFilteredTodos={setFilteredTodos}
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                    />
                </div>
                <button onClick={() => setTodos(prevTodos => prevTodos.filter(todo => !todo.ischecked))}>
                    Clear Completed
                </button>
            </div>
        </div>
    );
}

export default Stodos;
