import React, {Component} from 'react';
import AccountIcon from "../ui/AccountIcon";

export class UserDetails extends Component {
    render() {
        return (
            <div className='user-details'>

                <div className='user-details_img-w'>
                    <AccountIcon id={this.props.user}/>
                </div>
                <div className='user-details_username'>
                    User
                </div>
                <button className='custom-btn user-details_logout-btn'>Log-out</button>

            </div>
        )
    }
}