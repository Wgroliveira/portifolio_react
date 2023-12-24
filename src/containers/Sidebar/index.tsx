import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema,SidebarContainer } from "./styles"

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Wagner Antônio</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Wgroliveira
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
