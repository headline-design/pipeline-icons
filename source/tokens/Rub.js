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
const SvgRub = React.forwardRef((props, ref) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.875 11.428h1.323V5.25h3.41c.633 0 1.21.074 1.733.223.522.148.969.375 1.341.678.373.303.665.688.876 1.152.211.465.317 1.02.317 1.666 0 .645-.113 1.207-.335 1.685-.211.46-.523.868-.914 1.19a3.834 3.834 0 01-1.36.708 5.93 5.93 0 01-1.695.232h-1.883v1.957h3v1.278h-3v2.731h-1.49v-2.73H7.875v-1.28h1.323v-1.956H7.875v-1.356zm4.732 0c.858 0 1.532-.203 2.023-.61.49-.406.736-1.023.736-1.85 0-.825-.246-1.426-.736-1.8-.491-.375-1.165-.563-2.022-.563h-1.92v4.823h1.92z"
      fill="white"
    />
  </Svg>
));
SvgRub.displayName = "SvgRub";
SvgRub.defaultProps = {
  size: 24,
  color: "#64D1FF"
};
export default SvgRub;
