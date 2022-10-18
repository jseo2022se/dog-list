import { useState, useEffect } from 'react'

export default function ShowDog() {
  
  let [dog, setDog] = useState({})

  const getDog = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
      const data = await response.json()
      setDog(data)
    } catch(e) {
      console.log(e)
   }
  }

  useEffect(() => {
    getDog()
  }, [])
  
  return (
    <div>
      <img src={dog.message} alt="dog" />
    </div>
  )
}