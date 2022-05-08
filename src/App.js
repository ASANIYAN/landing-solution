import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import About from './About/About';
import Footer from './assests/Footer/Footer';
import Navbar from './assests/Navbar/Navbar';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import useFetch from './hooks/useFetch';

function App() {

  const {data: contents, isPending, error} = useFetch('http://localhost:8000/contents');

  return (
    <div className="App">
      <div className="container mx-auto">
        <Navbar />
        <Router>
          <Routes>
            <Route path='/' element={<Home contents={contents} isPending={isPending} error={error} /> } />
            <Route path='/about' contents={contents} isPending={isPending} error={error} element={<About /> } />
            <Route path='/contact' contents={contents} isPending={isPending} error={error} element={<Contact /> } />
          </Routes>
        </Router>
      </div>
        <Footer />
    </div>
  );
}

export default App;
