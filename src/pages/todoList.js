import React from "react";
import './todo.css';

class Todo extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }

  addItem(e) {
    const itemArray = this.state.items;

    itemArray.push({
      text: this._inputElement.value,
      key: Date.now(),
    });

    this.setState({
      items: itemArray,
    });

    this._inputElement.value = "";

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem.bind(this)}>
              <input
                placeholder="Enter Task"
                ref={(a) => (this._inputElement = a)}
              ></input>
              <button type="submit">add</button>
            </form>
          </div>
        </div>
        <ToDoItems entries={this.state.items} />
      </div>
    );
  }
}

class ToDoItems extends React.Component {
  render() {
    const todoEntries = this.props.entries;

    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>;
    }

    const listItems = todoEntries.map(createTasks);

    return (
      <div>
        <ol className="theList">{listItems}</ol>
      </div>
    );
  }
}

export default Todo;
