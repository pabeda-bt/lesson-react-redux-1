import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {LOAD_USER, LOADED_USER, LOAD_USER_ERROR} from './constants'

function* loadUserSaga(action) {
       try {
        console.log("LOAD_USER actionu tetiklendi.");
        const response = yield axios.get('http://rest.learncode.academy/api/wstern/users/'+action.value);
        yield put({type: LOADED_USER, value: response.data});
   } catch (e) {
      yield put({type: LOAD_USER_ERROR, message: e.message});
   }
}

function* defaultSaga() {
    yield takeLatest(LOAD_USER, loadUserSaga);
}

export default defaultSaga;