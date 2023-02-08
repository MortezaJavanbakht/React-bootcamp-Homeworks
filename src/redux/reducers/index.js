import { combineReducers } from "@reduxjs/toolkit";
import personReducer from "./persons/personsReducer";

export const combinedReducers = combineReducers({ person: personReducer });
