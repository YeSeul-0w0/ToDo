import SignUpButton from "../button/SignUpButton";
import useRouter from "use-react-router";
import {useState} from "react";

function Login({id,setId}){
    const router=useRouter();

    const [userId, setUserId]=useState(id);
    const [userPassword,setUserPassword]=useState("");


    const onChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        if(name==="id"){
            setUserId(value)
        }
        else if(name==="password"){
            setUserPassword(value)
        }
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if(localStorage.getItem(userId)==null){
            alert("가입 되지 않는 id 입니다.");
            setUserId("");
            setUserPassword("");
        }
        else{
            const check=JSON.parse(localStorage.getItem(userId)).password;
            if(check===userPassword){
                localStorage.setItem("loginInfo",JSON.stringify(userId));
                router.history.push("/todo");
                setId(userId)
            }
            else{
                alert("비밀번호가 일치하지 않습니다.");
            }
        }


    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="id"
                    type="id"
                    placeholder="id"
                    value={userId}
                    onChange={onChange}
                    required />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={userPassword}
                    onChange={onChange}
                    required />
                <input type="submit" value="Login" />
            </form>
            <SignUpButton/>
        </div>
    )
}

export default Login;