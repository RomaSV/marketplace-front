import React, {Component} from 'react';
import {getCurrentUser} from '../util/APIUtils';
import {Redirect, Route, Router, Switch} from 'react-router';
import history from './BrowserHistory'
import Home from './home';
import ProductPage from './product-details';
import InfoSection from "./InfoSection";
import UserList from "./user-selector";
import {AppHeader} from "./header";
import {Login} from "./Login";
import {ACCESS_TOKEN} from "../util/Constants";

class App extends Component {

    state = {
        currentUser: null,
        isAuthenticated: false,
        isLoading: false,
        isUpdated: false
    };

    loadCurrentUser = () => {
        this.setState({
            isLoading: true,
            isUpdated: false
        });

        if (localStorage.getItem('uid')) {
            this.setState({
                currentUser: localStorage.getItem('uid').valueOf(),
                isLoading: false
            })
        } else {
            history.push('/login');
            this.setState({
                currentUser: undefined,
                isLoading: false
            })
        }

    };

    componentWillMount() {
        this.loadCurrentUser();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="App">
                    Loading...
                </div>
            )
        }

        const home = () => {
            return (
                <Home uid={this.state.currentUser}/>
            )
        };

        const login = () => {
            return (
                <Login cnt={this}/>
            )
        };

        return (
            <Router history={history}>
                <div className='main-layout'>
                    <AppHeader user={this.state.currentUser}/>
                    <div className='main-layout_body'>
                        <div className='main-layout_body_left'>
                            <Switch>
                                <Route path='/products/:id' component={ProductPage}/>
                                <Route path='/login' component={login}/>
                                <Route exact path='/' component={home} />
                                <Redirect to='/'/>
                            </Switch>
                        </div>
                        <div className='main-layout_body_right'>
                            <div className='info-section  __active'>
                                <InfoSection/>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div>Icons made by
                            <a href='http://www.freepik.com/' title='Freepik'>
                                Freepik
                            </a>
                            {' from '}
                            <a href='https://www.flaticon.com/' title='Flaticon'>
                                www.flaticon.com
                            </a>
                            is licensed by
                            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
                               target="_blank">
                                CC 3.0 BY
                            </a>
                        </div>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;
