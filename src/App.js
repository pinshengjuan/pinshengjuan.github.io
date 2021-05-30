// import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import resumeData from './resumeData.json'

function App() {
  return (
    <div className="App">
    <Header data={resumeData.personalinfo}/>
    <About data={resumeData.personalinfo}/>
    <Resume data={resumeData.resume}/>
    {/* <Portfolio data={resumeData.portfolio}/> */}
    <Footer data={resumeData.personalinfo}/>
  </div>
  );
}

export default App;
