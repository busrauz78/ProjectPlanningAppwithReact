import React from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom';

const ProjectDetail = (props) =>{
  const {project}=props.location.state;
  const {auth}=props;
if(!auth.uid) return <Redirect to="/signin" />
  if(project){
    return(
      <div className="project-detail container section">
      <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
           <span className="card-title">{project.title}</span>
           <p>{project.content}</p>
           <p>Posted by {project.userName}</p>
          
      </div>
     </div>
      </div>
    
  )
  }
  else{
    return(<div>Nothing</div>)
  }

}
const mapStateToProps = (state) => {


  return {
    auth:state.firebase.auth
  }
}

export default 
  connect(mapStateToProps)(ProjectDetail)