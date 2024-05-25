const defaultState = {
    todos: [],
};

// dispath({type: "ADD_TODO", payload: "Learn Redux"})
export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                id: new Date(),
                name: action.payload,
                completed: false,
            };
            return { ...state, todos: [newTodo, ...state.todos] };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((el) => el.id !== action.payload),
            };
        default:
            return state;
    }
};

// action creators:
/**
 * @param {payload} payload - string
 * @returns {action}
 */
export const addTodo = (payload) => ({ type: "ADD_TODO", payload });

export const deleteTodo = (payload) => ({
    type: "DELETE_TODO",
    payload,
});
