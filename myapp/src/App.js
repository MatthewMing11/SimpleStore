import logo from './logo.svg';
import store from './store.png';
import './App.css';
import React, {useEffect, useState} from "react";

function App() {
  const [products,setProducts] = useState({});
  // const [inputValue, setInputValue] = useState("");
   useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []); // empty array = run once on mount

  // const handleClick = () =>{
  //   // setData(inputValue);
  //   // console.log(data);
  //   fetch("http://localhost:8080/api/products/"+inputValue)
  //   .then(response =>response.json())
  //   .then(data=>setData(data))
  //   .catch(error=>console.error("Error fetching data:",error));
  //   console.log(data);
  //   fetch("http://localhost:8080/api/products")
  //   .then(response=>response.json())
  //   .then(data=>setData(data));
  //   console.log(data);
  // };
  // const handleInputChange = (e)=>{
  //   setInputValue(e.target.value);
  // };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={store}
            alt="Logo"
            width="30"
            height="24"
          />
          SimpleStore
        </a>
      </div>
    </nav>
      <header className="App-header">
        <div className="row">
          {products.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card p-3">
                <h5>{product.name}</h5>
                <p>${product.price}</p>
                <p>{product.amount} remaining</p>
              </div>
            </div>
          ))}
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        <p>{data!={} ? data.name : ""}</p> */}
      </header>
    </div>
  );
}

export default App;
