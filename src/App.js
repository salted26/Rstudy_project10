import './App.css';
import { Container, Row, Col} from 'react-bootstrap'
import ContactList from "./componenet/ContactList";
import ContactForm from "./componenet/ContactForm";

function App() {
  return (
    <div className="App">
        <h1>Phone Book</h1>
        <Container>
            <Row>
                <Col>
                    <ContactForm />
                </Col>
                <Col>
                    <ContactList />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
