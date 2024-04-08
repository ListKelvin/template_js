import { taskApi } from "../services/taskApi";
import { userApi } from "../services/userApi";
import { configureStore } from "@reduxjs/toolkit";
import task from "../slice/task";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
    task: task,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, taskApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export const useAppDispatch = useDispatch.withTypes();
export const useAppSelector = useSelector.withTypes();
