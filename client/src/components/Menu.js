import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';
import axios from 'axios';

class Menu extends React.Component  {
  state = { menus: [] }

  componentDidMount() {
    axios.get('api/menus')
      .then( res => this.setState({ menus: res.data }) )
  }

  render() {
    let { menus } = this.state;
    if (isAuthenticated()) {
      return (
        <ul>
          { menus.map( m =>
            <li key={m.id}>
              <Link to={`/menus/${m.id}`}>{m.item}</Link>
            </li>
          )}
        </ul>
      )
    } else  {
      return <Redirect to="/login" />
    }
  }
}


export default Menu;
