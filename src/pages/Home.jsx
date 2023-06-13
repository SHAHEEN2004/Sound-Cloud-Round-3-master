import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

const Home = () => {
    // const{isLoading,allLists}=useSelector((store)=>store.playlist)
    const isLoading=true

  return (
    <div style={{minHeight:"100vh"}} className="bg-slate-900">
      {isLoading && <Loader/> }
      <ReactPlayer
        url="https://api.soundcloud.com/tracks/193001414"
        width="100vw"
        height="70vh"
        controls
        onBuffer={<Loader/>}
      />
    </div>
  )
}

export default Home
