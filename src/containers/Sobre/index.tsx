import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
  <Paragrafo tipo="secundario">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Quaerat officia sunt odio eligendi veritatis animi assumenda.
     Cum voluptates doloribus fugit placeat temporibus,
     nihil nulla quas officiis ratione tenetur animi repellat.
  </Paragrafo>
  <GithubSecao>
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=wgroliveira&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=wgroliveira&layout=compact&langs_count=7&theme=dracula"/>
  </GithubSecao>
  </section>
)

export default Sobre
