import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, PageLink } from './styles'

export function AsideLeft() {
  return (
    <Container>
      <NavLink to="/" end>
        <PageLink>Interface</PageLink>
      </NavLink>
      <NavLink to="/backend" end>
        <PageLink>back-and</PageLink>
      </NavLink>
      <NavLink to="/frontend">
        <PageLink>frot-and</PageLink>
      </NavLink>
    </Container>
  )
}
