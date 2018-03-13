import React from 'react';

class Form extends React.Component {
  defaultValues = { item: '', description: '', price: '' }
  state = {...this.defaultValues}

  componentDidMount() {
    if(this.props.id)
      this.setState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let menu = { ...this.state }
    this.props.submit(menu)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value })
  }

  render() {
    let { item, description, price } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="item"
          placeholder="Dish"
          value={item}
          onChange={this.handleChange}
          required
        />
        <input
          id="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={this.handleChange}
        />
        <input
          id="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;
