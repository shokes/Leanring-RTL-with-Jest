import './App.css';
import Container from 'react-bootstrap/Container';
import SummaryForm from './pages/summary/SummaryForm';
import OrderEntry from './pages/entry/OrderEntry.jsx';
import { OrderDetailsProvider } from './contexts/OrderDetails';

function App() {
  return (
   <Container>
    <OrderDetailsProvider>
      <OrderEntry/>
    </OrderDetailsProvider>
   </Container>
  );
}

export default App;
