import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from "@/styles/Navbar.module.css"
export default function Menu() {
  return (
    <Container>
      <Navbar expand="sm" className={` bg-dark ${styles.navGradiente} navbar-dark px-3 m-0 border border-dark border-5 rounded-top rounded-5`}>
        <Navbar.Brand href="/">6A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
            <Nav.Link href="/promessa">Promessa</Nav.Link>
            <Nav.Link href="/pesportes">P.esportes</Nav.Link>
            <Nav.Link href="/cardprodutos">Card Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
// import styles from '@/styles/Navbar.module.css' {`${styles.navgradiente}