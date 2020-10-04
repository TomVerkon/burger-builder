import React from 'react'
// import PropTypes from 'prop-types'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
  {label: 'Salad', type: 'Salad'},
  {label: 'Bacon', type: 'Bacon'},
  {label: 'Cheese', type: 'Cheese'},
  {label: 'Meat', type: 'Meat'},
]

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      {controls.map(ctrl => {
        return <BuildControl label={ctrl.label} key={ctrl.label} />
      })}
    </div>
  )
}

// BuildControls.propTypes = {

// }

export default BuildControls
