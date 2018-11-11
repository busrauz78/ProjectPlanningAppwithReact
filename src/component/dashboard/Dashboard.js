import React ,{Component}from 'react';

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

  return{
    projects:state.firestore.ordered.projects,
    auth:state.firebase.auth
  }

}
export default compose(
  connect(mapStateProps),
  firestoreConnect([
    {collection:"projects"}
  ])
  )(Dashboard);