import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import "./index.css";
function App() {
  return (
    // we can use the normal div tag instead of the main tag below , it just works the same way , for the sake of understanding the semantic markup I have used the main tag
    <main className="container">  
      <Header />
      <Menu />
      <Footer />
    </main>
   
  );
}
export default App;
