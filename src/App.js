import React, { useEffect } from "react";
import "./styles.css";
import Information from "./components/Information/Information";
import Patients from "./components/Patients/Patients";
import { Provider, connect } from "react-redux";
import { store } from "./store/store";
import { getDataActionCreatorFunc } from "./store/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getDataActionCreatorFunc();
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Information />
          <Patients />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataActionCreatorFunc: () => dispatch(getDataActionCreatorFunc()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
