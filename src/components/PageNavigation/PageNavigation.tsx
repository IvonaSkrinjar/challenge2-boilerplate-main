import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  title: string;
}

const PageNavigation = ({ title }: IProps) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/{title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 7rem;
  background-color: #f6f8fa;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;
  margin-top: 6rem;

  a {
    font-size: 3.2rem;
  }
`;

export default PageNavigation;
