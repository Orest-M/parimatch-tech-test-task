import './modal.css';

const Modal = ({ currTask, closeModal, handleStatusChange }) => {
  return (
    <div className="modal">
      <div className="modal__div">
        <h2 className="modal__title">{currTask.title}</h2>
        <p className="modal__descr-title">Description:</p>
        <p className="modal__descr-text">{currTask.descr}</p>
        <div className="modal__status-div">
          <label>
            Status:
            <input
              type="checkbox"
              name="status"
              id={currTask.id}
              checked={currTask.status}
              onChange={() => handleStatusChange(currTask.id)}
            />
          </label>
        </div>
        <button className="modal__btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
