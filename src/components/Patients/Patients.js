import React, { useState } from "react";
import "./Patients.css";
import Present from "../../components/Present/Present";
import Quitting from "../../components/Quitting/Quitting";
import { connect } from 'react-redux'
import { setActive1ActionCreator, setActive2ActionCreator } from '../../store/actions'


class Patients extends React.Component {
  render() {
    return (
      <div className="patients">
        <div className="patients__categories">
          <div
            onClick={() => {
              this.props.setActive1ActionCreator();
            }}
            className={
              this.props.active1
                ? "patients__category patients__category--1 active"
                : "patients__category patients__category--1"
            }
          >
            Присутствуют
            <span>
              ({this.props.presentData ? this.props.presentData.length : ""})
            </span>
          </div>
          <div
            onClick={() => {
              this.props.setActive2ActionCreator();
            }}
            className={
              this.props.active2
                ? "patients__category patients__category--2 active"
                : "patients__category patients__category--2"
            }
          >
            Выбывшие
            <span>
              ({this.props.quittingData ? this.props.quittingData.length : ""})
            </span>
          </div>
        </div>
        {this.props.active1 ? <Present /> : ""}
        {this.props.active2 ? <Quitting /> : ""}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    active1: state.app.active1,
    active2: state.app.active2,
    presentData: state.present.presentData,
    quittingData: state.quitting.quittingData
  }
}

const mapDispatchToProps= dispatch => {
    return {
      setActive1ActionCreator: () => dispatch(setActive1ActionCreator()),
      setActive2ActionCreator: () => dispatch(setActive2ActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Patients);