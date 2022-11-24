import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    this.setState({ label: '' });
    const cb = this.props.onItemAdded || (() => {});
    cb(label);
  };

  render() {
    return (
      <form
        className="todo-add"
        onSubmit={this.onSubmit}>

        <input type="text"
               className="add__input"
               value={this.state.label}
               onChange={this.onLabelChange}
               placeholder="Что должно быть сделано?" />

        <button type="submit"
                className="todo-add__button">Добавить</button>
      </form>
    );
  }
}
