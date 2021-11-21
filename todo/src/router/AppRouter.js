import {HashRouter as Router, Routes, Route } from "react-router-dom";
import TodoComponent from "../component/todos/TodoComponent";
import Login from "../component/Login";
import Account from "../component/Account";


function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/todo" element={<TodoComponent/>}/>
                <Route exact path="/auth" element={<Account/>}/>
            </Routes>


        </Router>
    )
}

export default AppRouter;