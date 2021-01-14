import React from "react";
import "./Information.css";
import arrowLeft from "../../assets/images/left-chevron.svg";
import { connect } from 'react-redux'

let now = new Date();

class Information extends React.Component {
  render() {
    return (
      <div className="information">
        <div className="information__title">
          Информация о пациенте
          <i className="information__chevron-left">
            <img src={arrowLeft} />
          </i>
        </div>
        <div className="information__content">
          <div className="information__text">
            ФИО
            {this.props.active1 && this.props.index ? (
              <span className="information__names">
                <div>{this.props.presentData[this.props.index].lastName}</div>
                <div>{this.props.presentData[this.props.index].firstName}</div>
                <div>{this.props.presentData[this.props.index].patrName}</div>
              </span>
            ) : this.props.active2 && this.props.index ? (
              <span className="information__names">
                <div>{this.props.quittingData[this.props.index].lastName}</div>
                <div>{this.props.quittingData[this.props.index].firstName}</div>
                <div>{this.props.quittingData[this.props.index].patrName}</div>
              </span>
            ) : (
              <span className="information__names"></span>
            )}
          </div>
          <div className="information__text">
            Возраст
            {this.props.active1 && this.props.index ? (
              <span className="information__age">
                {Math.abs(this.props.presentData[this.props.index].birthDate.slice(0, 4) - now.getFullYear()) +
                  (this.props.presentData[this.props.index].birthDate.slice(5, 7) - now.getMonth() < 0 ? 1 : 0) +
                  (this.props.presentData[this.props.index].birthDate.slice(5, 7) === now.getMonth()
                    ? this.props.presentData[this.props.index].birthDate.slice(8, 10) - now.getDay() < 0
                      ? 1
                      : 0
                  : 0)}
              </span>
            ) : this.props.active2 && this.props.index ? (
              <span className="information__age">
                {Math.abs(this.props.quittingData[this.props.index].birthDate.slice(0, 4) - now.getFullYear()) +
                   (this.props.quittingData[this.props.index].birthDate.slice(5, 7) - now.getMonth() < 0 ? 1 : 0) +
                   (this.props.quittingData[this.props.index].birthDate.slice(5, 7) === now.getMonth()
                   ? this.props.quittingData[this.props.index].birthDate.slice(8, 10) - now.getDay() < 0
                       ? 1 
                      : 0 
                    : 0)}
              </span>
            ) : (
              <span className="information__age"></span>
            )}
          </div>
          <div className="information__text">
            Диагноз
            {this.props.active1 && this.props.index ? (
              <span className="information__diagnosis">
                {this.props.presentData[this.props.index].diagnosis}
              </span>
            ) : this.props.active2 && this.props.index ? (
              <span className="information__diagnosis">
                {this.props.quittingData[this.props.index].diagnosis}
              </span>
            ) : (
              <span className="information__diagnosis"></span>
            )}
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    active1: state.app.active1,
    active2: state.app.active2,
    index: state.app.index,
    presentData: state.present.presentData,
    quittingData: state.quitting.quittingData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Information);