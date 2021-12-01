import {HashRouter as Router, Switch, Route } from "react-router-dom";
import TodoComponent from "../component/todos/TodoComponent";
import Login from "../component/Login";
import Account from "../component/Account";


function AppRouter(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/todo" component={TodoComponent}/>
                <Route path="/auth" component={Account}/>
            </Switch>


        </Router>
    )
}

export default AppRouter;