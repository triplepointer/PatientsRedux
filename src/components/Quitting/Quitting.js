import React, { useEffect, useState } from "react";
import "./Quitting.css";
import { connect } from 'react-redux'
import {getIndexActionCreator} from '../../store/actions'

class Quitting extends React.Component {
  render() {
    return (
      <div className="quitting">
        <div className="quitting__header">
          <div className="quitting__header-text quitting__header-text--1">
            № ИБ
          </div>
          <div className="quitting__header-text quitting__header-text--2">
            ФИО
          </div>
          <div className="quitting__header-text quitting__header-text--3">
            Причина выбытия
          </div>
        </div>
        {this.props.data ? this.props.data.map((item, index) => {
          return (
            <ul
              className="quitting__data"
              tabIndex={index}
              onClick={this.props.getIndexActionCreator}
            >
              <li className="quitting__data-text quitting__data-text--1">
                {index}
              </li>
              <li className="quitting__data-text quitting__data-text--2">
                <div>{item.lastName}</div>
                <div>{item.firstName}</div>
                <div>{item.patrName}</div>
              </li>
              <li className="quitting__data-text quitting__data-text--3">
                {item.cause}
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
    data: state.quitting.quittingData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getIndexActionCreator: (event) => dispatch(getIndexActionCreator(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quitting);