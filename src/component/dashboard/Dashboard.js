import React ,{Component}from 'react';
import _  from 'lodash'
import ProjectList from '../project/ProjectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux'
import {Redirect} from 'react-router-dom';
class Dashboard extends Component {
  render() {
  const{projects,auth}=this.props;
 if(!auth.uid) return<Redirect to="/signin"/>
    return (

      <div className="dashboard container">
      <div className="row">
      <div className="col s12"><ProjectList projects={projects}/></div>
    

      </div>
  
        </div>
    )     
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
  ))(Dashboard);