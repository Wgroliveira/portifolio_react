
import Titulo from "../Titulo";
import { Card, LinkBotao, LinkBotao2, TagsList, Tag } from "./styles";

// Definindo a interface para as props
interface ProjetoProps {
  nome: string;
  tags: string[];
  urlGitHub: string;
  urlVercel: string;
}

const Projeto = ({ nome, urlGitHub, urlVercel, tags }: ProjetoProps) => (
  <Card>
    <Titulo>{nome}</Titulo>
    {/* Aqui inserimos a lista de tags */}
    <TagsList>
      {tags.map((tag: string, index: number) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </TagsList>

    <LinkBotao href={urlGitHub} target="_blank" rel="noopener noreferrer">
      Github
    </LinkBotao>
    <LinkBotao2 href={urlVercel} target="_blank" rel="noopener noreferrer">
      Vercel
    </LinkBotao2>

  </Card>
)

export default Projeto;
