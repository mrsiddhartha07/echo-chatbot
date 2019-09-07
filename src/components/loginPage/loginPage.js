import React from 'react';
import {connect} from 'react-redux';
import actionsCreator from '../../actionsCreator';
import {TRIGGER_LOGIN} from '../../constants';

class LoginPage extends React.Component {
    state = {
        username : "" ,
        password : ""
    }

    submitFormHandler = (event) => {
        event.preventDefault();
        this.props.triggerLogin(this.state.username);
        this.props.history.push("/chatwindow");
    }
    inputChangeHandler = (event) => {
        if(event.target.name === "username")
            {
                this.setState({
                    username : event.target.value
                })
            }
        else {
                this.setState({
                    password : event.target.value
                })
        }
    }
    render () {
        return (
            <div className = "login-component">
            <h1>WELCOM TO CHAT-BOT</h1>
                <form className="login-form" method="post" onSubmit={this.submitFormHandler}>
                    <label>User Name</label>
                    <input name = "username" type="text" required value={this.state.username} onChange={this.inputChangeHandler}/>
                    <label>Password</label>
                    <input name = "password" type="password" required value={this.state.password} onChange={this.inputChangeHandler}/> 
                    <button>LOGIN</button>             
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        triggerLogin : (username) => {
            dispatch(actionsCreator(TRIGGER_LOGIN, username))
        }
    }
};

export default connect(null, mapDispatchToProps)(LoginPage);