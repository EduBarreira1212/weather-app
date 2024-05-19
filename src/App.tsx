import FiveDaysWeather from './components/FiveDaysWeather';
import Header from './components/Header';
import Input from './components/Input';
import TodayWeather from './components/TodayWeather';

function App() {
  return (
    <div>
      <Header/>
      <Input/>
      <TodayWeather/>
      <FiveDaysWeather/>
    </div>
  );
}

export default App;
