import React, {Component} from 'react';
import AccountIcon from "../ui/AccountIcon";

class UserList extends Component {

    state = {
        userIds: []
    };

    onSelect = (id) => {
      this.props.appCnt.setState({
          currentUser: id
      })
    };

    componentWillMount() {
        const userIds = Array(6).fill(0).map(e => Math.floor(Math.random() * 150) + 1);
        this.setState({
            userIds: userIds
        });
    }

    render() {

        let users = this.state.userIds.map(id =>
            <div className='user-list_item' onClick={this.onSelect.bind(this, id)}>
                <div className='user-list_item_image'>
                    <AccountIcon id={id}/>
                </div>
                <div className='user-list_item_text'>
                    User {id}
                </div>
            </div>
        );
        return (
            <div className='user-list_items'>
                {users}
            </div>
        )
    }
}

export default UserList