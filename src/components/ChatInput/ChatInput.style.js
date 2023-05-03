import styled from 'styled-components'

export const BaseChatInput = styled.div`
  height: 80px;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(#eee, #fff);
  position: relative;
  color: #4e4e4e;

  textarea {
    color: inherit;
    border-radius: 10px;
    border: 3px solid lightgray;
    font-size: 18px;
    outline: none;
    width: 100%;
    height: 100%;
    resize: none;
  }

  span {
    position: absolute;
    bottom: 0;
    right: 10px;
  }
`