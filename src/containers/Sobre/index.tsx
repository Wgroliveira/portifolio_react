import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <div style={{ textAlign: 'justify' }}> {/* Adicionando um div com estilo de justificação */}
      <Paragrafo tipo="secundario">
        Sou desenvolvedor web formado pela Universidade Pitágoras Unopar Anhanguera. Realizo também curso em Desenvolvimento Full Stack Python pela Ebac e React pela Udemy.
        Minha trajetória profissional esteve predominantemente na área comercial, especificamente no setor varejista. Ao longo dos anos, adquiri valiosa experiência trabalhando em renomadas empresas, como Magazine Luiza e Eletrozema. Essas experiências contribuíram significativamente para meu amadurecimento e crescimento profissional.
        Estou em um processo de transição de carreira, dedicando-me intensivamente aos estudos e buscando adquirir conhecimento na área em que pretendo atuar.
        Possuo características como resiliência, adaptabilidade a diferentes ambientes e situações, gosto do trabalho em equipe e disposição para enfrentar desafios pessoais. Sou colaborativo, acreditando firmemente que a cooperação impacta diretamente e positivamente nos resultados finais. Valorizo a organização, seguindo diretrizes e procedimentos para alcançar eficiência em minhas atividades.
      </Paragrafo>
    </div>
  <GithubSecao>
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=wgroliveira&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=wgroliveira&layout=compact&langs_count=7&theme=dracula"/>
  </GithubSecao>
  </section>
)

export default Sobre
