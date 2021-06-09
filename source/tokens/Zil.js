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
const SvgZil = React.forwardRef((props, ref) => (
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
      d="M6.75 5.46l8.335 4.038 2.134-.961L8.92 4.5l-2.169.96z"
      fill="white"
      fillOpacity={0.304}
    />
    <path
      d="M15.085 9.488l2.134-.96v2.148l-2.134.961V9.488zm0 9.963v-6.703l2.134-.97v6.713l-2.134.96z"
      fill="white"
      fillOpacity={0.646}
    />
    <path
      d="M6.75 5.463v2.173l5.77 2.802-5.77 2.858v2.142l8.335 4.03v-2.156l-5.66-2.753 5.66-2.91v-2.15L6.75 5.464z"
      fill="white"
    />
  </Svg>
));
SvgZil.displayName = "SvgZil";
SvgZil.defaultProps = {
  size: 24,
  color: "#49C1BF"
};
export default SvgZil;
