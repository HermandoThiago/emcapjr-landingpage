import styled from "styled-components";

export const BenefistContainer = styled.section`
  width: 100%;

  padding: 7.5rem 2.8rem;
  color: ${(props) => props.theme.white};

  h2 {
    font-size: 2.2rem;
    margin-bottom: 3.2rem;
    text-align: center;
  }

  #container {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 7.5rem 1.2rem;
  }
`;

export const BenefitsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.8rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 0;
  }
`;

export const BenefitsCard = styled.div`
  width: 32%;
  padding: 2.4rem 2.4rem;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => props.theme["blue-600"]};

  svg {
    margin-bottom: 0.8rem;
  }

  h3 {
    color: #eea918;
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 300;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    margin-bottom: 0.8rem;
  }
`;
