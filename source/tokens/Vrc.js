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
const SvgVrc = React.forwardRef((props, ref) => (
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
      d="M15.199 6h3.551L12 19.5 5.25 6h3.528l3.245 6.835L15.2 6zM12 9.72c-.591 0-1.07-.493-1.07-1.1 0-.606.479-1.099 1.07-1.099.591 0 1.07.493 1.07 1.1 0 .606-.48 1.098-1.07 1.098zm4.849 3.03c.59 0 1.07.492 1.07 1.099s-.48 1.098-1.07 1.098c-.591 0-1.07-.491-1.07-1.098 0-.607.479-1.099 1.07-1.099z"
      fill="white"
    />
  </Svg>
));
SvgVrc.displayName = "SvgVrc";
SvgVrc.defaultProps = {
  size: 24,
  color: "#418BCA"
};
export default SvgVrc;
