import Navigation from './components/navigation/navigation';
import Landing from './sections/landing';
import AboutMe from './sections/about-me';
import Resume from './sections/resume';
import Project from './sections/projects';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <main className='main'>
        <AboutMe />
        <Resume />
        <Project />
      </main>
    </div>
  );
}

export default App;
