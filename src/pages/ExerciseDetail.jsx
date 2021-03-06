import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData"
import { Detail, ExerciseVideos, SimilarExercises } from "../components"


const ExerciseDetail = () => {
  const [ exerciseDetail, setExerciseDetail ] = useState({})
  const [ exerciseVideos, setExerciseVideos ] = useState([])
  const { id } = useParams()
  console.log(exerciseVideos)

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents)
    }

    fetchExercisesData()
  }, [ id ])


  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
    </div>
  )
}

export default ExerciseDetail