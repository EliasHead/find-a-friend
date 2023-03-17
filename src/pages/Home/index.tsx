import { Container, Logo, Main } from './styles'

import logo from '../../assets/icons/dogLogo.svg'

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
        <div>Imagens cachorros</div>
      </Main>
    </Container>
  )
}
