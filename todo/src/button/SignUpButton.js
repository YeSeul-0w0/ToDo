import React from "react";
import {Link} from "react-router-dom";

function SignUpButton(){
    return(
        <Link to="/auth">
            <button>
                회원가입
            </button>
        </Link>
    )
}

export default SignUpButton;