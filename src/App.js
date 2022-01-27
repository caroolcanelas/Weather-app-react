import Form from "./Form";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <Header />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
