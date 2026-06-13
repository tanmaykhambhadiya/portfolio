import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .educations{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;
    width: 100%;
  }

  @media (max-width: 960px){
    .educations{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .educations{
      grid-template-columns: 1fr;
    }
  }
`;

export const EducationTree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TreeNode = styled.div`
  background-color: #2b2b2b;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;

  &:hover{
    transform: translateY(-5px);
    background-color: var(--blue);
  }
`;

export const NodeTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 480px){
    font-size: 2rem;
  }
`;

export const NodeContent = styled.div`
  font-size: 1.6rem;
  color: #ffffff;

  p {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px){
    font-size: 1.4rem;
  }
`;
