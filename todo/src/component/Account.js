import {useState} from "react";
import LogInButton from "../button/LogInButton";
import useRouter from "use-react-router";

function Account({ id, setId, password, setPassword }){
    const router=useRouter();
    const [newCheckPassword, setCheckPassword]=useState("");

    const onChange=(event)=>{
        const {
            target:{name,value},
        }=event;

        if(name==="newId"){
            setId(value);
        }
        else if(name==="newPassword"){
            setPassword(value);
        }
        else if(name==="newCheckPassword"){
            setCheckPassword(value);
        }
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if (localStorage.getItem(id)===null){
            if(password===newCheckPassword){
                const pass={
                    password:password
                }
                localStorage.setItem(id,JSON.stringify(pass));
                router.history.push("/todo")
            }
            else{
                alert("비밀번호가 일치하지 않습니다.")
            }
        }
        else{
            alert("중복된 id 값 입니다.")

        }
        setId("");
        setPassword("");
        setCheckPassword("");
    }


    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="newId"
                    type="newId"
                    placeholder="아이디 입력"
                    value={id}
                    onChange={onChange}
                    required />
                <input
                    name="newPassword"
                    type="password"
                    placeholder="비밀번호 입력"
                    value={password}
                    onChange={onChange}
                    required />
                <input
                    name="newCheckPassword"
                    type="password"
                    placeholder="비밀번호 확인"
                    value={newCheckPassword}
                    onChange={onChange}
                    required />
                <input type="submit" value="Login" />
            </form>
            <LogInButton/>
        </div>
    )
}

export default Account;