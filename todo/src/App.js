import './App.css';
import Header from "./tools/Header";
import Footer from "./tools/Footer";
import AppRouter from "./router/AppRouter";


function App() {
    return (
        <>
            <Header>
            </Header>
            <div id="content">
                <AppRouter/>
            </div>
            <Footer>

            </Footer>
        </>


    );
}

export default App;
