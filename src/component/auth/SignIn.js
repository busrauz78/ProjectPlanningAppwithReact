import React,{Component} from 'react';
import {connect} from 'react-redux';
import {signin} from '../../store/actions/authaction';
import {Redirect} from 'react-router-dom';
class SignIn extends Component{
    state={
        email:'',
        password:''
    }

    handleChange = (e) =>{
    this.setState({
        [e.target.id]:e.target.value
    })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
this.props.signin(this.state);
    }
    


    render(){
        const {authError,auth}=this.props;
        if(auth.uid)return <Redirect to="/"/>
        return(
            <div className="container white">
            <form onSubmit={this.handleSubmit}>
                <h4>Sign In</h4>
                <div className="input-field">
             <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
             <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
            <button className="btn z-depth-0">Sign In</button>
                </div>
                <div className="input-field">
            <p className="red-text center">{authError?authError:null}</p>
                </div>
            </form>
            
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
return{
    authError:state.auth.authError,
    auth:state.firebase.auth
}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signin:(creds)=>dispatch(signin(creds))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);