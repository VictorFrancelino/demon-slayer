import './App.css'
import Header from "./components/Header"
import Banner from "./components/Banner"
import Characters from "./components/Characters"
import Hashiras from "./components/Hashiras"
import Onis from "./components/Onis"
import Kizuki from "./components/Kizuki"
import Muzan from "./components/Muzan"
import Footer from "./components/Footer"

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <Characters />
      <hr />
      <Hashiras />
      <hr />
      <Onis />
      <hr />
      <Kizuki />
      <hr />
      <Muzan />
      <Footer />
    </main>
  )
}

export default App
