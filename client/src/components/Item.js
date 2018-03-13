import React from 'react';
import axios from 'axios';
import Form from './Form';

class Item extends React.Component {
  state = { menu: {}, edit: false }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}`)
      .then( res => this.setState({ menu: res.data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit }
    });
  }

  submit = (menu) => {
    axios.put(`/api/menus/${this.props.match.params.id}`, { menu })
      .then( res => this.setState({ menu: res.data, edit: false }) );
  }

  show() {
    let { menu: { item, price, description }} = this.state;
    return (
      <div>
        <h1>{item}</h1>
        <h3>{price}</h3>
        <h3>{description}</h3>
      </div>
    )
  }

  edit() {
    return <Form {...this.state.menu} submit={this.submit} />
  }

  render() {
    let { edit } = this.state;
    return (
      <div>
        { edit ? this.edit() : this.show() }
        <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</button>
      </div>
    )
  }
}

export default Item;
