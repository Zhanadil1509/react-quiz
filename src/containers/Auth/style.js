import styled from 'styled-components'

export const Auths = styled.div`
  display:flex;
  justify-content:center;
  padding-top: 100px;
  flex-grow: 1;
  width: 100%;
  background: linear-gradient(270deg, #cef2fa 0%, #59bfef 100%);
  > div {
    width: 100%;
    max-width: 600px;
    padding: 20px 20px 30px;
  }
  h1 {
    color: #fff;
    text-align:center;
    margin-top: 0;
  }
`

export const AuthsForm = styled.div`
  background: #eee;
  box-shadow: 0 0 6px 2px rgba(0,0,0, .15);
  padding: 15px;
  border-radius: 5px;
  height: max-content;
  form {
    input, button {
      &:not(:last-child) {
          margin-right: 5px;
      }
    }    
  }
`