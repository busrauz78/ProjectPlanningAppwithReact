import React from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import moment from 'moment';
import {NavLink} from 'react-router-dom'
const Recent =(props)=> {
const{projects}=props;
console.log(projects);
 if(projects){
     return (
        <div className="container">
        <h5>Recent Created Projects</h5>
        <ul className="collection" > 
            {projects.map(project=>{return <li className="collection-item " key={project.id}><NavLink to={'/projects/'+ project.id}><div className="black-text">{project.title}</div><div className="black-text">{moment(project.createdAt.toDate()).calendar()}</div></NavLink></li>})}
            </ul></div>

     )
 }
 else{
     return <div>You have not any project yet...</div>
 }
}

const mapStateToProps = (state)=>{
const auth=state.firebase.auth
const projects=state.firestore.ordered.projects
    return{
projects:projects && projects.filter((project)=>{return project.authorId==auth.uid})
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      {collection:"projects"}
    ])
    )(Recent);