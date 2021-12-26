import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import Login from './component/Login';
import TodoComponent from './component/todos/TodoComponent';
import Account from './component/Account';
import Header from "./tools/Header";
import Footer from "./tools/Footer";



function App() {
    const [id, setId] = useState('');


    return (
        <>
            <Header>
            </Header>
            <div id="content">
                <Router>
                    <Switch>
                        <Route exact path="/" component={() => <Login id={id} setId={setId} exact />} />
                        <Route path="/todo" component={() => <TodoComponent id={id} />} exact />
                        <Route path="/auth" component={() => <Account id={id} setId={setId} exact />} />
                    </Switch>
                </Router>
            </div>
            <Footer>

            </Footer>
        </>


    );
}

export default App;
