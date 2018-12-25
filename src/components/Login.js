import React, {Component} from 'react';
import history from "./BrowserHistory"

export class Login extends Component {

    state = {
        login: 0,
        password: ""
    };

    onLogin = () => {
        this.props.cnt.setState({
            currentUser: this.state.login.valueOf()
        });
        history.push("/");
    };

    handleLoginChange = (event) => {
        const value = event.target.value;
        this.setState({
            login: value
        })
    };

    handlePasswordChange = (event) => {
        const value = event.target.value;
        this.setState({
            password: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.onLogin()
    };

    render() {
        return (
            <div className="login-form-container">
                <div className='login-form-padding'/>
                <div className="login-box">
                    <div className="login-box_title">
                        Welcome to the Marketplace!
                    </div>
                    <div className="login-box_form">
                        <form>
                            <input className="login-form_input" type="text"
                                   placeholder={'LOGIN'}
                                   onChange={this.handleLoginChange}/>

                            <input className="login-form_input" type="password"
                                   placeholder={'PASSWORD'}
                                   onChange={this.handlePasswordChange}/>
                            <div>
                                <button className="login-btn custom-btn"
                                        onClick={this.handleSubmit}>
                                    Log-in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='login-form-padding'/>
            </div>
        )
    }
}