import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { RapperdApp, ButtonClose } from "./App.styles";

const HigherOrderModal = ({ singleData, show, handleClose, postRequest }) => {
  setTimeout(async () => {
    // await console.log(postRequest, `postRequest from Child Component`);
  }, 2000);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        // console.log("Close");
        handleClose();
      }
      // console.log(postRequest, `postRequest`);
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <RapperdApp>
          <div className="ModalStyle">
            <div className="ModalContent">
              <Modal.Header closeButton>
                <h2>{singleData.API || ""}</h2>
              </Modal.Header>
              <Modal.Body>
                <p>Description : {singleData.Description || ""} </p>{" "}
                <p>Category : {singleData.Category || ""} </p>{" "}
                <p> LINK : {singleData.Link || ""}</p>{" "}
                <p className="cors "> CORS : {singleData.Cors || ""}</p>{" "}
                <p>
                  https status :
                  <strong> {singleData.HTTPS.toString() || ""} </strong>{" "}
                </p>
                {""}
              </Modal.Body>
            </div>
          </div>
        </RapperdApp>
        <Modal.Footer>
          <ButtonClose variant="danger" onClick={handleClose}>
            Close
          </ButtonClose>
          <ButtonClose variant="warning" onClick={handleClose}>
            Understood
          </ButtonClose>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HigherOrderModal;
