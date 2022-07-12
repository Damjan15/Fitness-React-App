import { useState } from "react"
import { Box } from "@mui/material"
import { HeroBanner, SearchExercises } from "../components"

const Home = () => {
  const [ exercises, setExercises ] = useState([])
  const [ bodyPart, setBodyPart ] = useState("all");

  return (
    <Box>
      {/* HeroBanner */}
      <HeroBanner />
      {/* SearchExercises */}
      <SearchExercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      {/* Exercises */}
    </Box>
  )
}

export default Home