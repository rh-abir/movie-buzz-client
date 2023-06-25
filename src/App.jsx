import { useEffect } from "react";
import "./App.css";

import { fetchDateFromApi } from "./utils/api.js";

import { useSelector, useDispatch } from "react-redux";

import { getApiConfiguration } from "./store/homeSlice";





function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home)
  
  useEffect(() => {
    apiTestiong();
  }, []);

  const apiTestiong = () => {
    fetchDateFromApi("/movie/popular").then((res) => {
      // console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  console.log(url)

  return <div className="App"> APP
   {url?.total_pages}
  </div>;
}

export default App;
