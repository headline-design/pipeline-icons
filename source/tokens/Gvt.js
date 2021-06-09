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
const SvgGvt = React.forwardRef((props, ref) => (
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
      d="M19.5 9.895c0 4.056-3.365 7.355-7.5 7.355s-7.5-3.3-7.5-7.354c0-.298.018-.598.056-.895h1.346a5.96 5.96 0 00-.067.895c0 3.334 2.766 6.047 6.166 6.047 3.244 0 5.911-2.47 6.15-5.591H8.61c.203 1.457 1.352 2.615 2.833 2.855 1.481.238 2.947-.498 3.616-1.815h1.444c-.656 1.891-2.467 3.163-4.505 3.165-2.621 0-4.755-2.092-4.755-4.662 0-.3.03-.6.087-.895h12.114c.038.297.056.595.056.895z"
      fill="white"
    />
  </Svg>
));
SvgGvt.displayName = "SvgGvt";
SvgGvt.defaultProps = {
  size: 24,
  color: "#16B9AD"
};
export default SvgGvt;
