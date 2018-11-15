import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signout} from '../../store/actions/authaction';
 const SignInLink= (props)=>{
const name=props.userName&&props.userName.split(" ");
const shortName=name&&name.map(letter=>{
return letter[0]
})
const brandName=shortName&&shortName.join("")

return(
    <ul className="right">
    <li><NavLink to="/create">New Project</NavLink></li>
    <li><NavLink to="/profile"><button  className="btn waves-effect waves-light btn-floating">{brandName}</button></NavLink></li>
    <li> <button  className="btn waves-effect waves-light red" onClick={props.signout}>Sign Out<i className="fas fa-sign-out-alt right"></i></button></li>

    
    </ul>
);


}

const mapDispatchToProps=(dispatch)=>{
    return{
        signout:()=>dispatch(signout())
    }
}

export default connect(null,mapDispatchToProps)(SignInLink);