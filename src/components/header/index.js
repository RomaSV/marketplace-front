import React, {Component} from 'react';
import ReactModal from "react-modal";
import {Link} from "react-router-dom";
import AccountIcon from "../ui/AccountIcon";
import {UserDetails} from "../users-details";
import {USER_MODAL_STYLE} from "../../util/Constants";


export class AppHeader extends Component {

    state = {
        isUserSelectorOpen: false,
        currentUser: this.props.user
    };

    toggleUserSelector = () => {
        this.setState({
            isUserSelectorOpen: !this.state.isUserSelectorOpen
        })
    };

    render() {

        return (
            <header className='main-layout_header'>
                <Link to={"/"}>
                    <div className='main-layout_header_title'>
                        Marketplace
                    </div>
                </Link>
                <div className='account-icon-w' onClick={this.toggleUserSelector}>
                    <AccountIcon id={this.state.currentUser}/>
                </div>

                <ReactModal isOpen={this.state.isUserSelectorOpen} style={USER_MODAL_STYLE}>
                    <button className='close-btn' onClick={this.toggleUserSelector}>X</button>
                    <UserDetails user={this.state.currentUser}/>
                </ReactModal>
            </header>

        );
    }
}