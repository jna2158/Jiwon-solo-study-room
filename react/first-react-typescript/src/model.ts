export interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

// type Actions =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: number };

// const TodoReducer = (state: Todo[], action: Actions) => {
//   switch (action.type) {
//     case "add":
//       return [...state, { id: Date.now(), todo: action.payload, done: false }];
//     case "remove":
//       return state.filter((todo) => todo.id !== action.payload);
//     case "done":
//       return state.map((todo) =>
//         todo.id !== action.payload ? { ...todo, done: !todo.done } : todo
//       );
//   }
// };

// import { useReducer } from "react";
// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);

//   return <div />;
// };
