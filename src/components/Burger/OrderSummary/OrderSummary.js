import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
  // This could be a functional component, it doesn't have to be a class
  componentWillUpdate () {
    console.log('[OrderSummary] WillUpdate');
  };

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return ( 
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>);
      });

    return (
      <Aux>
        <h3>Your order</h3>
        <p>A hamburger with the following ingredients:</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p>Total price: <strong>{this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
      </Aux>

    );
  }
}

export default OrderSummary;
