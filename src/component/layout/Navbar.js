import React from 'react';
import {Link} from 'react-router-dom';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import {connect} from 'react-redux';
const Navbar = (props) =>{

   const {auth,profile} =props;
   const LinkSelector=auth.uid?<SignInLink userName={profile.userName} />:<SignOutLink />;
return(
    <nav className="nav-wrapper blue">
    <div className="container">
     <Link to="/" className="brand-logo left">Bsr</Link>
          {LinkSelector}
    </div>
  </nav>
)
}
const mapStateProps =(state)=>{
  return{
    auth:state.firebase.auth,
    profile:state.firebase.profile
}
}
export default connect(mapStateProps) (Navbar)