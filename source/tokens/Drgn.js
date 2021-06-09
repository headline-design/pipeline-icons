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
const SvgDrgn = React.forwardRef((props, ref) => (
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
      opacity={0.6}
      d="M7.05 15.585h2.113L9.11 10.09l7.871 9.992-.025-11.799h-2.08l.054 5.55L7.053 3.816l-.003 11.77z"
      fill="white"
    />
    <path
      d="M7.05 7.465l.012-3.638 9.887 12.564.041 3.706L7.05 7.465z"
      fill="white"
    />
  </Svg>
));
SvgDrgn.displayName = "SvgDrgn";
SvgDrgn.defaultProps = {
  size: 24,
  color: "#C91111"
};
export default SvgDrgn;
