import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponents";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent buttonText="MICHELA react button" />
        <ImageComponent
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInF7X0ygu8UbgJWhmU8a-yMg0xfGBKzyXww&usqp=CAU"
          altText="mare"
        />
      </header>
    </div>
  );
}
export default App;
