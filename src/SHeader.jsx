import React from "react";
import { useState } from "react";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import add from "./assets/plus.svg";

function SHeader({ isdarkmode, setDarkmode, todos, setTodos, newtodo, setNewtodo }) {
  const handleDarkMode = () => {
    setDarkmode(!isdarkmode);
  };

  const handleAddTodo = () => {
    if (newtodo.trim() !== "" && todos.length < 8) {
      setTodos((prevTodos) => [...prevTodos, { text: newtodo, ischecked: false }]);
    }
    setNewtodo("");
  };

  const handleInputChange = (e) => {
    setNewtodo(e.target.value);
  };

  return (
    <header
      className={`${
        isdarkmode
          ? "bg-mobile-dark md:bg-desktop-dark"
          : "bg-mobile-light md:bg-desktop-light"
      } bg-cover bg-center bg-no-repeat h-56 md:h-64 lg:h-72 xl:h-80 w-full flex flex-col items-center justify-center`}
    >
      <div className="flex justify-between my-7 w-90 md:w-110">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-wide text-light-very-light-gray">
          TODO
        </h1>
        <button onClick={handleDarkMode}>
          <img src={isdarkmode ? sun : moon} alt="dark mode" />
        </button>
      </div>
      <div
        className={`${
          isdarkmode
            ? "bg-dark-very-dark-desaturated-blue"
            : "bg-light-very-light-gray"
        } rounded-md w-90 md:w-110 mx-7 h-1/4 lg:h-1/5 xl:h-1/5 flex items-center justify-center`}
      >
        <div
          className={`${
            isdarkmode
              ? "border-dark-very-dark-grayish-blue"
              : "border-light-very-light-grayish-blue"
          } w-7 h-7 lg:w-8 lg:h-8 xl:w-8 xl:h-8 rounded-full bg-transparent border-2`}
        >
          <button
            className="w-full h-full flex justify-center items-center"
            onClick={handleAddTodo}
          >
            <svg
              className="w-2/3 h-2/3"
              fill={isdarkmode ? "white" : "gray-400"}
              viewBox="0 0 24 24"
            >
              <path d="M19 13h-6v6h-2v-6H 5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
        </div>
        <input
          type="text"
          id="newtodo"
          value={newtodo}
          onChange={handleInputChange}
          placeholder="Create a new todo..."
          className={`${
            isdarkmode
              ? "text-dark-light-grayish-blue"
              : "text-light-very-dark-grayish-blue"
          } rounded-md w-5/6 h-full bg-transparent p-4 focus:outline-none focus:caret-primary-bright-blue text-lg`}
        />
      </div>
    </header>
  );
}

export default SHeader;
