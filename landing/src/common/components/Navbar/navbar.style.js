import styled from "styled-components";
import {
  display,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  boxShadow,
  color,
  space,
  borderRadius,
  width,
  height,
} from "styled-system";

const NavbarStyle = styled.nav`
  /* Navbar default style goes here */
  display: flex;
  align-items: center;
  min-height: 56px;
  padding: 10px 16px;

  /* Style system supported prop */
  ${display}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
  ${width}
  ${height}
  ${color}
  ${space}
  ${boxShadow}
  ${borderRadius}

  .color-font {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#7492ff),
      color-stop(#c471ed),
      to(#fdd649)
    );
    background: -webkit-linear-gradient(left, #7492ff, #c471ed, #fdd649);
    background: -o-linear-gradient(left, #7492ff, #c471ed, #fdd649);
    background: linear-gradient(to right, #7492ff, #c471ed, #fdd649);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 56px;
    line-height: 56px;
  }
`;

NavbarStyle.displayName = "NavbarStyle";

export default NavbarStyle;
