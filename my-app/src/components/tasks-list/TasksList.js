import TasksListItem from '../tasks-list-item/TasksListsItem';

import './tasksList.css';

const TasksList = ({ tasks, openModal, handleStatusChange }) => {
  const elements = tasks.map((item) => {
    const { ...itemProps } = item;
    return (
      <TasksListItem
        key={itemProps.id}
        {...itemProps}
        openModal={() => openModal(itemProps.id)}
        handleStatusChange={handleStatusChange}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{elements}</tbody>
    </table>
  );
};

export default TasksList;
