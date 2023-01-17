import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import { API_GET_LIST } from '../const';
import { getListAction } from './actionCreators';
import { GET_MY_LIST } from './actionTypes';

//generator
function* mySaga(){
    yield takeEvery(GET_MY_LIST, getList);
}

function* getList(){
    const res = yield axios.get(API_GET_LIST);
    const action = getListAction(res.data);
    yield put(action);
}

export default mySaga;  