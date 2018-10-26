import React from 'react';
import { Link } from 'react-router-dom';
// icons
import { FaBell, FaPencilAlt, FaUser, FaSignOutAlt, FaStar, FaEnvelope, FaD, FaCog } from 'react-icons/fa';
import { GoKebabVertical, GoX } from 'react-icons/go';
// styles
import styles from './header.module.scss';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.triggerMobileCategory = this.triggerMobileCategory.bind(this);
    this.state = {
      profileMenuVisibility: false
    }
  }

  toggleProfile = () => {
    const { profileMenuVisibility } = this.state;
    this.setState({ profileMenuVisibility: !profileMenuVisibility })
  }

  triggerMobileCategory() {
    const { triggerCategory, mobileCategory } = this.props;
    triggerCategory(mobileCategory === 'visible' ? 'hidden' : 'visible');
  }

  render() {

    const { user, mobileCategory, logOut } = this.props;
    const { profileMenuVisibility } = this.state;
    const { username, role, image } = user;
    const profileToggleStyle = {
      display: profileMenuVisibility ? 'block' : 'none',
    }

    return (
      <div className={styles.menu}>
        <ul>
          {role === 'author' ? <li><Link to='/article/create'> {<FaPencilAlt />}</Link></li> : null}
          <li >
            <Link to="/notifications">{<FaBell />}</Link>
          </li>
          <li className={styles.small}>
            <button type="button" className={styles.transparentBtn} onClick={this.toggleProfile}>
              <img src={image || `http://i.pravatar.cc/150?u=${username}`} alt={username} className="avatar" />
            </button>
          </li>
          <li>
            <button className={styles.mobileMenuCtrl} onClick={this.triggerMobileCategory} type="button">
              {mobileCategory === 'visible' ? <GoX /> : <GoKebabVertical />}
            </button>
          </li>
        </ul>
        <div className={styles.profile} style={profileToggleStyle}>
          <ul onClick={this.toggleProfile}>
            <li><Link to='/profile/user'> {<FaUser />} Profile </Link></li>
            <li><Link to='/notifications'> {<FaBell />} Notifications</Link></li>
            <li><Link to='/settings'> {<FaCog />} Settings</Link></li>
            {role === 'author' ? <li><Link to='/article/create'> {<FaPencilAlt />} Publish</Link></li> : null}
            {role === 'author' ? <li><Link to='/me/drafts'> {<FaEnvelope />} Drafts</Link></li> : null}
            <li><Link to='/favorite'> {<FaStar />} Favorites</Link></li>
            <li><Link onClick={logOut} to='/logout'> {<FaSignOutAlt />} Logout</Link></li>
            <li> user: {username}</li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Menu;
