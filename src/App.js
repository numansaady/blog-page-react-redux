import './App.css';
import BlogContainer from './components/BlogContainer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import SectionHeader from './components/SectionHeader';

function App() {
  return (
    <div className="">

        <Navbar/>

        <Searchbar />

        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
              
                <SectionHeader />

                <BlogContainer />
                
            </div>
        </section>

        <Footer />
    </div>
  );
}

export default App;
