import { Container } from "react-bootstrap";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import Accordion from 'react-bootstrap/Accordion';

export default function Produtos() {
var produtos=    [
        {
            id: 1,
            produto: "Tênis de Corrida",
            descricao: "Este tênis de corrida é projetado para proporcionar conforto e suporte durante longas distâncias. Com uma sola leve e respirável, ele se adapta perfeitamente ao pé, garantindo uma corrida suave e eficiente. Ideal para corredores iniciantes e experientes, o modelo oferece amortecimento avançado que reduz o impacto nas articulações, permitindo que você corra por mais tempo sem sentir desconforto."
        },
        {
            id: 2,
            produto: "Bola de Futebol",
            descricao: "A bola de futebol é feita com materiais de alta qualidade, oferecendo durabilidade e desempenho em campo. Com um design aerodinâmico, ela garante controle e precisão em passes e chutes. Ideal para jogos recreativos ou competições, essa bola é perfeita para jogadores de todas as idades. Sua construção resistente suporta diferentes condições climáticas, mantendo a forma e a performance mesmo após longas horas de uso."
        },
        {
            id: 3,
            produto: "Raquete de Tênis",
            descricao: "A raquete de tênis possui um equilíbrio perfeito entre potência e controle, permitindo que os jogadores atinjam seu melhor desempenho. Fabricada com materiais leves e resistentes, ela proporciona uma ótima pegada e estabilidade durante os golpes. Ideal tanto para iniciantes quanto para profissionais, esta raquete é perfeita para treinos e partidas, ajudando os atletas a aprimorarem suas habilidades e técnicas no esporte."
        },
        {
            id: 4,
            produto: "Equipamento de Yoga",
            descricao: "O equipamento de yoga inclui um tapete antideslizante e blocos de apoio, essenciais para praticar diferentes posições com segurança e conforto. O tapete proporciona uma superfície acolchoada que ajuda a evitar lesões, enquanto os blocos oferecem suporte extra em posturas desafiadoras. Ideal para iniciantes e praticantes avançados, este conjunto melhora a flexibilidade, força e equilíbrio, permitindo uma prática mais profunda e relaxante, conectando mente e corpo."
        },
        {
            id: 5,
            produto: "Bicicleta de Montanha",
            descricao: "A bicicleta de montanha é ideal para aventuras em trilhas e terrenos acidentados. Com suspensão robusta e pneus largos, ela garante uma experiência de pedalada confortável e segura. Este modelo é projetado para enfrentar subidas íngremes e descidas rápidas, proporcionando controle total. Equipadas com múltiplas marchas, permite ao ciclista ajustar a dificuldade conforme necessário. Uma excelente escolha para quem busca diversão ao ar livre e exercícios de alta intensidade."
        }
    ]

    return <>
        <Menu />
        <Container>
            <Accordion defaultActiveKey="0">
                {produtos.map(item =>
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>
                            {item.produto}
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.descricao}
                        </Accordion.Body>
                    </Accordion.Item>


                )}
            </Accordion>
        </Container>
        <Footer />
    </>
}