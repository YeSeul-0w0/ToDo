import React from "react";
import {Link} from "react-router-dom";

function LogInButton(){
    return(
        <Link to="/">
            <button>
                로그인 화면으로 돌아가기
            </button>
        </Link>
    )
}

export default LogInButton;