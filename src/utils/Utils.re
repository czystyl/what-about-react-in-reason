let demoVersion = 2;

let infoAboutIpAddress = ip =>
  switch (ip) {
  | Some(ip) =>
    <div>
      {ReasonReact.string("Your IP address is: ")}
      <b> {ReasonReact.string(ip)} </b>
    </div>
  | None => ReasonReact.string("Checking you IP address...")
  };

let apiKey = "put-your-api-key-here";
