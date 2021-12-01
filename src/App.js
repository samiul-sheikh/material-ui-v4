import './App.css';
import BasicCard from './components/BasicCard';
import BasicMenuItem from './components/BasicMenuItem';
import ExploreGrid from './components/ExploreGrid';
import RadioButton from './components/RadioButton';

function App() {
  return (
    <div>
      <ExploreGrid />
      <BasicCard />
      {/* <RadioButton /> */}
      <BasicMenuItem />
    </div>
  );
}

export default App;
