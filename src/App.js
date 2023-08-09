import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import ModeButton from './components/modeButton';

function App() {
  
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="App">
      <Nav />
      <ModeButton />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
