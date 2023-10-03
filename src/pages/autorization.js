import React from "react";
import "./autorization.css";

class Autorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      phoneNumber: "",
      email: "",
      isFormSubmitted: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isFormSubmitted: true });
  };

  render() {
    return (
      <div className="autorization-form">
        <h2>Регистрация пользователя</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="fullName">ФИО:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="phoneNumber">Номер телефона:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="email">Email адрес:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Зарегистрироваться</button>
        </form>
        <div className="user-data">
          {this.state.isFormSubmitted && (
            <div>
              <h3>Данные пользователя:</h3>
              <p>
                <strong>ФИО:</strong> {this.state.fullName}
              </p>
              <p>
                <strong>Номер телефона:</strong> {this.state.phoneNumber}
              </p>
              <p>
                <strong>Email адрес:</strong> {this.state.email}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Autorization;
