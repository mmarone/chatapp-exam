import styled from 'styled-components'

export const BaseContainer = styled.div`
  width: 90%;
  height: 90vh;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-height: 700px) {
    margin-top: 10px;
    height: 80vh;
  }

  @media screen and (max-height: 375px) {
    height: 70vh;
    margin-top: 10px;
  }
`
