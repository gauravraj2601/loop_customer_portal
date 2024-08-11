import './App.css';
import Navbar from './components/Nav/Navbar';
import Container from './components/Body/Container';
import Banner from './components/Body/WelcomeBanner';
import Footer from './components/Footer/Footer';
import SubscriptionBanner from './components/Body/SubscriptionBanner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Container />
      <SubscriptionBanner />
      <Footer />
    </div>
  );
}

export default App;
