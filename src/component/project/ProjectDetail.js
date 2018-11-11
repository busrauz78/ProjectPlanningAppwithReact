import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom';
import moment from 'moment';
const ProjectDetail = (props) =>{
  const {project,auth}=props;
if(!auth.uid) return <Redirect to="/signin" />
  if(project){
    return(
      <div className="project-detail container section">
      <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
           <span className="card-title">{project.title}</span>
           <p>{project.content}</p>
           <p>Posted by {project.userName}</p>
           <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
     </div>
      </div>
    
  )
  }
  else{
    return(<div>Nothing</div>)
  }

}
const mapStateToProps = (state, ownProps) => {

  const id = ownProps.match.params.id;

  const projects = state.firestore.data.projects;

  const project = projects ? projects[id] : null;

  return {
    project: project,
    auth:state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetail)