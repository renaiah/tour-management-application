import { useContext,useEffect,useReducer,createContext } from 'react'

const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    if (user) {
        try {
            return JSON.parse(user);
        } catch (e) {
            console.error('Error parsing user from localStorage', e);
            return null;
        }
    }
    return null;
};

const initial_state = {
    user: getUserFromLocalStorage(),
    loading: false,
    error: null
};

export const AuthanticationContext = createContext(initial_state)

const AuthReducer = (state,action) => {
    switch (action.type) {
        case "LOGIN_START":
            return{
                user:null,
                loading:true,
                error:null
            };
        case "LOGIN_SUCCESS":
            return{
                user:action.payload,
                loading:false,
                error:null
            };  
        case "LOGIN_FAILURE":
            return{
                user:null,
                loading:false,
                error:action.payload
            };       
        case "REGISTER_SUCCESS":
                return{
                    user:null,
                    loading:false,
                    error:null
                };   
        case "LOGOUT":
            return{
                user:null,
                loading:false,
                error:null
            }; 

        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(AuthReducer,initial_state)

    useEffect(()=>{
        localStorage.setItem('user' , JSON.stringify(state.user))
    },[state.user])

    return <AuthanticationContext.Provider value={{
        user:state.user,
        loading:state.loading,
        error:state.error,
        dispatch
    }}>
        {children}
    </AuthanticationContext.Provider>

}