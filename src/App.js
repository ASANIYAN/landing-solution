import {HashRouter, Routes, Route} from 'react-router-dom';
import About from './About/About';
import Footer from './assests/Footer/Footer';
import Navbar from './assests/Navbar/Navbar';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import useFetch from './hooks/useFetch';

function App() {

  const {data: contents, isPending, error} = useFetch('https://my-json-server.typicode.com/ASANIYAN/landing-json/contents');

  return (
    <HashRouter>
      <div className="App">
        <div className="container mx-auto">
          <Navbar />
            <Routes>
              <Route path='/' element={<Home contents={contents} isPending={isPending} error={error} /> } />
              <Route path='/about' contents={contents} isPending={isPending} error={error} element={<About /> } />
              <Route path='/contact' contents={contents} isPending={isPending} error={error} element={<Contact /> } />
            </Routes>
        </div>
          <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
