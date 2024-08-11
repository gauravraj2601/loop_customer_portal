import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Nav/Navbar';
import Container from './components/Body/Container';
import Banner from './components/Body/WelcomeBanner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Container />
    </div>
  );
}

export default App;
