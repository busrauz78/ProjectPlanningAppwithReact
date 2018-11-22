import React from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import moment from 'moment';
import _ from 'lodash';
import {NavLink} from 'react-router-dom'
const Recent =(props)=> {
const{projects}=props;

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

const mapStateProps= (state) => {
  
    const    auth=state.firebase.auth
      const project=_.map(state.firestore.ordered.users,(user)=>{
        return user.id===auth.uid?user.projects:null
      })
      const arr = _.map(project[0], (val) => {
        return val
      });
    
      return{
        projects:arr,
     auth:auth
      }
    
    }
    export default compose(
      connect(mapStateProps),
      firestoreConnect((props)=>[
        { collection: 'users', doc: props.auth.uid, subcollections: [{ collection: 'projects' }] }
      ]
      ))(Recent);