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
const SvgMed = React.forwardRef((props, ref) => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill={"currentcolor"}
    height={props.size}
    width={props.size}
    ref={ref}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M18 9.046v6.686l-1.902 1.11V12.38L12 14.832l-4.098-2.455v4.465L6 15.732V9.045l6 3.604 6-3.604zm-5.977 8.338l1.755-1.05 1.732 1.05-3.487 2.116-3.486-2.116 1.732-1.05 1.754 1.05zm3.465-10.768l-1.734 1.05L12 6.616l-1.754 1.05-1.733-1.05L12 4.5l3.488 2.117z"
      fill="white"
    />
  </Svg>
));
SvgMed.displayName = "SvgMed";
SvgMed.defaultProps = {
  size: 24,
  color: "#00B0FF"
};
export default SvgMed;
