import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Home from './pages/home'
import {
  Vocab,
  Quiz,
  FlashCards,
  Progress,
  Settings,
  NotFound,
} from './pages/index.jsx'

export default function App() {
  return (
    <BrowserRouter basename="/hsk-belajar">
      <Navbar />

      {/* Padding top untuk desktop (navbar fixed), padding bottom untuk mobile */}
      <main className="sm:pt-14 pb-16 sm:pb-0">
        <Routes>
          <Route path="/"              element={<Home />}       />
          <Route path="/vocab/:level"  element={<Vocab />}      />
          <Route path="/flashcards"    element={<FlashCards />} />
          <Route path="/quiz"          element={<Quiz />}       />
          <Route path="/progress"      element={<Progress />}   />
          <Route path="/settings"      element={<Settings />}   />
          <Route path="*"              element={<NotFound />}   />
        </Routes>
      </main>
    </BrowserRouter>
  )
}