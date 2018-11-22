export const createProject = (project) => {
    return (dispatch,getState, {getFirebase,getFirestore}) => {
    const username=getState().firebase.profile.userName;
    
    const id=getState().firebase.auth.uid;
   
      getFirestore().collection('users').doc(id).collection('projects').add({
        ...project,
        userName:username,
        authorId: id,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'PROJECT_CREATE' });
      }).catch(err => {
        dispatch({ type: 'PROJECT_CREATE_ERR' }, err);
      });
    }
  };