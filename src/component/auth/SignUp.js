import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signup} from '../../store/actions/authaction';
class SignUp extends Component{
    state={
        email:'',
        password:'',
        username:''
    }

    handleChange = (e) =>{
    this.setState({
        [e.target.id]:e.target.value
    })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signup(this.state);
    }
    


    render(){
        const{auth,authError}=this.props;
        if(auth.uid) return <Redirect to="/" />
        return(
            <div className="container white">
            <form onSubmit={this.handleSubmit}>
                <h4>Sign Up</h4>
                <div className="input-field">
             <label htmlFor="username">User Name:</label>
            <input type="text" id="username" onChange={this.handleChange} />
                </div>


                <div className=" input-field">
             <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className=" input-field">
             <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className=" input-field">
            <button className="btn z-depth-0">Sign Up</button>
                </div>
                <div className=" input-field">
           {authError?<p className="red-text">{authError}</p>:null}
                </div>
            </form>
            
            </div>
        );
    }
}
const mapStateToProps =(state)=>{
    return{
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        signup:(newUser)=>{dispatch(signup(newUser))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (SignUp);