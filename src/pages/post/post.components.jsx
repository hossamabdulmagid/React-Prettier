import { useState, useEffect, useRef } from "react";
import { postData } from "../../redux/postrequest/postAction";
import { getData } from "../../redux/getrequest/getAction";
import { connect } from "react-redux";
const ComponentForPostRequest = ({ postRequest, postData, pending }) => {
  const InputRef = useRef(null);

  const [information, UpdatedInfo] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    UpdatedInfo({ ...information, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(information, `has been got called to Send `);
    await postData(information);
    // alert(`go to logs`);
  };

  return (
    <>
      <div className="col">
        <form onSubmit={handleSubmit}>
          <input
            ref={InputRef}
            type="number"
            name="userId"
            onChange={handleChange}
            placeholder="type number"
            required
          />
          <br />
          <input
            ref={InputRef}
            type="text"
            placeholder={`title`}
            name="title"
            onChange={handleChange}
            required
          />
          <br />

          <input
            ref={InputRef}
            type="text"
            placeholder={`body`}
            name="body"
            onChange={handleChange}
            required
          />
          <div
            style={{
              marginTop: "15px;",
              marginBottom: "15px;",
              padding: "20px",
            }}
          >
            <button type="submit">Send...</button>
          </div>
        </form>{" "}
        {!pending ? (
          <>
            <p>id : {postRequest.id || ""}</p>
            <p>title : {postRequest.title || ""}</p>
            <p>body : {postRequest.body || ""}</p>
            <p>userId : {postRequest.userId || ""}</p>
          </>
        ) : null}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  pending: state.post.pending,
  postRequest: state.post.PostRequest,
});

const mapDispatchToProps = (dispatch) => ({
  postData: (information) => dispatch(postData(information)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentForPostRequest);
