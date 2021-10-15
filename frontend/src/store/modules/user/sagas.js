import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import api from "../../../services/api";

import { updateProfileSuccess, updateProfileFailure } from "./actions";

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar, ...rest } = payload.data;

    // eslint-disable-next-line prefer-object-spread
    const profile = Object.assign(
      { name, email, avatar },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, "v1/users", profile);

    Swal.fire({
      title: "Alterado!",
      text: "O perfil foi alterado com sucesso.",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    });
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao atualizar perfil!");
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
