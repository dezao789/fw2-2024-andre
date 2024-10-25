import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";
import { Container } from "react-bootstrap";

export default function Promessa() {
const [pao, setpao] = useState("")
    setTimeout(() => {
        document.title = "Promessa é Divida";
        setpao("é uma dívida");
    }, 4000);
    return <>
        <Menu />
        <Container>
            Promessa {pao==="" ? "<carregando>":pao}
        </Container>
        <Footer />
    </>
}