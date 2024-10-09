import Projeto from "../../components/Projeto"
import Titulo from "../../components/Titulo"
import { Lista } from './styles'

// Dados dos projetos
const projetos = [
  {
    nome: 'Clone Disney Plus',
    tags: ['html5', 'css3', 'javascript', 'gulp'],
    urlGitHub: 'https://github.com/Wgroliveira/clonedisney_plus',
    urlVercel: 'https://clonedisney-plus-52ae.vercel.app/',
  },
  {
    nome: 'Shoes & Shoes',
    tags: ['html5', 'css3',],
    urlGitHub: 'https://github.com/Wgroliveira/shoes_shoes',
    urlVercel: 'https://shoes-shoes.vercel.app/',
  },
  {
    nome: 'Aniversário de carnaval',
    tags: ['html5', 'css3', 'javascript','parcel'],
    urlGitHub: 'https://github.com/Wgroliveira/aniversario_carnaval',
    urlVercel: 'https://aniversario-carnaval.vercel.app/',
  },
  {
    nome: 'Finans',
    tags: ['html5', 'css3'],
    urlGitHub: 'https://github.com/Wgroliveira/finans',
    urlVercel: 'https://finans-wheat.vercel.app/',
  },
  {
    nome: 'Clone Spotify',
    tags: ['html5', 'css3', 'bootstrap'],
    urlGitHub: 'https://github.com/Wgroliveira/clone_spotify',
    urlVercel: 'https://clone-spotify-lovat-nine.vercel.app/',
  },
  {
    nome: 'GranFinnale',
    tags: ['html5', 'css3', 'bootstrap'],
    urlGitHub: 'https://github.com/Wgroliveira/gran_finnale',
    urlVercel: 'https://gran-finnale.vercel.app/',
  },
  {
    nome: 'E-Play',
    descricao: 'Site de jogos',
    tags: ['react', 'typescript', 'styled components', 'redux-toolkit', 'router-dom'],
    urlVercel: 'https://eplay-one.vercel.app/',
  },
  {
    nome: 'Museu Nacional',
    tags: ['html5', 'css3', 'javascript'],
    urlGitHub: 'https://github.com/Wgroliveira/museu_nacional',
    urlVercel: 'https://museu-nacional-teal.vercel.app/',
  },
  // Adicione mais projetos conforme necessário
]

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      {projetos.map((projeto, index) => (
        <li key={index}>
          <Projeto
            nome={projeto.nome}
            tags={projeto.tags || []}
            urlGitHub={projeto.urlGitHub || '#'}
            urlVercel={projeto.urlVercel || '#'}
          />
        </li>
      ))}
    </Lista>
  </section>
)

export default Projetos;
