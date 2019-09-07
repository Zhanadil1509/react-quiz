import styled from 'styled-components'

export const Layouts = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .change {
      .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
      }
      .bar2 {
        opacity: 0;
      }
      .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
      }
      left: 320px;
  }
`