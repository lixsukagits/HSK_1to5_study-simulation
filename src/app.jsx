import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Home from './pages/home'
import { FlashCards }  from './pages/flashcards'
import { NotFound }    from './pages/notfound'
import { Progress }    from './pages/progress'
import { Quiz }        from './pages/quiz'
import { Settings }    from './pages/settings'
import { Vocab }       from './pages/vocab'
import { StudyToday }  from './pages/studytoday'

export default function App() {
  return (
    <BrowserRouter basename="/hsk_1to5_study-simulation/">
      <Navbar />
      {/* sm:pt-[60px] → ruang navbar fixed desktop; pb-16 → ruang mobile bottom nav */}
      <main className="sm:pt-[60px] pb-16 sm:pb-0">
        <Routes>
          <Route path="/"             element={<Home />}       />
          <Route path="/study"        element={<StudyToday />} />
          <Route path="/vocab/:level" element={<Vocab />}      />
          <Route path="/flashcards"   element={<FlashCards />} />
          <Route path="/quiz"         element={<Quiz />}       />
          <Route path="/progress"     element={<Progress />}   />
          <Route path="/settings"     element={<Settings />}   />
          <Route path="*"             element={<NotFound />}   />
        </Routes>
      </main>
    </BrowserRouter>
  )
}