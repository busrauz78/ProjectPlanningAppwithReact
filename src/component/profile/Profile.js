import React from 'react'
import Header from './layout/Header';
import Recent from './layout/Recent';
import {connect} from 'react-redux';
const Profile =(props)=> {
    const{auth,profile}=props;
    
  return (
    <div>
      <Header profile={profile}/>
      <Recent />
    </div>
  )
}
const mapStateToProps =(state)=>{
    return {
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default connect(mapStateToProps) (Profile);