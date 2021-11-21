import {useState} from "react";

function Login(){
    const [id, setId]=useState("");
    const [password, setPassword]=useState("");

    const onChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        if(name==="id"){
            setId(value);
        }
        else if(name==="password"){
            setPassword(value);
        }
    }

    const onSubmit=(event)=>{
        event.preventDefault();
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="id"
                    type="id"
                    placeholder="id"
                    value={id}
                    onChange={onChange}
                    required />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                    required />
                <input type="submit" value="Login" />
            </form>
            <button> 회원가입 </button>
        </div>
    )
}

export default Login;