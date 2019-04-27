type state = {count: int};

type action =
  | Click;

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Click => {count: state.count + 1}
        },
      {count: 0},
    );

  let message =
    "You've clicked this " ++ string_of_int(state.count) ++ " times(s)";

  <div>
    <button onClick={_event => dispatch(Click)}>
      {ReasonReact.string(message)}
    </button>
  </div>;
};