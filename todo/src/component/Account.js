import {useState} from "react";
import LogInButton from "../button/LogInButton";
import useRouter from "use-react-router";

function Account({ id, setId }){
    const router=useRouter();
    const [newUserId, setNewUserId]=useState(id);
    const [newUserPassword, setNewUserPassword]=useState("");

    const [newCheckPassword, setCheckPassword]=useState("");

    const onChange=(event)=>{
        const {
            target:{name,value},
        }=event;

        if(name==="newId"){
            setNewUserId(value)

        }
        else if(name==="newPassword"){
            setNewUserPassword(value);
        }
        else if(name==="newCheckPassword"){
            setCheckPassword(value);
        }
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if (localStorage.getItem(newUserId)===null){
            if(newUserPassword===newCheckPassword){
                const pass={
                    password:newUserPassword
                }
                localStorage.setItem(newUserId,JSON.stringify(pass));
                setId(newUserId);
                router.history.push("/todo")
            }
            else{
                alert("비밀번호가 일치하지 않습니다.")
            }
        }
        else{
            alert("중복된 id 값 입니다.")

        }
        setNewUserId("");
        setNewUserPassword("");
        setCheckPassword("");
    }


    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="newId"
                    type="newId"
                    placeholder="아이디 입력"
                    value={newUserId}
                    onChange={onChange}
                    required />
                <input
                    name="newPassword"
                    type="password"
                    placeholder="비밀번호 입력"
                    value={newUserPassword}
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