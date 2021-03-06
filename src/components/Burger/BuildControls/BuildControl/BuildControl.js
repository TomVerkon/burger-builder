import React from 'react'
import PropTypes from 'prop-types'
import classes from './BuildControl.module.css'

const BuildControl = props => {

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.decHandler} disabled={props.disabled}>Less</button>
      <button className={classes.More} onClick={props.incHandler}>More</button>
    </div>
  )
}

BuildControl.propTypes = {
  label: PropTypes.string,
  type:  PropTypes.string,
  disabled: PropTypes.bool,
  decHandler: PropTypes.func.isRequired,
  incHandler: PropTypes.func.isRequired
}

export default BuildControl
