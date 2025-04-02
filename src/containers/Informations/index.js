import React from 'react'

import autoImage from '../../assets/IMG-20241129-WA0020.jpg'

import { Container, Contacts, Name, Div1, Div2, Div3 } from './styles'

export function Informations() {
  return (
    <Container>
      <Div1>
        <img src={autoImage} alt="minha foto" />
        <div>
          <Contacts> Tiago </Contacts>
          <Name> Agostinho </Name>
        </div>
      </Div1>
      <Div2>
        <div>
          <Contacts> telefone </Contacts>
          <p> 53991391758 </p>
        </div>
      </Div2>
      <Div2>
        <div>
          <Contacts> email </Contacts>
          <p> tiagoagostinho49@gmail.com </p>
        </div>
      </Div2>
      <Div2>
        <div>
          <Contacts> Linkedin </Contacts>
          <p>
            <a href="https://www.linkedin.com/in/tiago-da-s-agostinho-69056022a/details/education/">
              LikediIn-Tiago
            </a>
          </p>
        </div>
      </Div2>
      <Div3></Div3>
    </Container>
  )
}
