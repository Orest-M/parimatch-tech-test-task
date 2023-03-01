import { Component } from 'react';

import TaskAddForm from '../task-add-form/TaskAddForm';
import TasksList from '../tasks-list/TasksList';
import Modal from '../modal/Modal';

import './App.css';

class App extends Component {
  state = {
    tasks: [],
    currTask: {},
    showModal: false,
  };
  maxId = 1;

  openModal = (id) => {
    const currentTask = this.state.tasks.filter((item) => item.id === id);

    this.setState({ currTask: currentTask[0], showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  addItem = (title, descr) => {
    const newItem = {
      title,
      descr,
      id: this.maxId++,
      status: false,
    };
    this.setState(({ tasks }) => {
      const newArr = [...tasks, newItem];
      return {
        tasks: newArr,
      };
    });
  };

  handleStatusChange = (id) => {
    const currItem = this.state.tasks.filter((item) => item.id === id);

    this.setState((prevState) => {
      const newObj = prevState.tasks.map((item) => {
        if (item.id === currItem[0].id) {
          item.status = !item.status;
        }

        return item;
      });

      return { [prevState.tasks]: newObj };
    });
  };

  render() {
    const { tasks, showModal, currTask } = this.state;

    return (
      <div className="app">
        <TaskAddForm onAddItem={this.addItem} />
        <TasksList
          tasks={tasks}
          openModal={this.openModal}
          handleStatusChange={this.handleStatusChange}
        />

        {showModal ? (
          <Modal
            closeModal={this.closeModal}
            currTask={currTask}
            handleStatusChange={this.handleStatusChange}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
