import React, { useEffect, useLayoutEffect, useState } from "react"
import {Container, Row, Col, Button, Modal, Image} from 'react-bootstrap';
import fire, {storage} from "../../config/Fire";
const DeleteConfirmation = (props) => {
        var db = fire.database();
        const [userUid, setUserUid] = useState(null);
        const [show, setShow] = useState(false);

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
            alert("Sorry to see you go! Hope to see you again...")
            var user = fire.auth().currentUser;
            var refUserAccountDB = db.ref(`${user.uid}`);
            var refUserAccountStorage = storage.ref(`images/${user.uid}`);

            //DELETE USER AUTHENTICATION
            user.delete().then(function() {
                    //DELETE USER STORAGE
                    refUserAccountStorage.listAll().then(function(res) { //userUid level
                        res.prefixes.forEach(function(folderRef) { //going through all 2nd level folders (home, about, resume, projects)
                            folderRef.listAll().then(function(img) { //listing items in each folder
                                img.prefixes.forEach(function(imageRef) {
                                //DOESNOT GO INTO THIS SINCE THIS IS THE LAST LEVEL INSTEAD GOES INTO BELOW FOLDER
                                });
                                img.items.forEach(function(imgRef){ //iterate through all images and delete them
                                    imgRef.delete().then(function() { 

                                    }).catch(function(error) {
                                        console.log(error);
                                    });
                                })
                            })
                        });
                        res.items.forEach(function(itemRef) {

                        });
                    }).catch(function(error) {
                    });

                    //DELETE USER DATABASE
                    refUserAccountDB.remove();
              }).catch(function(error) {
                  alert(error.message)
              });
        } 

        const setUser = () => {
            fire.auth().onAuthStateChanged(function(user) {
                if (user) {
                    setUserUid(user.uid);
                }
              }); 
        }

        return (
          <>
            <button type="button" onClick={handleShow} class="LogoutDeleteButton  btn btn-primary mt-2 mb-2">Delete Account</button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Delete Account</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <table>
                      <tr>
                          <td>
                          Are you sure you want to delete your account?
                          </td>
                      </tr>
                      <tr>
                          <td>
                          This action is irreversible!
                          </td>
                      </tr>
                      <tr>
                          <td>
                          (If you wish to make your website again, you would have to make a new account again)
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

export default DeleteConfirmation;