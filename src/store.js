import { configureStore } from "@reduxjs/toolkit";

import { credentials } from './reducers'

const store = configureStore({ reducer: credentials });

export default store;