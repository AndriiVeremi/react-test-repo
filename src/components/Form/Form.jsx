import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    tag: '',
    expire: 'Junior',
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      //   <form onSubmit={this.handleSubmit}>
      //     <label>
      //       Name
      //       <input
      //         name="name"
      //         type="text"
      //         value={this.state.name}
      //         onChange={this.handleChange}
      //       />
      //     </label>

      //     <label>
      //       Tag
      //       <input
      //         name="tag"
      //         type="text"
      //         value={this.state.tag}
      //         onChange={this.handleChange}
      //       />
      //     </label>

      //     <div>
      //       <label>
      //         Junior
      //         <input
      //           type="radio"
      //           name="expire"
      //           value="Junior"
      //           onChange={this.handleChange}
      //         />
      //       </label>
      //       <label>
      //         Middle
      //         <input
      //           type="radio"
      //           name="expire"
      //           value="Middle"
      //           onChange={this.handleChange}
      //         />
      //       </label>
      //       <label>
      //         Senior
      //         <input
      //           type="radio"
      //           name="expire"
      //           value="Senior"
      //           onChange={this.handleChange}
      //         />
      //       </label>
      //     </div>

      //     <button type="submit">Send</button>
      //   </form>

      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Disabled fieldset example</legend>

          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id="disabledTextInput"
              className="form-control"
              placeholder="Name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="disabled" className="form-label">
              Tag
            </label>
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
              id="disabled"
              className="form-control"
              placeholder="Tag"
            />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="expire"
              value="Junior"
              onChange={this.handleChange}
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
            Junior
            </label>
          </div>
          
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="expire"
              value="Middle"
              onChange={this.handleChange}
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
            Middle
            </label>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="expire"
                value="Senior"
                onChange={this.handleChange}
                id="flexRadioDefault3"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
              Senior
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    );
  }
}
