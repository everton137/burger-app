import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className="BuildControls">
    <p>Total price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label} 
        type={ctrl.type}
        more={() => props.ingredientAdded(ctrl.type)}
        less={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        />
      ))}
    <button 
      className="OrderButton"
      disabled={!props.purchasable}
      onClick={props.ordered}>CHECKOUT</button>
  </div>
);


export default buildControls;
