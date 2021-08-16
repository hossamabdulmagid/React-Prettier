import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postData } from "../../redux/postrequest/postAction";
import { getData } from "../../redux/getrequest/getAction";
import { RapperdApp } from "../../App.styles";
import { Spinner } from "react-bootstrap";
import HigherOrderModal from "../../modal";
const Data = ({ loading, DataState, postRequest, getData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    getData();
  }, [getData, postRequest]);

  const [singleData, UpdatedSingleData] = useState({
    API: "",
    Auth: "",
    Category: "",
    Cors: "",
    Description: "",
    HTTPS: "null",
  });

  const getSelection = async (selection) => {
    await UpdatedSingleData({ ...selection });
    handleShow();
  };
  return (
    <div>
      <RapperdApp className="col">
        <div className="rapperdContent">
          <div className={`col`}>
            <ol>
              {" "}
              {!loading ? (
                DataState.map((single, idx) => (
                  <li
                    key={idx}
                    className=" container"
                    onClick={() => getSelection(single)}
                  >
                    <small>API : {single.API.toUpperCase() || ""} </small>
                    <small>
                      Description : {single.Description.toUpperCase() || ""}
                    </small>
                    <small>
                      Category : {single.Category.toUpperCase() || ""}
                    </small>
                    <small> LINK : {single.Link || ""}</small>
                    <small className="cors"> CORS : {single.Cors || ""}</small>
                    <p>
                      https status :
                      <strong> {single.HTTPS.toString() || ""} </strong>
                    </p>
                  </li>
                ))
              ) : (
                <>
                  <Spinner animation="border" variant="warning" />
                </>
              )}
            </ol>
          </div>
        </div>
      </RapperdApp>
      <>
        <HigherOrderModal
          singleData={singleData}
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          postRequest={postRequest}
        />
      </>
    </div>
  );
};
const mapStateToProps = (state) => ({
  DataState: state.get.getRequest,
  loading: state.get.loading,
  postRequest: state.post.PostRequest,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
  postData: (information) => dispatch(postData(information)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Data);
