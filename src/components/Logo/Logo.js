import React from 'react'
//import PropTypes from 'prop-types'
import logo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = props => {
  return (
    <div className={classes.Logo} style={{height: props.height}}>
      <img src={logo} alt=''/>
    </div>
  )
}

// Logo.propTypes = {

// }

export default Logo
