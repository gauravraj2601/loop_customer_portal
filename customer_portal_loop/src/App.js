import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Container from './components/Body/Container';
import Banner from './components/Body/WelcomeBanner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Container />
      <Box bg={"red"}>
        hello
      </Box>
        <h1>Loop Customer Portal</h1>
    </div>
  );
}

export default App;
