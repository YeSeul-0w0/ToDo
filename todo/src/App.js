import './App.css';
import Header from "./tools/Header";
import Footer from "./tools/Footer";
import Account from "./member/Account";



function App() {
  return (
      <>
        <Header>
        </Header>
        <div id="content">
            <Account></Account>
        </div>
        <Footer>

        </Footer>
      </>


  );
}

export default App;
