import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    tag: '',
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Tag
          <input
            name="tag"
            type="text"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Send</button>
      </form>
    );
  }
}
