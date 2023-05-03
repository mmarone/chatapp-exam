import styled from 'styled-components'

export const ChatItemGroup = styled.div`
  margin-bottom: 10px;

  &.text-left {
    text-align: left;
  }

  &.text-right {
    text-align: right;
  }
`

export const Author = styled.p`
  margin: 0;
`

export const Text = styled.div`
  display: inline-block;
  padding: 10px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: #dbdada;
  word-wrap: break-word;
`
