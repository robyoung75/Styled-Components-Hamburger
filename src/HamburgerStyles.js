import styled, { css } from "styled-components";

const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "start"};
  justify-content: ${(props) => props.justifyContent || "start"};
`;
// rendered by > App > > Modal
const StyledWrapper = styled.div`
  ${(props) => props.isFlex && flexStyles};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || " 0"};
  margin: ${(props) => props.margin || "0"};
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props};
`;

const activeStylesBuns = css`
  transform: translate(0, 0) rotate(0deg);
`;

const activeStylesMiddle = css`
  transform: translateX(0);
`;

const StyledHamburgerTop = styled.span`
  width: 15px;
  height: 2px;
  background-color: black;
  margin: 2px 0;
  transition: all 0.5s;
  transform: translate(0, 6px) rotate(45deg);
  ${(props) => props.isActive && activeStylesBuns}
`;

const StyledHamburgerMiddle = styled.span`
  width: 15px;
  height: 2px;
  background-color: black;
  margin: 2px 0;
  transition: all 0.5s;
  transform: translateX(100px);
  ${(props) => props.isActive && activeStylesMiddle}
`;

const StyledHamburgerBottom = styled.span`
  width: 15px;
  height: 2px;
  background-color: black;
  margin: 2px 0;
  transition: all 0.5s;
  transform: translate(0, -6px) rotate(-45deg);
  ${(props) => props.isActive && activeStylesBuns}
`;

export {
  StyledWrapper,
  StyledHamburgerTop,
  StyledHamburgerMiddle,
  StyledHamburgerBottom
};
