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
const SvgTaas = React.forwardRef((props, ref) => (
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
      d="M3 9.75h.974v.916H3V9.75zm.974 3.58h2.832v.92H3v-2.668h2.857v.914H3.974v.835zm13.22-1.748H21v2.668h-2.858v-.92h1.884v-.833h-2.832v-.915zm2.848-.872h-2.85v-.916h2.85v.916zm-12.308.871h3.806v1.789h-.948v.88H7.734v-2.668zm2.833 1.75v-.834h-1.86v.833h1.86zM7.734 9.75h3.806v.916H7.734V9.75zm4.75 1.832h3.807v1.787h-.948v.881h-2.858v-2.668zm2.83 1.748v-.833h-1.86v.833h1.86zm-2.83-3.58h3.807v.916h-3.806V9.75z"
      fill="white"
    />
  </Svg>
));
SvgTaas.displayName = "SvgTaas";
SvgTaas.defaultProps = {
  size: 24,
  color: "#002342"
};
export default SvgTaas;
