import {
  Categories,
  Delivery,
  Featured,
  Meal,
  TopNav,
  TopPicks,
  NewsLetter,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
