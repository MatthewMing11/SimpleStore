import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
  const [data,setData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const handleClick = () =>{
    // setData(inputValue);
    // console.log(data);
    fetch("http://localhost:8080/api/products/"+inputValue)
    .then(response =>response.json())
    .then(data=>setData(data))
    .catch(error=>console.error("Error fetching data:",error));
    console.log(data);
  };
  const handleInputChange = (e)=>{
    setInputValue(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
        >
          <input 
          type = "text"
          value ={inputValue}
          onChange={handleInputChange}
          />
          <button type="submit">Submit </button>
        </form>
        <p>{data!={} ? data.name : ""}</p>
      </header>
    </div>
  );
}

export default App;
