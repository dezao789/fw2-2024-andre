import { Container } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";

export default function Pesportes(){
    return <>
    <Menu/>
    <Container>
        <Container className="border border-info rounded-pill text-center col-sm-6">
            Lista de Produtos de Esportes
            </Container>
        <Container>
            Os Produtos
        </Container>
    </Container>
    <Footer/>
    </>
}