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
const SvgMod = React.forwardRef((props, ref) => (
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
      opacity={0.5}
      d="M17.239 15.755V6.06l-4.734 4.837 4.734 4.858z"
      fill="white"
    />
    <path d="M6.75 5.25l.228.234 6.35 6.506L6.75 18.74V5.25z" fill="white" />
  </Svg>
));
SvgMod.displayName = "SvgMod";
SvgMod.defaultProps = {
  size: 24,
  color: "#09547D"
};
export default SvgMod;
