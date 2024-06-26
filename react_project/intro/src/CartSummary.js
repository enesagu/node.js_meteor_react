import React, { Component } from "react";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu end>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>

              <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>

              {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmpytCart() {
    <NavItem>
      <NavLink>Empty Cart</NavLink>
    </NavItem>;
  }

  render() {
    return (
      <div>{this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpytCart()}</div>
    );
  }
}
