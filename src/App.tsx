import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './pages/Intro';

import './styles/global.scss';
import './styles/variables.scss';

function App() {
  return (
    <div className="wrap">
      <Header />
      <main className="container">
        <Intro />
      </main>
      <Footer />
    </div>
  );
}

export default App;
