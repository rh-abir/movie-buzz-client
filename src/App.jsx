import { useEffect } from "react";
import "./App.css";

import { fetchDateFromApi } from "./utils/api.js";

function App() {
  useEffect(() => {
    apiTestiong();
  }, []);

  const apiTestiong = () => {
    fetchDateFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return <div> APP</div>;
}

export default App;
