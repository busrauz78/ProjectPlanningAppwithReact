

export const signin =(credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERR',err})
        });
        
    }
}

export const signout=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:'LOGOUT_SUCCESS'})
        })
    }
}

export const signup =(newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
       firebase.auth().createUserWithEmailAndPassword(
           newUser.email,
           newUser.password
       ).then(resp=>{
   
           return firestore.collection('users').doc(resp.user.uid).set({
            userName:newUser.username,
            initials:newUser.username.split(' ')[0]
           
           }); 
       }).then(()=>{
           dispatch({type:'SIGNUP_SUCCESS'})
       }).catch((err)=>{
           dispatch({type:'SIGNUP_ERR',err})
       })
        
    }
}