import {useState} from "react";

function InputFrom({addTodo}){
    const [input, setInput]=useState("")

    const handleChange=(e)=>{
        setInput(e.target.value);
    }

    const handleAddTodo=()=>{
        addTodo(input)
        setInput("")
    }

    const handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            handleAddTodo();
        }
    }

    const handleClick=()=>{
        handleAddTodo();
    }

    return (
        <div className="form">
            <input
                value={input}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            <div
                className="create-button"
                onClick={handleClick}
                onKeyPress={handleKeyPress}
            >
                등록
            </div>
        </div>
    )
}

export default InputFrom;