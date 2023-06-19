import Movies from './movies';
import data from './data';
import './movies.css';

function Map() {
  return (
    <div className="App">
      <h1>Details</h1>
      <div className='main'>
        {
          data.map((element) => {
            return (
                <Movies
                  key={element.idMeal}
                  idMeal={element.idMeal}
                  strMealThumb={element.strMealThumb}
                  strMeal={element.strMeal}
                  strArea={element.strArea}
                  strCategory={element.strCategory}
                />
            )
          })
        }
        
    
      </div>
    </div>
  );
}

export default Map;
