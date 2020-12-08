
import GetApiDesempleo from './components/GetApiDesempleo';
import GetApiIndi from './components/GetApiIndi';
/* import GetApiChartkikOne from './components/GetApiChartkikOne'
import GetApiChartkikTwo from './components/GetApiChartikikTwo' */


function App() {
  return (
    <div className="App">

     <GetApiIndi />
     <GetApiDesempleo />
     {/* <GetApiChartkikOne />
     <GetApiChartkikTwo /> */}
     
    </div>
  );
}

export default App;
