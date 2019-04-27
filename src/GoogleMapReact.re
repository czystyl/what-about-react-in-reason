type center = {
  lat: float,
  lng: float,
};

type keys = {. "key": string};

[@react.component] [@bs.module "google-map-react"]
external make:
  (
    ~defaultZoom: int,
    ~defaultCenter: center,
    ~bootstrapURLKeys: keys,
    ~children: React.element
  ) =>
  React.element =
  "default";