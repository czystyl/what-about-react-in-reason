let component = ReasonReact.statelessComponent("FixForReasonApolloJsxV3");

let make = (~demoCase, _children) => {
  ...component,
  render: _self =>
    switch (demoCase) {
    | 1 => <SimpleApp />
    | 2 => <FullApp />
    | _ => ReasonReact.string("Example not exist")
    },
};