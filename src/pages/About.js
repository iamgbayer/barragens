import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import config from '../config'

const Title = styled.h1`
  text-align: center;
  color: #000;
`

const Description = styled.p`
  color: #000;
  text-align: center;
  width: 100%;
  max-width: 670px;
  margin: 0 auto;
  margin-bottom: 20px;
`

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 45px;

  @media (max-width: 1024px) {
    padding: 0 15px;
  }
`

export const About = () => {
  ReactGA.pageview(config.resources.about)

  return (
    <Container>
      <Title>Sobre</Title>

      <Description>
        Projeto que tem como intuito tornar a informação que o governo
        disponibiliza com relação às barragens brasileiras, de fácil acesso e
        com uma experiência agradável.
      </Description>

      <Description>
        As informações relacionadas as barragens são totalmente obtidas da{' '}
        <a
          href="http://www.snisb.gov.br/portal/snisb/mapas-tematicos-e-relatorios"
          target="_blank"
        >
          Agência Nacional de Águas
        </a>
        , e não são apenas informações sobre barragens de minério e sim de
        vários propósitos, atualmente são mais de 5000 barragens cadastradas no{' '}
        <a href="http://www.snisb.gov.br/" target="_blank">
          SNISB - Sistema Nacional de Informações sobre Segurança de Barragens.
        </a>
      </Description>

      <Description>
        Você também pode obter o código fonte do projeto{' '}
        <a href="https://github.com/guuibayer/barragens" target="_blank">
          aqui
        </a>
        , além de sugerir novas ideias e apontar melhorias através das issues.
      </Description>
    </Container>
  )
}
