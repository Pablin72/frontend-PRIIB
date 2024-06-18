import Styles from './styles.module.css';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className={Styles.modalOverlay}>
      <div className={Styles.modal}>
        <button onClick={onClose} className={Styles.closeButton}>Close</button>
        <div className={Styles.modalContent}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;