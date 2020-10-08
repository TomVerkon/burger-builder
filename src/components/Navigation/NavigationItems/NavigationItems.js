import React from 'react'
import PropTypes from 'prop-types'
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/" >Check Out</NavigationItem>
    </ul>
  )
}

PropTypes.propTypes = {

}

export default NavigationItems
