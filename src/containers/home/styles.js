import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  height: 85vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
`

export const Aside = styled.div`
  padding: 60px 10px 10px 10px;
  border-radius: 0 20px 20px 0;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  background: rgb(223, 225, 228);
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Main = styled.div`
  margin: 0px 5px 10px 20px;
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  background: #f4f4f4;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758a6' : '#555555')};
  font-weight: 400;
  font-size: 27px;
  line-height: ${props => (props.isActive ? 'bold' : 'normal')};
`
export const Article1 = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      margin-left: 5px;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      line-height: normal;
      color: #000;
      text-decoration: none;
    }
  }
`

export const Article2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    padding-bottom: 5px;
  }

  p {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    color: #000;
    text-decoration: none;
  }
`

export const Photos = styled.div``

export const Link = styled.p`
  margin-top: 5px;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-decoration: none;

  a {
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    line-height: normal;
    color: #000;
    text-decoration: none;
  }
`
