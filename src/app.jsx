import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Home from './pages/home'
import { FlashCards }   from './pages/flashcards'
import { NotFound }     from './pages/notfound'
import { Progress }     from './pages/progress'
import { Quiz }         from './pages/quiz'
import { Settings }     from './pages/settings'
import { Vocab }        from './pages/vocab'
import { StudyToday }   from './pages/studytoday'
import { Bookmarks }    from './pages/bookmarks'
import { Achievements } from './pages/achievements'
import { AchievementToast } from './components/ui/achievementtoast'
import { useAchievements } from './hooks/useachievements'
import { initTTS } from './utils/tts'

// Init TTS sekali saat app load
initTTS()

function AppContent() {
  const { newBadges, dismissBadges } = useAchievements()
  return (
    <>
      <Navbar />
      <main className="sm:pt-[60px] pb-16 sm:pb-0">
        <Routes>
          <Route path="/"              element={<Home />}         />
          <Route path="/study"         element={<StudyToday />}   />
          <Route path="/vocab/:level"  element={<Vocab />}        />
          <Route path="/flashcards"    element={<FlashCards />}   />
          <Route path="/quiz"          element={<Quiz />}         />
          <Route path="/progress"      element={<Progress />}     />
          <Route path="/achievements"  element={<Achievements />} />
          <Route path="/bookmarks"     element={<Bookmarks />}    />
          <Route path="/settings"      element={<Settings />}     />
          <Route path="*"              element={<NotFound />}     />
        </Routes>
      </main>
      <AchievementToast achievements={newBadges} onDismiss={dismissBadges} />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/hsk_1to5_study-simulation/">
      <AppContent />
    </BrowserRouter>
  )
}