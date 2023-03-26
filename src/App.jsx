import { useState ,useEffect } from 'react'
import viteLogo from '/vite.svg'

function App() {
  const myQuiz = [
/*   {  damıtık : 'hip place' , sacid : 'uğrak mekan' },
    {  damıtık : 'put on airs' , sacid : 'havalara girmek' },
    {  damıtık : 'hip place' , sacid : 'uğrak mekan' },
    {  damıtık : 'snot-nosed' , sacid : 'sümüklü' },
    {  damıtık : 'bread and butte' , sacid : 'ekmek kapısı' },
    {  damıtık : 'af / as fuck' , sacid : 'deli gibi' },
    {  damıtık : 'be on tenterhooks' , sacid : 'diken üstünde olmak' },
    {  damıtık : 'chat about the weather' , sacid : 'havadan sudan konuşmak' }
*/    
    {  damıtık : 'bubble' , sacid : 'baloncuk' },
    {  damıtık : 'civil' , sacid : 'sivil' },
    {  damıtık : 'coal' , sacid : 'kömür' },
    {  damıtık : 'bread' , sacid : 'ekmek' },
    {  damıtık : 'butter' , sacid : 'tereyağı' },
    {  damıtık : 'milk' , sacid : 'süt' }
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

  const handleChange = (e) => {
      setInput(e.target.value)
  }
  const handleSubmit = (e) => {
      e.preventDefault()

      if(input.toLowerCase() === myQuiz[current].sacid) {
          setStreak(streak + 1)
          setMaxStreak(streak + 1 > maxStreak ? streak + 1 : maxStreak)
          setError(false)

          localStorage.setItem('maxStreat',streak + 1 > maxStreak ? streak + 1 : maxStreak)
          localStorage.setItem('streat', streak +1)
      }
      else{
        const h = myQuiz[current].damıtık
        const r = myQuiz[current].sacid
        setError('Wrong! the correct answer for ${h} is ${r} ')
        setStreak(0)
        localStorage.setItem('streak', 0)
      }

      setInput('')
      setRandomMyQuiz()
  } 

  useEffect(() => {
    setRandomMyQuiz()
    setStreak(parseInt(localStorage.getItem('streak')) || 0)
    setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
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
          <p> {myQuiz[current].damıtık} </p>
        </div>
        <div className='submit'>
          <form onSubmit="{handleSubmit}" className='submitForm'> 
            <input type="text" value={input} onChange={handleChange} className='input'/>
          </form>
        </div>

        {error && 
            <div className='error'> 
              <p> {error} </p>
            </div>
        }
      </div>
     
    </div>
  )
}

export default App;