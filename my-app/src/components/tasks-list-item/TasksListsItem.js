import './tasksListItem.css';

const TasksListItem = (props) => {
  const { title, descr, id, openModal, status, handleStatusChange } = props;

  return (
    <tr>
      <td onClick={openModal}>{id}</td>
      <td onClick={openModal}>
        {title.length <= 15 ? title : `${title.slice(0, 15)}...`}
      </td>
      <td onClick={openModal}>
        {descr.length <= 15 ? descr : `${descr.slice(0, 15)}...`}
      </td>
      <td>
        <input
          type="checkbox"
          name="status"
          checked={status}
          id={id}
          onChange={() => handleStatusChange(id)}
        />
      </td>
    </tr>
  );
};

export default TasksListItem;
