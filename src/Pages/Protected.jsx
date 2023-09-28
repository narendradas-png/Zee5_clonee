import { Navigate } from "react-router-dom";


//function Protected(props) {
// const { Component, auth} = props;
//const navigate = useNavigate();
//   if(auth)

//      return <Component/>
// else navigate('/login')
//}
const Protected = (props) => {
    const { Component, isLogedin } = props;
    console.log("mylog",isLogedin)
    if(!isLogedin) {
     
        return <Navigate to="/login"/>
        
        }
        
        return Component

}

export default Protected;