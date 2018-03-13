import React from 'react';
import axios from 'axios';
import Form from './Form';

class Menu extends React.Component  {
  state = { menus: [], edit: false }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}`)
      .then( res => this.setState({ menus: res.data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit }
    })
  }


  form() {
    return <Form submit={this.submit} />
  }

  submit = (menu) => {
    axios.put(`/api/menus/${this.props.match.params.id}`, { menu })
      .then( res => this.setState({ menus: res.data, edit: false }) )
  }

  show() {
    let { menu: { item, price, description } } = this.state;
      return (
        <div>
          <h1>{item}</h1>
          <h4>$ {price}</h4>
          <h4>{description}</h4>
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


export default Menu;
