import React from 'react'

import { Container, Main, Article1, Article2, Photos, Link } from './styles'
import { AsideLeft } from '../AsideLeft'

export function Home() {
  return (
    <Container>
      <AsideLeft />
      <Main>
        <Article1>
          <div>
            <h1>Resumo</h1>
            <p>
              Sou um desenvolvedor Full Stack. Tenho conhecimento em HTML, CSS,
              JavaScript, Node, React, docker. Com essas ferramentas desenvolivi
              alguns projetos.
            </p>
          </div>
          <div>
            <h2> experiências</h2>
            <p>
              Realizei projetos utilizando HTML, CSS, JavaScript, Node, React e
              Docker. Criação de Websites, criação de sistemas Web.
            </p>
          </div>
          <div>
            <h2>Formação acadêmica</h2>
            <h3>DevClub - Formação Full Stack - ago de 2022 á ago de 2023</h3>
            <p>
              O DevClub é uma formação Full Stack completa do zero ao avançado.
              Dentro dessa formação obtive conhecimento em tecnologias tais
              como: HTML, CSS, JavaScript, React, Node, Bancos de dados
              Relacionais e não relacionais e Docker. Além do conhecimento
              teórico, realizei diversos projetos práticos.
            </p>
            <h3>Ciência da Computação</h3>
            <p>Comecei a cursar esse ano em 2025</p>
          </div>
        </Article1>
        <Article2>
          <h1>Projetos</h1>
          <div>
            <h2>codeBurger</h2>
            <p>
              Esse projeto foi desenvolvido pensando em um website a onde dar
              para ver e encomendar o que a hamburger oferece. Um código muito
              responsivel, tendo uma área para o cliente e uma área para o
              administrador, onde ele pode adicionar ou deletar, ou mesmo,
              atualizar alguma oferta ou poroduto.
            </p>
            <Photos>
              <img src="" alt="fotos-projetos" />
            </Photos>
            <Link>
              Link do projeto no github{' '}
              <a href="https://github.com/tiago5agostinho/codeBurger">
                clique aqui.
              </a>
            </Link>
          </div>
          <div>
            <h2>Portfólio</h2>
            <p>Esse projeto é o qual você está navegando.</p>
            <Photos>
              <img src="" alt="fotos-projetos" />
            </Photos>
            <Link>
              Link do projeto no github{' '}
              <a href="https://github.com/tiago5agostinho/codeBurger">
                clique aqui.
              </a>
            </Link>
          </div>
        </Article2>
      </Main>
    </Container>
  )
}
