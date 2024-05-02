import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Ayakkabı" },
        { categoryId: 2, categoryName: "Terlik" },
      ],
    }; // state burada doğru şekilde tanımlanıyor
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {

            this.state.categories.map(category=>(
                <ListGroupItem key={category.categoryId}>
                    {category.categoryName}
                </ListGroupItem>
            ))
           
          }
        </ListGroup>
      </div>
    );
  }
}
