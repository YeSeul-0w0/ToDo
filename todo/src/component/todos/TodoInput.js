import {useState} from "react";

function TodoInput(){
    const currentId=localStorage.getItem("loginInfo")

    const [newTodo, setNewTodo]=useState('');

    const onChange=(event)=>{
        setNewTodo(event.target.value)
        console.log(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        const key=currentId+"_todo"
        if (localStorage.getItem(key)==null){
            localStorage.setItem(key,JSON.stringify(newTodo));
        }
        else{

        }
        setNewTodo("")
    }
    return(
        <form onSubmit={onSubmit}>
            <input
                name="newTodo"
                type="text"
                placeholder="할일을 입력하세요"
                value={newTodo}
                onChange={onChange}
                required
            />
            <input
                type="submit"
                value="등록"
            />
        </form>
    )
}

export default TodoInput;