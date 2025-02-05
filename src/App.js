import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import About from './components/About/About';
import Curriculum from './components/Curriculum/Curriculum';
import Animacoes from './animacoes/Animacoes/Animacoes';
import Adm from './components/Adm/Adm';

function App() {
  

  const Layout = ({ children }) => (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );


  return (
    <Router> 
      <Routes>
        <Route path='/adm' element={<Adm/>} />
        <Route path='/' element={<Layout><Main /></Layout>} />
        <Route path='animacoes' element={<Layout><Animacoes caminhoApi={'animacao'} /> </Layout>} />
        <Route path='/quadrinhos' element={<Layout><Animacoes caminhoApi={'quadrinhos'} /> </Layout>} />
        <Route path='/sketchbook' element={<Layout><Animacoes caminhoApi={'sketchbook'} /> </Layout>} />
        <Route path='/ilustracoes' element={<Layout><Animacoes caminhoApi={'ilustracoes'} /> </Layout>} />
        <Route path='/about' element={<Layout><About /> </Layout>} />
        <Route path='/curriculo' element={<Layout><Curriculum /> </Layout>} />
      </Routes>
      
    </Router>

  );
}

export default App;
