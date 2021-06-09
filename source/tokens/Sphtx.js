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
const SvgSphtx = React.forwardRef((props, ref) => (
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
      d="M4.5 9.293v-.267h6.313v.267H4.5zm0-.776V8.25h6.313v.267H4.5zm2.662 7.98v-6.67h.254v6.67h-.254zm.736 0v-6.67h.252v6.67h-.253zm11.424-.546l-2.849-3.01.178-.188 2.849 3.009-.178.189zM12.389 8.25l2.849 3.01-.179.188-2.848-3.009.178-.189zm6.413 8.25l-2.849-3.01.179-.189 2.848 3.01-.178.189zM11.87 8.799l2.849 3.009-.18.189-2.848-3.009.18-.189zm4.066 3.576l.18-.189 3.206-3.387.178.189-3.206 3.387-.179.189-.34.36-.18.189L12.39 16.5l-.179-.189 3.207-3.387.178-.189.34-.36zm-.34-.738l3.206-3.387.179.189-3.206 3.387-.179.189-.34.36-.18.189-3.205 3.387-.18-.189 3.207-3.387.178-.189.342-.36.178-.189z"
      fill="white"
    />
  </Svg>
));
SvgSphtx.displayName = "SvgSphtx";
SvgSphtx.defaultProps = {
  size: 24,
  color: "#00B098"
};
export default SvgSphtx;
