import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects{
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      min-width: 22rem;
      max-width: 28rem;
      flex: 1 1 22rem;
      color: #FFF;

      &:hover{
        transform: translateY(-5px);
        background-color: var(--blue);
      }

      h3{
        margin-bottom: 1rem;
        text-align: center;
      }

      h4{
        text-align: center;
        font-size: 1.4rem;
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 600px){
    .projects .project{
      min-width: 100%;
      max-width: 100%;
    }
  }
`
