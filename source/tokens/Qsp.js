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
const SvgQsp = React.forwardRef((props, ref) => (
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
      d="M8.625 12A3.38 3.38 0 0112 8.625 3.38 3.38 0 0115.375 12c0 .49-.107.954-.296 1.375l-2.227-2.228-1.704 1.705 2.228 2.227a3.352 3.352 0 01-1.376.296A3.379 3.379 0 018.625 12zm8.86 0a5.454 5.454 0 00-.885-2.983l2.15-2.151-1.616-1.616-2.15 2.151A5.454 5.454 0 0012 6.515a5.46 5.46 0 00-2.983.885L6.866 5.25 5.25 6.865l2.151 2.152a5.46 5.46 0 000 5.967l-2.151 2.15 1.615 1.616 2.152-2.151c.859.559 1.882.886 2.983.886a5.454 5.454 0 002.983-.886l2.151 2.151 1.616-1.616-2.151-2.15A5.454 5.454 0 0017.485 12"
      fill="white"
    />
  </Svg>
));
SvgQsp.displayName = "SvgQsp";
SvgQsp.defaultProps = {
  size: 24,
  color: "#454545"
};
export default SvgQsp;
