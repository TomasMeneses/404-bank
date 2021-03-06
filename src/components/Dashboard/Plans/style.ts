import styled from "styled-components"

export const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: center;
  width: 100vw;
  margin: 0 auto 3rem;
  padding: 0 1rem;
  background: #7cc5ea;
  @media only screen and (min-width: 768px) {
    padding: 0;
    max-width: 600px
  }
`

export const Repositories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #fdf9f9;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

`
export const PlanCards = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-items: center;
  padding: 1rem 0;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #d4cece;
    border-radius: 5px;
    padding: 1rem;
    text-decoration: none;
    transition: transform 0.2s;

      & + a {
        margin-top: 16px;
      }

      &:hover {
        transform: translateX(10px);
      }

      div {
        strong {
          font-size: 20px;
          color: #3d3d4d;
        }
      }
      .splitter {
        width: 60%;
        border-bottom: 1px solid #d8d8d8;
        padding: 0.2rem 0;
      }
      .type-movement {
        margin: 0.2rem;
      }
      .type-movement-code {
        margin-left: 0.2rem;
        font-weight: bold;
      }
  }
`

export const AddPlans = styled.div`
  button {
    cursor: pointer;
    width: 200px;
    height: 40px;
    border: 0;
    border: 0;
    border-radius: 8px;
    color: #ffff;
    background-color: #3c92fd;
    display: flex;
    margin: 1.5rem auto;
    margin-bottom: 10px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  }
`

export const CardModal = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0;
  background: #0000008f;
`

export const CardAddPlans = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  animation: 0.8s ease 0s 1 normal forwards show;
`
export const CardExit = styled.div`
  display: flex;
  width: 50vw;
  height: 45vh;
  background: white;
  border-radius: 8px;
  padding: 1rem;
  animation: 0.8s ease 0s 1 normal forwards show;
  flex-direction: column;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  select {
    width: 100%;
    height: 40px;
    border: 0;
    border-bottom: 1px solid #9e9e9e;
  }

  textarea {
    height: 120px;
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
  }

  label {
    font-size: 12px;
  }

  button {
    border-radius: 10px;
    color: #ffff;
    background-color: #3c92fd;
    width: 9vw;
    padding: 10px;
    border: none;
    margin-top: 20px;
  }

  /* MOBILE */
  @media only screen and (max-width: 768px) {
    width: 80vw;
    height: 70vh;
    button {
      width: 80%;
    }
  }

  @keyframes show {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
`
