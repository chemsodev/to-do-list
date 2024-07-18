import check from "/icon-check.svg";
import cross from "/icon-cross.svg";

function Todo({ isdarkmode, todo, todos,setTodos, index , activeButton}) {

    const handleCheck = () => {
    if (activeButton !== "All") {
        alert('You can only check or uncheck items in the "All" section.');
        return;
        }
        const newTodos = [...todos];
        newTodos[index].ischecked = !newTodos[index].ischecked;
        setTodos(newTodos);

    }

    const styles = {
        base: isdarkmode
            ? "dark-very-dark-grayish-blue"
            : "light-very-light-grayish-blue",
        checked: "bg-gradient-to-br from-primary-first via-primary-third to-primary-second",
        unchecked: "bg-transparent",
        text: isdarkmode
            ? "text-dark-light-grayish-blue"
            : "text-light-very-dark-grayish-blue",
        lineThrough: todo.ischecked
            ? (isdarkmode ? "text-dark-very-dark-grayish-blue line-through" : "text-light-light-grayish-blue line-through")
            : "line-through-none",
    };

    return (
        <div>
            <div draggable="true" className="w-full bg-transparent flex justify-between p-4">
                <button onClick={handleCheck} className={`w-7 h-7 rounded-full border-2 flex justify-center items-center mr-4 border-${styles.base} ${todo.ischecked ? styles.checked : styles.unchecked}`}>
                    {todo.ischecked && <img src={check} alt="check"/>}
                </button>
                <div className={`text-lg font-josefin-sans w-5/6 ${styles.text} ${todo.ischecked ? styles.lineThrough : ""}`}>{todo.text}</div>
                <button className="w-7 h-7" onClick={() => setTodos(prevTodos => prevTodos.filter((_, i) => i !== index))}>
                    <img src={cross} alt="" />
                </button>
            </div>
            <hr className={`border-0 h-px bg-${styles.base}`} />
        </div>
    );
}

export default Todo;

