import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState({ error: false, message: "" });

  useEffect(() => {
    // whatever we want to happen on load and update
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      const response = await fetch("https://tronalddump.io/random/quote");
      if (response.status !== 200) {
        throw new Error("Oops!");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError({ error: true, message: error.message });
    }
  };

  if (error.error) {
    return <h1>An error has occured: {error.message}</h1>;
  }
  return (
    <div>
      <h1>Tronald Dump Quote Machine</h1>
      <p>{data.value}</p>
      <button onClick={handleFetch}>Click</button>
    </div>
  );
};

export default App;
