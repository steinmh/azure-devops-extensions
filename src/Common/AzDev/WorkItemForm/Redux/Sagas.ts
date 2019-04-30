import { resize } from "azure-devops-extension-sdk";
import { ActionsOfType } from "Common/Redux";
import { call, takeLeading } from "redux-saga/effects";
import { WorkItemFormActions, WorkItemFormActionTypes } from "./Actions";

export function* workItemFormSaga() {
    yield takeLeading(WorkItemFormActionTypes.Resize, resizeExtension);
}

function* resizeExtension(action: ActionsOfType<WorkItemFormActions, WorkItemFormActionTypes.Resize>) {
    const { height } = action.payload;
    yield call(resize, undefined, height);
}
