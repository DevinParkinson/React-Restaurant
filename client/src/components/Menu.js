import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Form from './Form'

class Menu extends React.Component  {
  state = { items: [], showForm: false }

  componentDidMount() {
    axios.get('api/menus')
      .then( res => this.setState({ items: res.data }) )
      .catch( e => console.log(e.response.data.errors) )
  }

  submit = (menu) => {
    let { menus } = this.state
    axios.post('/api/menus', { menu } )
      .then( res => this.setState({ menus: [res.data, ...menus ], showForm: false }) )
  }

  show() {
    let { items } = this.state;
      return (
        <ul>
          { items.map( m =>
            <li key={m.id}>
              <Link to={`/menu/${m.id}`}>{m.item}</Link>
            </li>
          )}
        </ul>
      )
    }

  form() {
    return <Form submit={this.submit}/>
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    let { showForm } = this.state;
    return (
      <div>
        <h2>Dishes</h2>
        <button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show' } form</button>
        { showForm ? this.form() : this.show() }

      </div>
    )
  }
}


export default Menu;
