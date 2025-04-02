import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  height: 85vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
`
export const Main = styled.div`
  margin-left: 40px;
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
export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758a6' : '#555555')};
  font-weight: 400;
  font-size: 27px;
  line-height: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const ToolBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    color: #424242;
    margin: 5px;
    text-align: center;
  }
`

export const Image = styled.img`
  width: 100px;
  border-radius: 10px;
  margin-bottom: 16px;
`
