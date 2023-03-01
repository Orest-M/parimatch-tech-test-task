import { Component } from 'react';

import './taskAddForm.css';

class TaskAddForm extends Component {
  state = {
    title: '',
    descr: '',
    error: false,
  };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    if (this.state.title.trim() === '' || this.state.descr.trim() === '') {
      this.setState({ error: true });
      return;
    } else {
      this.setState({ error: false });
      this.props.onAddItem(this.state.title, this.state.descr);
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState({ title: '', descr: '' });
  };

  render() {
    const { title, descr, error } = this.state;

    const inputClasses = (input) => {
      return error && input.trim() === ''
        ? 'form-div__input error'
        : 'form-div__input';
    };

    return (
      <div className="form-div">
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor="title" className="form-div__label">
            Title:
            <input
              className={inputClasses(title)}
              type="text"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={this.onValueChange}
            />
            {error && title.trim() === '' ? (
              <span className="err-span">This field is empty</span>
            ) : null}
          </label>

          <label htmlFor="descr" className="form-div__label">
            Description:
            <input
              className={inputClasses(descr)}
              type="text"
              placeholder="Enter description"
              name="descr"
              value={descr}
              onChange={this.onValueChange}
            />
            {error && descr.trim() === '' ? (
              <span className="err-span">This field is empty</span>
            ) : null}
          </label>

          <button type="submit" className="form-div__submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default TaskAddForm;
