import styled from 'styled-components'

export const BaseButton = styled.button`
  font-size: 28px;
  color: #ffffff;
  padding: 15px 30px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  border: none;
  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    #c41417 0%,
    #b31315 100%
  );
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.75);
  }
`

export const TextButton = styled(BaseButton)`
  background: none;
  border: none;
  color: #6f6f6f;
  font-size: 28px;

  &:hover {
    color: #c41417;
    box-shadow: none;
  }
`
