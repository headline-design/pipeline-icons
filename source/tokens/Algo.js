import * as React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);
const SvgAlgo = React.forwardRef((props, ref) => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill={"currentcolor"}
    height={props.size}
    width={props.size}
    ref={ref}
  >
    <path
      d="M11.774 23.653c6.351 0 11.5-5.149 11.5-11.5s-5.149-11.5-11.5-11.5-11.5 5.149-11.5 11.5 5.149 11.5 11.5 11.5z"
      fill="inherit"
    />
    <path
      d="M18.482 17.911h-2.103l-1.366-5.082-2.937 5.082H9.727l4.54-7.867-.731-2.731-6.121 10.599H5.066l7.758-13.437h2.057l.901 3.338h2.122l-1.449 2.519 2.029 7.577z"
      fill="white"
    />
  </Svg>
));
SvgAlgo.displayName = "SvgAlgo";
SvgAlgo.defaultProps = {
  size: 24,
  color: "#1d1d1d"
};
export default SvgAlgo;
