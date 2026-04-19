import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectedRoute }   from './components/auth/protectedroute'
import Navbar               from './components/layout/navbar'
import { AchievementToast } from './components/ui/achievementtoast'

import LoginPage     from './pages/login'
import RegisterPage  from './pages/register'

import Home              from './pages/home'
import { FlashCards }    from './pages/flashcards'
import { NotFound }      from './pages/notfound'
import { Progress }      from './pages/progress'
import { Quiz }          from './pages/quiz'
import { Settings }      from './pages/settings'
import { Vocab }         from './pages/vocab'
import { StudyToday }    from './pages/studytoday'
import { Bookmarks }     from './pages/bookmarks'
import { Achievements }  from './pages/achievements'
import { WordMatch }     from './pages/wordmatch'
import { StrokeOrder }   from './pages/strokeorder'
import { WritingPractice } from './pages/writingpractice'
import { initTTS }       from './utils/tts'

initTTS()

export default function App() {
  return (
    <BrowserRouter basename="/HSK_1to5_study-simulation/">
      <Routes>
        {/* Public */}
        <Route path="/login"    element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected */}
        <Route path="*" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <main className="sm:pt-[60px] pb-16 sm:pb-0">
                <Routes>
                  <Route path="/"               element={<Home />}             />
                  <Route path="/study"          element={<StudyToday />}       />
                  <Route path="/vocab/:level"   element={<Vocab />}            />
                  <Route path="/flashcards"     element={<FlashCards />}       />
                  <Route path="/quiz"           element={<Quiz />}             />
                  <Route path="/wordmatch"      element={<WordMatch />}        />
                  <Route path="/strokeorder"    element={<StrokeOrder />}      />
                  <Route path="/writing"        element={<WritingPractice />}  />
                  <Route path="/progress"       element={<Progress />}         />
                  <Route path="/achievements"   element={<Achievements />}     />
                  <Route path="/bookmarks"      element={<Bookmarks />}        />
                  <Route path="/settings"       element={<Settings />}         />
                  <Route path="*"               element={<NotFound />}         />
                </Routes>
              </main>
              <AchievementToast />
            </>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}