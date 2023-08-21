import { createContext, useContext, useReducer } from "react";

const UseContext = createContext();
const UseContextProvider = ({ children }) => {
      const initialState = {
            user: [

            ],
            msg: "",
            isLogged: false,
         
      }

      const reducer = (state, action) => {
            console.log(action)
            if(action.type=="ADD_USER") {

                  state.user.push(action.payload);
                  state.msg = "Registered Successfull";
                  console.log(state.user)
                  return { ...state }
            }
            if(action.type=="LOGIN") {
                  console.log("Login reducer action")
                  state.isLogged=true;
                  return {
                        ...state
                  }
            }
            if(action.type=="LOGOUT"){
                   state.isLogged=false;
                   return {
                        ...state
                   }
            }
           
            return {
                  ...state
            }
            
            

      }




      const [state, dispatch] = useReducer(reducer, initialState);

      const AddUser = (data) => {
            dispatch({ type: "ADD_USER", payload: data })


      }
      const LoginDispatch=()=>{
             console.log("login dispatch hookm ")
             dispatch({type:"LOGIN"})
      }
      const LogoutDispatch=()=>{
             dispatch({type:"LOGOUT"})
             
      }
      console.log(state)
      return <UseContext.Provider value={{ ...state ,LoginDispatch,AddUser,LogoutDispatch}}>{children}</UseContext.Provider>

}
const AccesContext = () => {
      return useContext(UseContext);
}
export { UseContextProvider, AccesContext };