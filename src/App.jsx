import { useState } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");

  const handleFetch = async () => {
    // fetch("https://tronalddump.io/random/quote")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    const response = await fetch("https://tronalddump.io/random/quote");
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Tronald Dump Quote Machine</h1>
      <p>{quote}</p>
      <button onClick={handleFetch}>Click</button>
    </div>
  );
};

export default App;
