import styled from 'styled-components'

export const Container = styled.div`
  max-width: 144rem;
  height: 82rem;
`

export const Logo = styled.div`
  width: 21.5rem;
  height: 5.6rem;
  margin-left: 11.3rem;
  margin-top: 12.4rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`
export const Main = styled.main`
  display: flex;
  align-items: end;
  gap: 3.6rem;
  margin-left: 11.3rem;

  p {
    width: 48.7rem;
    margin-top: 13.2rem;

    font-weight: 800;
    font-size: 7.2rem;
    line-height: 90%;
    letter-spacing: -0.02rem;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 12.6rem;

  p {
    width: 40.7rem;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
  span {
    font-size: 1.6rem;
    line-height: 3.4rem;
    margin-right: 2.3rem;
  }
  select {
  }
  button {
    background-color: #f4d35e;
    border-radius: 2rem;
    border: none;
    width: 7.2rem;
    height: 7.2rem;
  }
`
