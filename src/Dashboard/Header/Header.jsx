// Header.jsx
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showModal } from '../actions/modalActions';
import { logoutUser } from '../actions/authActions';
import './Header.scss';

const Header = ({ username, showModal, logoutUser }) => {
  const handleLogout = () => {
    showModal({
      title: 'Logout',
      content: 'Are you sure you want to logout?',
      onConfirm: () => logoutUser(),
    });
  };

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/dashboard/home" className="logo-link">
          <img src="path_to_logo.png" alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="user-info">
        <span className="username">{username}</span>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.auth.username,
});

const mapDispatchToProps = {
  showModal,
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
