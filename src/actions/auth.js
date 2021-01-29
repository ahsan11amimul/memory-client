import * as api from "../api";
import { AUTH } from '../constants/postConstant';
//Action Creator
export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        console.log(data);
        dispatch({ type: AUTH, data });
        history.push('/');
    } catch (error) {

        console.log(error.message);
    }
}
export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}
