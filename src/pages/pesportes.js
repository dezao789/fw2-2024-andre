import { Container, Table } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";

export default function Pesportes({produtos}) {
    return <>
        <Menu />
        <Container>
            <Container className="border border-info rounded-pill text-center col-sm-6">
                Lista de Produtos de Esportes
            </Container>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id dos produtos</th>
                            <th>Produto</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(daleratao =>  
                        <tr>
                            <td>{daleratao.id}</td>
                            <td>{daleratao.titulo}</td>
                            <td>{daleratao.categoria}</td>
                            <td>{daleratao.descricao}</td>
                            <td>{daleratao.preco}</td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </Container>
        <Footer />
    </>
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://fw2-2024-andre.vercel.app/api/produtos/data')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { produtos: repo } }
  }
