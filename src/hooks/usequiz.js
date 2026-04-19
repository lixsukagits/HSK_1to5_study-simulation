import { useState, useCallback } from 'react'
import { generateQuiz } from '../utils/quizgenerator'
import { QUIZ_TYPES } from '../constants/quiztypes'

export function useQuiz(vocab = [], type = QUIZ_TYPES.HANZI_TO_INDO, count = 20) {
  const [questions, setQuestions] = useState([])
  const [current,   setCurrent]   = useState(0)
  const [answers,   setAnswers]   = useState([])
  const [finished,  setFinished]  = useState(false)
  const [started,   setStarted]   = useState(false)

  const start = useCallback(() => {
    const qs = generateQuiz({ kataList: vocab, pool: vocab, count, type })
    setQuestions(qs)
    setCurrent(0)
    setAnswers([])
    setFinished(false)
    setStarted(true)
  }, [vocab, type, count])

  const answer = useCallback((selectedJawaban) => {
    const q = questions[current]
    if (!q) return
    const correct   = q.jawaban === selectedJawaban
    const newAnswers = [...answers, { question: q, selectedJawaban, correct }]
    setAnswers(newAnswers)
    if (current + 1 >= questions.length) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
    }
    return correct
  }, [questions, current, answers])

  const reset = useCallback(() => {
    setStarted(false)
    setFinished(false)
    setQuestions([])
    setAnswers([])
    setCurrent(0)
  }, [])

  const score = answers.filter((a) => a.correct).length

  return {
    questions,
    current,
    answers,
    finished,
    started,
    currentQuestion: questions[current] || null,
    score,
    total: questions.length,
    start,
    answer,
    reset,
  }
}
