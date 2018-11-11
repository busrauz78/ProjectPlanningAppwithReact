
const initState={
authError:null
}
const authreducer =(state=initState,action)=>{
switch(action.type){
    case 'LOGIN_SUCCESS':
   return{...state,authError:null}
    case 'LOGIN_ERR':
   return {...state,authError:action.err.message}
    case 'LOGOUT_SUCCESS':
   console.log('logout ok');
   return state;
   case 'SIGNUP_SUCCESS':
   console.log('signup success');
   return {...state,authError:null};
   case 'SIGNUP_ERR':
   console.log('signup error');
   return {...state,authError:action.err.message};
    default:
    return state;
    
}
    
}

export default authreducer;