import React from "react";
import {Link} from "react-router-dom";

function LogoutButton(){
    return(
        <Link to="/">
            <button>
                ๋ก๊ทธ์์
            </button>
        </Link>
    )
}

export default LogoutButton;