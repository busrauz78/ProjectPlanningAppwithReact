const initState ={
projects:[
    {id:1,title:"Project 1",content:"blah blah blah"},
    {id:2,title:"Project 2",content:"blah blah blah"},
    {id:3,title:"Project 3",content:"blah blah blah"}


]
}

const projectreducer=(state=initState,action)=>{
    switch(action.type){
        case 'PROJECT_CREATE':
        console.log('heeyy',action.project);
        return state;
        case 'PROJECT_CREATE_ERR':
        console.log('heyyo',action.err);
        return state;
        default:
        return state;
    }
    
}

export default projectreducer;