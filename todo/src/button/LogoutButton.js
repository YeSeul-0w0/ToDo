import React from "react";
import {Link} from "react-router-dom";

function LogoutButton(){
    return(
        <Link to="/">
            <button>
                로그아웃
            </button>
        </Link>
    )
}

export default LogoutButton;