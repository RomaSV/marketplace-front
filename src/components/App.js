import React, {Component} from 'react';
import {getCurrentUser} from '../util/APIUtils';
import {Redirect, Route, Router, Switch} from 'react-router';
import history from './BrowserHistory'
import Home from './home';
import ProductPage from './product-details';
import InfoSection from "./InfoSection";
import UserList from "./user-selector";
import {AppHeader} from "./header";

class App extends Component {

    state = {
        isUserSelectorOpen: false,
        currentUser: null,
        isAuthenticated: false,
        isLoading: false
    };

    loadCurrentUser = () => {
        this.setState({
            isLoading: true
        });

        const user = Math.floor(Math.random() * 20) + 1;
        this.setState({
            currentUser: user,
            isLoading: false
        })

        // getCurrentUser().then(response => {
        //     this.setState({
        //         currentUser: response,
        //         isAuthenticated: true,
        //         isLoading: false
        //     });
        //     console.log(this.state);
        // })
        //     .catch(error => {
        //         console.log(error.message);
        //         this.setState({
        //             isLoading: false
        //         })
        //     })

    };

    toggleUserSelector = () => {
        this.setState({
            isUserSelectorOpen: !this.state.isUserSelectorOpen
        })
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

        // let userListSelector = this.state.isUserSelectorOpen ? 'user-list __active' : 'user-list';
        // let infoSection = this.state.isUserSelectorOpen ? 'info-section' : 'info-section  __active';

        const home = () => {
            return (
                <Home uid={this.state.currentUser}/>
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
                                <Route exact path='/' component={home} />
                                <Redirect to='/'/>
                            </Switch>
                        </div>
                        <div className='main-layout_body_right'>
                            {/*<div className={userListSelector}>*/}
                                {/*<UserList appCnt={this}/>*/}
                            {/*</div>*/}
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
