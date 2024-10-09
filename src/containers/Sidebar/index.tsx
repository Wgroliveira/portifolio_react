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
      <Descricao tipo="principal" fontSize={18}>
        Desenvolvedor front-end
      </Descricao>
      <Paragrafo tipo="secundario" fontSize={16}>
        Contato
      </Paragrafo>
      <Paragrafo tipo="principal" fontSize={14}>
        Email: wagnerwgroliveira@gmail.com
      </Paragrafo>
      <Paragrafo tipo="principal" fontSize={14}>
        Telefone: (35) 99141-3806
      </Paragrafo>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
