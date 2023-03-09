import { useState } from "react";
import Modal, {BaseModalBackground} from "styled-react-modal";
import FocusLock from 'react-focus-lock'
import ModalDetail from "./ModalDetail";

const StyledModal = Modal.styled`
  width: max-content;
  height: max-content;
  display: grid;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;

  .desc-item{
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding-bottom: 1rem;
  }
  .item-name, 
  .item-price{
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .modal-username{
    color: #555555;
    font-size: 0.8rem;
    padding: 0 1rem;
  }

  .purchase-btn{
    background-color: #081f2d; 
    border-radius: 29px; 
    border: 1px solid #081F2D; 
    color: white; 
    font-size: 15px; 
    padding: 10px 45px; 
    cursor: pointer; 
    transition: 0.3s; 
  }
    
  .purchase-btn:hover{ 
    background-color: white; 
    color: #081F2D; 
    border-color: #081F2D; 
    transition: 0.3s; 
  }
`

function FancyModalButton({toggleModal, isOpen, item}) {
 
  return (
    <>
      <StyledModal
        isOpen={isOpen}
        onEscapeKeydown={toggleModal}
        onBackgroundClick={toggleModal}
        role="dialog"
        aria-modal={true}
        aria-labelledby="modal-label"
      >
        <FocusLock>
          {
            item 
            ? <ModalDetail item={item}/> 
            : <div>Item Details is not Available</div>
          }
       
        </FocusLock>
      </StyledModal>
    </>
  );
}

export default FancyModalButton