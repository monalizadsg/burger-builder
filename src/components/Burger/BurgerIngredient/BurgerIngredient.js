import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  state = {};
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className='bread-bottom'></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className='bread-top'>
            <div className='seeds-1'></div>
            <div className='seeds-2'></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className='meat'></div>;
        break;
      case "cheese":
        ingredient = <div className='cheese'></div>;
        break;
      case "salad":
        ingredient = <div className='salad'></div>;
        break;
      case "bacon":
        ingredient = <div className='bacon'></div>;
        break;

      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string,
};

export default BurgerIngredient;
