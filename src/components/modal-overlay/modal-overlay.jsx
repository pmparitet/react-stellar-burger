import styles from './modal-overlay.module.css'
import PropTypes from "prop-types";

function ModalOverlay({visible, closePopup}) {
  return (
    <div className={`${styles.overlay} ${visible ? styles.opened : ''}`} onClick={closePopup}></div>
  )
}

ModalOverlay.propTypes = {
  visible: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default ModalOverlay;
