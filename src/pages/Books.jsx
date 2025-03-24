import React, { useEffect, useState } from 'react'
import PagesLayout from '../layout/PagesLayout'
import { apiGetAllAdverts } from '../services/adverts'

const Books = () => {
const [isLoading, setIsLoading] = useState(false)

const fetchAds = async () => {
  setIsLoading(true)
  try {
    const res = await apiGetAllAdverts()
    console.log(res)
  } catch (error) {
    console.log(error)
  } finally {
    setIsLoading(false)
  }
}

useEffect(()=>{
  fetchAds()
}, [])

//useEffect is used to manage callback functions

  return (
    <PagesLayout>
      <div>Books</div>
    </PagesLayout>

    //this page is being used as an example of adverts (all adverts being displayed)
  )
}

export default Books