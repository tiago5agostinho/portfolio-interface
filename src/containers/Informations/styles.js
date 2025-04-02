import styled from 'styled-components'

export const Container = styled.div`
  background: #6a38b0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0 0 20px 20px;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
`
export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 5px;

  img {
    width: 100px;
  }
`
export const Name = styled.h1`
  margin-left: 20px;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #000;
`
export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;

  p {
    font-family: Roboto;
    font-size: 16px;
    margin-top: 7px;

    a {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      line-height: normal;
      color: #000;
      text-decoration: none;
    }
  }
`
export const Div3 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5px;
`

export const Contacts = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #ffffff;
`
