import React, { useState } from "react";
import SHeader from "./SHeader";
import Stodos from "./Stodos";
import Buttons from "./Buttons";
import "./index.css";
import noitemsdark from "/noitemsd.svg";
import noitemslight from "/noitemsl.svg";

function App() {
  const [darkmode, setDarkmode] = useState(true);
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewtodo] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [activeButton, setActiveButton] = useState("All");


  return (
    <div
      className={`${
        darkmode ? "bg-dark-very-dark-blue" : "bg-light-very-light-grayish-blue"
      } App min-w-full h-dvh font-josefin-sans flex flex-col items-center justify-between`}
    >
      <SHeader
        isdarkmode={darkmode}
        setDarkmode={setDarkmode}
        todos={todos}
        setTodos={setTodos}
        newtodo={newtodo}
        setNewtodo={setNewtodo}
      />
      <Stodos
          isdarkmode={darkmode}
          todos={filteredTodos}
          counttodos={todos}
          setTodos={setTodos}
          setFilteredTodos={setFilteredTodos}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          className="mb-44"
        />
      {filteredTodos.length === 0 ? (
        darkmode ? (
          <div className="w-full h-7 flex flex-col items-center text-dark-light-grayish-blue font-bold ">
            
            <img src={noitemsdark} alt="no items" className="w-60 mt-32 absolute bottom-96" />
            <span>No Items...</span>
          </div>
        ) : (
          <>
          <div className="w-full h-7 flex flex-col items-center font-bold text-light-very-dark-grayish-blue absolute bottom-96">
            <img src={noitemslight} alt="no items" className="w-60 mt-32" />
            <span>No Items...</span>
          </div>
          </>
        ))
        : null}
      
      <footer className="flex flex-col items-center gap-5">
        <div className="md:hidden">
        <Buttons
          isdarkmode={darkmode}
          todos={todos}
          setFilteredTodos={setFilteredTodos}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        </div>
        <div className="flex flex-col items-center ">
          <p className={` ${darkmode ? 'text-dark-very-dark-grayish-blue' : 'text-light-dark-grayish-blue'}`}><strong>Drag and drop to reorder list</strong></p>
          <p className={`${darkmode ? 'text-dark-very-dark-grayish-blue' : 'text-light-dark-grayish-blue'}`}> Coded by <a className="text-primary-bright-blue" href="https://github.com/chemsodev" target="_blank" rel="noreferrer">Chemso</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
