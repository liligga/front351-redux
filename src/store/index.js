import { legacy_createStore as createStore, combineReducers } from "redux";
import { devToolsEnhancer} from "@redux-devtools/extension"

import { counterReducer } from "./counterReducer";
import { userReducer } from "./userReducer";
import { todosReducer } from "./todosReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    todos: todosReducer
});

export const store = createStore(
    rootReducer,
    devToolsEnhancer()
);

