
import './App.css';
import GetApiDesempleo from './components/GetApiDesempleo';
import GetApiIndi from './components/GetApiIndi';
/* import GetApiChartkikOne from './components/GetApiChartkikOne'
import GetApiChartkikTwo from './components/GetApiChartikikTwo' */


function App() {
  return (
    <div className="App">
 <h1>Hola Mundo</h1>
     <GetApiIndi />
     <GetApiDesempleo />
     {/* <GetApiChartkikOne />
     <GetApiChartkikTwo /> */}
     
    </div>
  );
}

export default App;
