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
const SvgDew = React.forwardRef((props, ref) => (
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
      d="M9.12 17.112a.83.83 0 01.84.819.83.83 0 01-.84.819H8.032a.917.917 0 01-.64-.259.873.873 0 01-.266-.625V6.112c0-.229.093-.448.259-.61a.894.894 0 01.624-.252h1.168a.83.83 0 01.84.819c0 .218-.089.425-.246.579a.853.853 0 01-.594.24h-.258v10.224h.203zm9.128-8.589c.584 1.004.877 2.126.877 3.368s-.296 2.365-.887 3.37c-.59 1.004-1.246 1.773-2.324 2.47-.99.64-2.023 1.018-3.305 1.018h-.425a.83.83 0 01-.84-.819.83.83 0 01.84-.818h.517c.908 0 1.567-.376 2.307-.802.74-.426 1.214-1.125 1.643-1.878.43-.752.645-1.593.645-2.521-.001-.941-.218-1.788-.654-2.541a4.778 4.778 0 00-1.782-1.78c-.753-.432-1.59-.649-2.51-.649h-.223a.83.83 0 01-.84-.818c0-.218.089-.426.246-.579a.849.849 0 01.594-.24h.261c1.27 0 2.417.285 3.443.856a6.276 6.276 0 012.417 2.363z"
      fill="white"
    />
  </Svg>
));
SvgDew.displayName = "SvgDew";
SvgDew.defaultProps = {
  size: 24,
  color: "#FEC907"
};
export default SvgDew;
