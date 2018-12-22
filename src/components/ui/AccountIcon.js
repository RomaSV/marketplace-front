import React, {Component} from 'react';
import image1 from '../../assets/images/man-1.svg'
import image2 from '../../assets/images/man-2.svg'
import image3 from '../../assets/images/man-3.svg'
import image4 from '../../assets/images/man-4.svg'

class AccountIcon extends Component {
    render() {
        let img;
        if (this.props.id % 4 === 0) {
            img = image1;
        } else if (this.props.id % 4 === 1) {
            img = image2
        } else if (this.props.id % 4 === 2) {
            img = image3
        } else {
            img = image4
        }
        return (
            <img className='account-icon' src={img} alt='user account'/>
        )
    }
}

export default AccountIcon