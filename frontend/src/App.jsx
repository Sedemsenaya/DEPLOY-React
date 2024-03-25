import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navi from "./Components/Navi.jsx";
import Cardi from "./Components/Cardi.jsx";
import ListG from "./Components/ListG.jsx";

function App() {

  // Create an array with 20 elements (you can adjust the number as needed)
  const cardis = new Array(20).fill(null);

  return (
      <>
        <Navi/>

        <div className="container text-center" style={
          {
            "marginTop" : " 100px",
              "display" :"flex"
          }
        }>
          <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col">
{/* Map over the array and render a Cardi component for each element */}
              {cardis.map((_, index) => (
                <Cardi key={index} /> // Make sure to provide a unique key
              ))}
            </div>
            <div className="col-sm-2">
              Column
            </div>
          </div>
        </div>
      </>
  )
}

export default App
