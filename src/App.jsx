import { useState, useEffect, useCallback, useRef, StrictMode } from "react";
import { RapperdApp } from "./App.styles";
import { getData } from "./redux/getrequest/getAction";
import { postData } from "./redux/postrequest/postAction";
import { connect } from "react-redux";
import HigherOrderModal from "./modal";
import { Spinner } from "react-bootstrap";
import ComponentNavbar from "./components/navbar/navbar.component";
import { Switch, Route } from "react-router-dom";
import BasicTable from "./components/table/table.component";
import HomePage from "./pages/homepage/homepage.component";
import SortingTable from "./components/table/sortingTable";
import MOCK_DATA from "./data/MOCK_DATA.json";
import ComponentForPostRequest from "./pages/post/post.components";
import Data from "./pages/looping/looping";
import About from "./pages/about/about.component";
const App = ({ getData, DataState = [], loading, postData, postRequest }) => {
  // new line //new
  return (
    <>
      <ComponentNavbar />
      <StrictMode>
        <RapperdApp className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/table" component={BasicTable} />
            <Route path="/sort-table" component={SortingTable} />
            <Route path="/post" component={ComponentForPostRequest} />
            <Route path="/data" component={Data} />
            <Route path="/about" component={About} />
          </Switch>
        </RapperdApp>
      </StrictMode>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
