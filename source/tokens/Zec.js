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
const SvgZec = React.forwardRef((props, ref) => (
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
      d="M11.322 14.884h4.723v2.513h-2.907c.049.719.073 1.385.121 2.103h-2.446v-2.078H7.907c0-.82-.097-1.64.048-2.41.073-.41.509-.769.775-1.127.921-1.151 1.85-2.297 2.785-3.436.364-.437.727-.847 1.139-1.333h-4.53V6.603h2.69V4.5h2.348v2.051h2.931c0 .846.097 1.667-.048 2.436-.073.41-.509.77-.799 1.128a347.378 347.378 0 01-2.786 3.436c-.365.456-.745.901-1.138 1.333z"
      fill="white"
    />
  </Svg>
));
SvgZec.displayName = "SvgZec";
SvgZec.defaultProps = {
  size: 24,
  color: "#ECB244"
};
export default SvgZec;
