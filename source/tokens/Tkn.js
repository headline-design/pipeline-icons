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
const SvgTkn = React.forwardRef((props, ref) => (
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
      d="M9.819 5.935L13.121 4.5l-.027 3.79h4.156v2.625h-4.184v4.547c0 1.38 2.34 1.543 3.221 1.083l.798 2.382c-1.955 1.136-7.294.866-7.294-3.438V5.934h.028zm-3.083 5.683c-.82 0-1.486-.8-1.486-1.786 0-.987.665-1.786 1.487-1.786.82 0 1.485.8 1.485 1.787 0 .986-.665 1.785-1.485 1.785z"
      fill="white"
    />
  </Svg>
));
SvgTkn.displayName = "SvgTkn";
SvgTkn.defaultProps = {
  size: 24,
  color: "#24DD7B"
};
export default SvgTkn;
