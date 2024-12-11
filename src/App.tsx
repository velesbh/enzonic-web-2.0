import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { News } from './components/News'
import { AboutUs } from './components/AboutUs'
import { Team } from './components/Team'
import { Footer } from './components/Footer'
import { BackgroundAnimation } from './components/BackgroundAnimation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TermsOfService } from './components/TermsOfService'

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <BackgroundAnimation />
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="space-y-0">
              <Hero />
              <Services />
              <News />
              <AboutUs />
              <Team />
            </main>
          } />
          <Route path="/tos" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
