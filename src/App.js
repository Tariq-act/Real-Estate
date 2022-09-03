import './App.css';
import Navigation from './components/navigation/navigation.component';
import { Search } from './components/Search/search.component';

const Banner = ({ purpose }) => {
  return <div className='flex'>{purpose}</div>;
};

function App() {
  return (
    <>
      <Navigation />
      <div className='container'>
        <Search />
      </div>
    </>
  );
}

export default App;
