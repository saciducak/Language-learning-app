import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  const myQuiz = [
    {  damıtık : 'hip place' , sacid : 'uğrak mekan' },
    {  damıtık : 'put on airs' , sacid : 'havalara girmek' },
    {  damıtık : 'hip place' , sacid : 'uğrak mekan' },
    {  damıtık : 'snot-nosed' , sacid : 'sümüklü' },
    {  damıtık : 'bread and butte' , sacid : 'ekmek kapısı' },
    {  damıtık : 'af / as fuck' , sacid : 'deli gibi' },
    {  damıtık : 'be on tenterhooks' , sacid : 'diken üstünde olmak' },
    {  damıtık : 'chat about the weather' , sacid : 'havadan sudan konuşmak' },   
  ]

  const[input, setInput] = useState('')
  const[current, setCurrent] = useState(0)

  const[streak, setStreak] = useState(0)
  const[maxStreak, setMaxStreak] = useState(0)


  const[error, setError] = useState(false)

  const setRandomMyQuiz = () => {
      const randomIndex = Math.floor(Math.random() * myQuiz.length)
      setCurrent(randomIndex)
  }

  const handleChange = evt => {
      setInput(evt.target.value)
  }
  const handleSubmit = evt => {
      evt.preventDefault()

      if(input === myQuiz[current].sacid) {
          setStreak(streak + 1)
          setMaxStreak(Math.max(streak,maxStreak))
          setError(false)

          localStorage.setItem('maxStreat', Math.max(streak,maxStreak))
          localStorage.setItem('streat', streak +1)
      }
      else{
        setStreak(0)
        setError('Wrong! the correct answer for ${myQuiz[current].damıtık} is ${myQuiz[current].sacid} ')

        localStorage.setItem('streak', 0)
      }
      setInput('')
      setRandomMyQuiz()
  } 

  useEffect(() => {
    setRandomMyQuiz()
    setStreak(localStorage.getItem('streak') || 0)
    setMaxStreak(localStorage.getItem('maxStreak') || 0)
  }, [])

  return (
    <div className="temelDiv">
      <div>
        <header className="header">
          <h1>
            Sacid's Damıtık Quiz
          </h1>
          <p> 
            {streak}/{maxStreak}
          </p>
        </header>
        <div className='textSide'>
          {myQuiz[current].damıtık}
        </div>
        <div className='submit'>
          <form onSubmit="{handleSubmit}" className='submitForm'> 
            <input type="text" value={input} onChange={handleChange} className='input'/>
          </form>
        </div>
      </div>
     
    </div>
  )
}

export default App;