import React from "react";

class LogginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit() {
    if (this.state.logginCred === "showme") {
      this.props.contentVisibleHandler(true);
    } else {
      alert("Wrong Input");
    }
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="text"
            id="logginCred"
            name="logginCred"
            placeholder="Enter Password"
            onChange={this.onInputChange}
          />
          <button
            type="button"
            id="logginInput"
            class="logginButton"
            onClick={this.onSubmit}
          >
            Submit Password
          </button>
        </div>
      </form>
    );
  }
}

export default LogginForm;
