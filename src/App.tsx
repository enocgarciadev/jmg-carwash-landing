import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProposition from './components/ValueProposition'
import ServicesMenu from './components/ServicesMenu'
import LocationHours from './components/LocationHours'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <ValueProposition />
      <ServicesMenu />
      <LocationHours />
      <Footer />
    </div>
  )
}

export default App