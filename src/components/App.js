import React, { Component } from 'react';
import {getCurrentUser} from '../util/APIUtils';
import {Redirect, Route, Router, Switch} from 'react-router';
import history from './BrowserHistory'
import Home from './home';
import ProductPage from './product-details';

class App extends Component {

    state = {
        currentUser: null,
        isAuthenticated: false,
        isLoading: false
    };

    loadCurrentUser = () => {
        this.setState({
            isLoading: true
        });

        getCurrentUser().then(response => {
            this.setState({
                currentUser: response,
                isAuthenticated: true,
                isLoading: false
            });
            console.log(this.state);
        })
            .catch(error => {
                console.log(error.message);
                this.setState({
                    isLoading: false
                })
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
        return (
            <Router history={history}>
                <div className="main-layout">
                    <header className="main-layout_header">
                        Marketplace
                    </header>
                    <div className="main-layout_body">
                        <Switch>
                            <Route path="/products/:id" component={ProductPage}/>
                            <Route exact path="/" component={Home}/>
                            <Redirect to="/"/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
