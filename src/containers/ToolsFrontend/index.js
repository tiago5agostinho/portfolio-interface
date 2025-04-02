import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { ContainerItems, Image, Container, Main, ToolBox } from './styles'
import { AsideLeft } from '../AsideLeft'

export function ToolsFrontend() {
  const [tools, setTools] = useState([])

  useEffect(() => {
    async function loadTools() {
      const { data } = await api.get('tools')

      const newTools = data
        .filter(tools => tools.area === 'frontend')
        .map(tools => {
          return tools
        })
      setTools(newTools)
    }

    loadTools()
  }, [])
  return (
    <Container>
      <AsideLeft />
      <Main>
        <h2> Desenvolvi alguns trabalhos backend usando essas ferramentas</h2>
        <ToolBox>
          {tools &&
            tools.map(tool => (
              <div>
                <ContainerItems key={tool.id}>
                  <Image src={tool.url} alt="foto da ferramenta" />
                  <p> {tool.name}</p>
                </ContainerItems>
              </div>
            ))}
        </ToolBox>
        <h2> Projetos desenvolivdos com essas ferramentas</h2>
      </Main>
    </Container>
  )
}
