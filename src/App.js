
import './App.css';
import Card from './components/Card';
import useFetch from './services/Api';

function App() {


  const { ships, pending } = useFetch();


  return (

    <div className="App">

      <h1 className='title'>Star Wars SpaceShips</h1>

      {pending && <div>Loading... </div>}

      <div>

        {
          ships

          &&

          ships.results.map((ships2, index) => {

            return <Card key={index} ships={ships2}/>

          })

        }

      </div>
      
    </div>

  );

}

export default App;
