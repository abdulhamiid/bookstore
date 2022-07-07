import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <Book title="The Hunger Games" author="Suzanne Collins" percentageCompleted={64} currentChapter={17} />
      <Book title="Dune" author="Frank Herbert" percentageCompleted={8} currentChapter={3} />
      <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" percentageCompleted={0} currentChapter="Introduction" />
    </div>
  );
}

export default App;
