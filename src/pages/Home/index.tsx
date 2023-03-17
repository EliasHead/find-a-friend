import { Container, Footer, Logo, Main } from './styles'

import logo from '../../assets/icons/dogLogo.svg'
import capa from '../../assets/images/capaDogs.png'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function Home() {
  // function handleSearchPets() {
  //   // TO DO
  // }

  // function handleChangeState() {
  //   // TO DO
  // }

  // function handleChangeCity() {
  //   // TO DO
  // }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="" />
        <span>
          <strong>FindAFriend</strong>
        </span>
      </Logo>
      <Main>
        <p>Leve a felicidade para o seu lar</p>
        <img src={capa} alt="" width="592" height="305" />
      </Main>
      <Footer>
        <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
        <div>
          <span>Busque um amigo:</span>
          <select name="state" id="state"></select>
          <select name="city" id="city"></select>
          <button>
            <MagnifyingGlass size={22} weight="bold" />
          </button>
        </div>
      </Footer>
    </Container>
  )
}
