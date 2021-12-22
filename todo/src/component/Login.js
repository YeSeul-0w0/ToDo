import SignUpButton from "../button/SignUpButton";
import useRouter from "use-react-router";

function Login({id, setId, password, setPassword}){
    const router=useRouter();

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
        if(localStorage.getItem(id)==null){
            alert("가입 되지 않는 id 입니다.");
            setId("");
            setPassword("");
        }
        else{
            const check=JSON.parse(localStorage.getItem(id)).password;
            if(check===password){
                router.history.push("/todo");
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
            <SignUpButton/>
        </div>
    )
}

export default Login;