import styled from 'styled-components'

export const Drawers = styled.nav`
  position:fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  padding: 20px 10px;
  box-sizing: border-box;
  background: #fff;
  transform: translateX(0);
  transition: transform .3s ease-in;
  z-index: 25;
  &.close {
    transform: translateX(-300px);
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin-bottom: 15px;
      a {
        color: #363d54;
        font-size: 30px;
        text-decoration:none;
        background-color: #fff;
        position:relative;
        padding: 0 20px 10px 20px;
        transition: opacity .3s;
        &:hover, .active {
          opacity: .7;
        }
      }
    }
  }
  &.open {
    transform: translateX(0);
  }
`