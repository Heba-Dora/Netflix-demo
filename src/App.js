
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Row title= "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title= "Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title= "Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title= "Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title= "Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Row title= "Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
      <Row title= "Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Row title= "Documentaries" fetchUrl={requests.fetchDocumentaries} />
      
      
    </div>
  );
}

export default App;
