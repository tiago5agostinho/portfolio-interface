import styled from 'styled-components'

export const Container = styled.div`
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
