import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <div className='p-5 mx-auto'>
        <div className='grid grid-cols-2 gap-10'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
