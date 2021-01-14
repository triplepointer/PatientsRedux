import axios from "axios";

export const GET_DATA = "GET_DATA";
export const SET_PRESENT_DATA = "SET_PRESENT_DATA";
export const SET_QUITTING_DATA = "SET_QUITTING__DATA";
export const SET_ACTIVE_1 = "SET_ACTIVE_1";
export const SET_ACTIVE_2 = "SET_ACTIVE_2";
export const GET_INDEX = "GET_INDEX";


export const setActive1ActionCreator = () => {
  return {
    type: SET_ACTIVE_1,
    payload: { active1: 1, active2: 0 }
  }
}

export const setActive2ActionCreator = () => {
  return {
    type: SET_ACTIVE_2,
    payload: { active1: 0, active2: 1 }
  }
}

const setPresentDataActionCreator = (data) => ({
    type: SET_PRESENT_DATA,
    payload: {presentData :data}
})

const setQuittingDataActionCreator = (data) => ({
    type: SET_QUITTING_DATA,
    payload: {quittingData: data}
})

const getDataActionCreator = () => ({
    type: GET_DATA
})

export const getIndexActionCreator = (event) => ({
    type: GET_INDEX,
    payload: { index: event.currentTarget.firstChild.innerHTML } 
})

export const getDataActionCreatorFunc = () => dispatch => {
    dispatch(getDataActionCreator());
    axios
      .get("https://api.jsonbin.io/b/5fb65e054144f562a5f04222", {
        headers: {
          "secret-key":
            "$2b$10$OWOiUxC0kdDrxpfqg7eR3ucddfB1LATLaBGvQ5A7O8/Wo5Dzr1.ju"
        }
      })
      .then((res) => {
        console.log(res);
        let data = res.data;
        dispatch(
            setPresentDataActionCreator(data));
      });
    axios
      .get("https://api.jsonbin.io/b/5fb90da402f80c2af523e1c6", {
        headers: {
          "secret-key":
            "$2b$10$OWOiUxC0kdDrxpfqg7eR3ucddfB1LATLaBGvQ5A7O8/Wo5Dzr1.ju"
        }
      })
      .then((res) => {
        console.log(res);
        let data = res.data;
        dispatch(
            setQuittingDataActionCreator(data)
        );
      });
}