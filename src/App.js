import NavBar from './pages/Navbar';
import Wedding from './pages/Wedding';
import Details from './pages/Details';
import Gallery from './pages/Gallery';
import Transportation from './pages/Transportation';
import Footer from './pages/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <section className='section'>
        <Wedding/>
      </section>
      <section className='section'>
        <Details/>
      </section>
      <section className='section'>
        <Gallery/>
      </section>
      <section className='section'>
        <Transportation/>
      </section>
      <Footer />
    </>
  );
}

export default App;
