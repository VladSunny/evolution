import { Container, Zone } from './style';
import { Stats } from './components/Stats';

function App() {
    return (
        <Container>
            <Zone width={20}>
                <Stats />
            </Zone>

            <Zone width={60}></Zone>
            <Zone width={20}></Zone>
        </Container>
    );
}

export default App;
