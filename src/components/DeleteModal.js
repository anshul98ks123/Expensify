import React from 'react';
import Modal from 'react-modal';

const DeleteModal = (props) => (
  <Modal
    isOpen={!!props.modalOpened}
    onRequestClose={props.closeModal}
    contentLabel="Delete Expense"
    className='modal'
    closeTimeoutMS={200}
    ariaHideApp={false}
  >
    <h3 className='modal__title'>Delete Expense ?</h3>
    <p className='modal__body'>Expense once deleted cannot be recovered</p>
    <div className="modal__buttons ">
      <button 
        className='button button--secondary' 
        onClick={props.onRemove}>
        Yes 
      </button>
      <button 
        className='button' 
        onClick={props.closeModal}>
        No 
      </button>
    </div>
  </Modal>
);

export default DeleteModal;