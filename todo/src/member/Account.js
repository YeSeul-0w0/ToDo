import {useState} from "react";

function Account(){
    const [newId, setNewId]=useState("");
    const [newPassword, setNewPassword]=useState("");
    const [newCheckPassword, setCheckPassword]=useState("");

    const onChange=(event)=>{
        const {
            target:{name,value},
        }=event;

        if(name==="newId"){
            setNewId(value);
        }
        else if(name==="newPassword"){
            setNewPassword(value);
        }
        else if(name==="newCheckPassword"){
            setCheckPassword(value);
        }
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if (localStorage.getItem(newId)===null){
            if(newPassword===newCheckPassword){
                const pass={
                    password:newPassword
                }
                localStorage.setItem(newId,JSON.stringify(pass));
            }
            else{
                alert("비밀번호가 일치하지 않습니다.")
            }
        }
        else{
            alert("중복된 id 값 입니다.")

        }
        setNewId("");
        setNewPassword("");
        setCheckPassword("");
    }


    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="newId"
                    type="newId"
                    placeholder="아이디 입력"
                    value={newId}
                    onChange={onChange}
                    required />
                <input
                    name="newPassword"
                    type="password"
                    placeholder="비밀번호 입력"
                    value={newPassword}
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
        </div>
    )
}

export default Account;