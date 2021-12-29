import TodoInput from "./TodoInput";
import LogoutButton from "../../button/LogoutButton";
import {useEffect, useState} from "react";

function TodoComponent(){
    const key=JSON.parse(localStorage.getItem("userInfo"))+"_todo"
    const [todos, setTodos]=useState(()=>{
        if (key) return key
        localStorage.setItem(key, "[]")
    })

    useEffect(()=>{
        const handler=(event)=>{
            if (event.storageArea !== localStorage) return
            if (event.key==key){
                let newAry=JSON.parse(event.newValue);
                setTodos(()=>{
                    return newAry
                })
            }
        }

        window.addEventListener('storage',handler);

        return () =>{
            window.removeEventListener('storage',handler);
        }
    })

    const addTodo=(text)=>{
        setTodos((prevTodos)=>{
            const id=
                prevTodos.length==0?0:prevTodos[prevTodos.length-1].id + 1;
            const add = {
                text,
                checked:false,
            };
            const snapshot=prevTodos.concat({
                id,
                add,
            });
            localStorage.setItem("todos",JSON.stringify(snapshot));
            return snapshot;
        });
    }

    const toggleTodo=(element)=>{
        setTodos((prevTodos)=>{
            const copiedTodos=[...prevTodos];
            const idx=copiedTodos.indexOf(element);
            if(idx<0) return prevTodos;
            copiedTodos[idx].add.checked = !copiedTodos[idx].add.checked;
            localStorage.setItem(key,JSON.stringify(copiedTodos));
            return copiedTodos;
        })
    }

    const removeTodo=(element)=>{
        setTodos((prevTodos)=>{
            const temp=[...prevTodos];
            const index=temp.indexOf(element)
            temp.slice(index,1);
            localStorage.setItem(key,JSON.stringify(temp))
            return temp;
        })
    }
    return(
        <div>
            
            <TodoInput />
            <LogoutButton/>
        </div>
    )
}

export default TodoComponent;