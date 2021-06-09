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
const SvgReq = React.forwardRef((props, ref) => (
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
      d="M7.5 4.5h4.955c.677.005 1.18.043 1.512.112A4.042 4.042 0 0116.66 6.44c.689 1.093.779 2.519.255 3.694a4.024 4.024 0 01-2.625 2.235c-.736.209-1.508.131-2.264.145 1.294 2.103 2.585 4.208 3.874 6.313l-1.071.674c-2.247-3.66-3.93-6.405-5.052-8.235 1.195-.006 2.39.009 3.584-.008 1.378-.036 2.583-1.231 2.611-2.582.09-1.168-.682-2.333-1.811-2.717-.312-.12-.803-.175-1.472-.165L7.5 5.791V4.5z"
      fill="white"
    />
  </Svg>
));
SvgReq.displayName = "SvgReq";
SvgReq.defaultProps = {
  size: 24,
  color: "#6CFCCD"
};
export default SvgReq;
