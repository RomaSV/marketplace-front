import React, {Component} from 'react';
import AccountIcon from "../ui/AccountIcon";
import {Link} from "react-router-dom";

export class UserDetails extends Component {

    closeModal = () => {
        this.props.cnt.setState({
            isUserSelectorOpen: false,
            currentUser: null
        });
    };

    render() {

        const userIcon = this.props.cnt.state.currentUser ? <AccountIcon id={this.props.user}/>: '';

        return (
            <div className='user-details'>

                <div className='user-details_img-w'>
                    {userIcon}
                </div>
                <div className='user-details_username'>
                    User
                </div>
                <Link to='/login'>
                    <button className='custom-btn user-details_logout-btn'
                            onClick={this.closeModal}>
                        Log-out
                    </button>
                </Link>
            </div>
        )
    }
}