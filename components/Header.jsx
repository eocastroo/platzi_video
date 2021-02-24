import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {connect} from 'react-redux';
import gravatar from '../utils/gravatar';
import {logoutRequest} from '../actions';
import '../components/assets/styles/components/Header.scss';
import logo from '../components/assets/static/logo-platzi-video-BW2.png';
import userIcon from '../components/assets/static/user-icon.png'





const Header = props => {

 const {user, isLogin, isRegister} = props ;
 const hasUser = Object.keys(user).length > 0  
 
 const handleLogout = () => {
  props.logoutRequest({})
 }
 const headerClass = classNames('header',{
   isLogin,
   isRegister,
 });
  return(

<header className= {headerClass}>
   <Link to="/">
   <img className="header__img" src=  {logo} alt="Platzi Video" />
   </Link>
   
    <div className="header__menu">
      <div className="header__menu--profile">
        {hasUser ?
         <img src ={gravatar(user.email)} alt= {user.email} />:
         <img src= {userIcon} alt="" />
        }
        <p>Perfil</p>
      </div>
      <ul>
        {hasUser ?
        <li><a href="/">{user.name}</a></li> 
        :null
        }
        {hasUser ?
        <li><a href= "#logout" onClick={handleLogout}>Cerrar Sesion</a></li>
        :
        <li>
         <Link to="/Login">
         Iniciar Sesion
         </Link>
        
        </li>

        }

      </ul>
    </div>
  </header>


 );
}

 const mapStateToProps = state =>{
   return{
     user: state.user
   };
 };

 const mapDispatchToProps = {
  logoutRequest,
 }

 Header.PropTypes = {
   user: PropTypes.Object,
   logoutRequest: PropTypes.func,
 };

export default connect (mapStateToProps, mapDispatchToProps)(Header);
