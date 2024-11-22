import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css'
const Modal = ({children}) => {

const navigate = useNavigate()

function closeHandler(){
 //you can use '/' or this '..' which means go up to parent route
  navigate('..')
}

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}/>
        <dialog open className={classes.modal}>{children}</dialog>
    </>
  );
};
export default Modal;

