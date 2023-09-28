import "./Styles/App.css"
import AllRoutes from "./Pages/AllRoutes";
import { useState, useContext } from "react";
import { AuthSuccess } from "./Context/AuthContext/Action";
import { AuthContext } from "./Context/AuthContext/AuthContext";


function App() {
  const { dispatch } = useContext(AuthContext);
  const checkLogedin = () => {  
    const token = localStorage.getItem('Zee5-token')
    if(token)
    {
      dispatch(AuthSuccess(true));
      return true
    }
    else 
      return false
  }
  const[isLogedin,setIsLogedin] = useState(checkLogedin());
  return (
    <div className="App">
      <AllRoutes isLogedin ={isLogedin} setIsLogedin ={setIsLogedin}  />
    </div>
  );
}

export default App;
