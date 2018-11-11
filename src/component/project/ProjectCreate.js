import React,{Component} from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectaction';
import {Redirect} from 'react-router-dom';
class ProjectCreate extends Component{
    state={
       title:'',
       content:''
    }

    handleChange = (e) =>{
    this.setState({
        [e.target.id]:e.target.value
    })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
    }
    


    render(){
        const{auth}=this.props;
        if(!auth.uid)return <Redirect to="/signin" />
        return(
            <div className="container white">
            <form onSubmit={this.handleSubmit}>
                <h4>Create Project</h4>
                <div className="input-field">
             <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={this.handleChange} />
                </div>


                <div className=" input-field">
             <label htmlFor="content">Content:</label>
            <input type="text" id="content" onChange={this.handleChange} />
                </div>
                
                <div className=" input-field">
            <button className="btn z-depth-0">Create</button>
                </div>
            </form>
            
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(ProjectCreate);