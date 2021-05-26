import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Header></Header>
      <div className="app__body">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
