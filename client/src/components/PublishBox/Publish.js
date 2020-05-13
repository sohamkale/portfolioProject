import React, { useEffect, useLayoutEffect, useState } from "react"
import {Container, Row, Col, Button, Modal, Image} from 'react-bootstrap';
import fire, {storage} from "../../config/Fire";
const Publish = (props) => {
        var db = fire.database();
        const [userUid, setUserUid] = useState(null);
        const [show, setShow] = useState(false);
        const [website, setWebsite] = useState(null);
        const handleClose = () => {
            setShow(false);
            deleteAccount();
        }

        const handleShow = () => {
            setUser();
            setShow(true);

        }

        const logout = () => {
            fire.auth().signOut();
        }
    
        const deleteAccount = (e) => {
           
        } 

        const setUser = () => {
            fire.auth().onAuthStateChanged(function(user) {
                if (user) {
                    setUserUid(user.uid);
                }
              }); 
        }

        const websiteName = (e) => {
          setWebsite(e.target.value);
        }

        return (
          <>
            <button type="button" onClick={handleShow} class="LogoutDeleteButton  btn btn-primary mt-2 mb-2">Publish</button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Delete Account</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <table>
                      <tr>
                          <td>
                          Are you sure you want to publish your website?
                          </td>
                      </tr>
                      <tr>
                          <td>
                          Please enter a desirable name for your website
                          <input type="text" value={website} onChange={websiteName} placeholder="website name"></input> 
                          </td>
                      </tr>
                  </table>
                    </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Delete Account
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );

}

export default Publish;