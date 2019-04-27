[@bs.config {jsx: 2}];

module Main = {
  let component =
    ReasonReact.statelessComponent("IndexFixForReasonApolloJsxV3");

  let make = _children => {
    ...component,
    render: _self =>
      <ReasonApollo.Provider client=Client.instance>
        <FixForReasonApolloJsxV3 demoCase=Utils.demoVersion />
      </ReasonApollo.Provider>,
  };
};

ReactDOMRe.renderToElementWithId(<Main />, "root");