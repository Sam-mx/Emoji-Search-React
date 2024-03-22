import React from 'react';
import logo from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../App.css'
const Navbar = () => {
const [modalShow, setModalShow] = React.useState(false);
  return <React.Fragment><nav className="navbar navbar-expand-lg navbar-light  fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#"><img src={logo} height="80px" alt="logo" /></a>
      <div id="navbarText">
        <ul className="navbar-nav me-auto mb-3 ">
          <li className="nav-item">
            <span className="nav-link active" aria-current="page" >Home</span>
          </li>
          <li className="nav-item">
            <span className="nav-link aboutLink"onClick={() => setModalShow(true)}>About</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
  </React.Fragment>
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Emoji Search App
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          In this emoji search app, you can search any emojis which is available and there is an another feature like you can copy the emojis to your clipboard.
        
          <h4 className="pt-3" id='Sam'>Developed by Sam</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default Navbar;