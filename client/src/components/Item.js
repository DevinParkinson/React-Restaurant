import React from 'react';
import axios from 'axios';

class Item extends React.Component {
  state = { menu: {} }

  componentDidMount() {
    axios.get(`api/menus/${this.props.match.params.id}`)
      .then( res => this.setState({ menu: res.data }) )
  }

  render() {
    let { menu: {item, description, price}} = this.state;
    return(
      <div>
        <h1>{ item }</h1>
        <h3>{ description }</h3>
        <h3>${ price }</h3>
      </div>
    )
  }
}

export default Item;
