import { useState } from "react"
import { Box } from "@mui/material"
import { Exercises, HeroBanner, SearchExercises } from "../components"

const Home = () => {
  const [ exercises, setExercises ] = useState([])
  const [ bodyPart, setBodyPart ] = useState("all");

  console.log(bodyPart)

  return (
    <Box>
      {/* HeroBanner */}
      <HeroBanner />
      {/* SearchExercises */}
      <SearchExercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      {/* Exercises */}
      <Exercises exercises={exercises} bodyPart={bodyPart} setExercises={setExercises} />
    </Box>
  )
}

export default Home