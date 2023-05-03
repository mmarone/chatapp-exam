import styled from 'styled-components'
import img from '../../assets/images/bg.jpg'

export const BaseLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
`
