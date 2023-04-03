import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "../store";
import { githubActions } from "../store/github/github.slice";

const actions = {
  ...githubActions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actions, dispatch);
};
