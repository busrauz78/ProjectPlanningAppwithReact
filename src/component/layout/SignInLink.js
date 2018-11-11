import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signout} from '../../store/actions/authaction';
 const SignInLink= (props)=>{

return(
    <ul className="right">
    <li><NavLink to="/create">New Project</NavLink></li>
    <li> <a href onClick={props.signout}>Sign Out</a></li>
    <li><NavLink to="/" className="btn">{props.profile}</NavLink></li>

    
    </ul>
);


}

const mapDispatchToProps=(dispatch)=>{
    return{
        signout:()=>dispatch(signout())
    }
}

export default connect(null,mapDispatchToProps)(SignInLink);