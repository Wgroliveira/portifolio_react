import styled from  "styled-components";

export const Card = styled.div`
border: 1px solid ${(props) => props.theme.corDaBorda};
padding: 16px;
border-radius: 12px;
`

export const LinkBotao = styled.a`
color: ${(props) => props.theme.corDeFundo};
font-size: 14px;
background-color: ${(props) => props.theme.cordeFundoBotao};
text-decoration: none;
padding: 8px;
display: inline-block;
margin-top: 24px;
border-radius: 12px;
cursor: pointer;

&:hover {
    background-color: #a1b1cc;
    color: ${(props) => props.theme.cordeFundoBotao}; /* Altera a cor do texto no hover */
    transition: background-color 0.3s ease, color 0.3s ease; /* Suaviza a transição */
  }
`;


export const LinkBotao2 = styled.a`
color: ${(props) => props.theme.corDeFundo};
font-size: 14px;
background-color: ${(props) => props.theme.cordeFundoBotao};
text-decoration: none;
padding: 8px;
display: inline-block;
margin: 24px;
border-radius: 12px;
cursor: pointer;
&:hover {
    background-color: #a1b1cc;
    color: ${(props) => props.theme.cordeFundoBotao}; /* Altera a cor do texto no hover */
    transition: background-color 0.3s ease, color 0.3s ease; /* Suaviza a transição */
  }
`;

// Novos estilos para as tags
export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
  padding: 0;
  list-style: none;
`;

export const Tag = styled.li`
  background-color: #f57f17;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  text-transform: uppercase;
`;
