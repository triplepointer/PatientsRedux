import React, { useEffect, useState } from "react";
import "./Present.css";
import { connect } from "react-redux"
import {getIndexActionCreator} from '../../store/actions'

class Present extends React.Component {
  render() {
    return (
      <div className="present">
        <div className="present__header">
          <div className="present__header-text present__header-text--1">
            № ИБ
          </div>
          <div className="present__header-text present__header-text--2">
            ФИО
          </div>
          <div className="present__header-text present__header-text--3">
            Палата
          </div>
        </div>
        {this.props.data ? this.props.data.map((item, index) => {
          return (
            <ul
              className="present__data"
              tabIndex={index}
              onClick={this.props.getIndexActionCreator}
            >
              <li className="present__data-text present__data-text--1">
                {index}
              </li>
              <li className="present__data-text present__data-text--2">
                <div>{item.lastName}</div>
                <div>{item.firstName}</div>
                <div>{item.patrName}</div>
              </li>
              <li className="present__data-text present__data-text--3">
                {item.bedNumber}
              </li>
            </ul>
          );
        }) : ""}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.present.presentData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getIndexActionCreator: (event) => dispatch(getIndexActionCreator(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Present);
