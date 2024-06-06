import { getAllJokes } from "../../services/jokesServices"
import { useEffect, useState } from "react"

function Jokes() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    const jokesRequest = async () => {
      const result = await getAllJokes()
      setJokes(result)
    }
    jokesRequest()
  },[])
  console.log(jokes)
  return (
    <div>
      {
        jokes.map((joke) => {
          return <h1 key={joke.id}>{joke.value}</h1>
        })
      }
    </div>
  )
}

export default Jokes