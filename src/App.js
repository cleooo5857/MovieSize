import requests from "./API/requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>

      <Row
        title="NEXFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        />
        <Row
        title="Trending Now"
        id="TN"
        fetchUrl={requests.fetchTrending}
        />
        <Row
        title="Top Rated"
        id="TR"
        fetchUrl={requests.fetchTopRated}
        />
        <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
        />
        <Row
        title="Comedy Movies"
        id="Cm"
        fetchUrl={requests.fetchComedyMovies}
        />
        <div >주진철 병신같은색기</div>
    </div>
  );
}

export default App;
