import mainVideo from '/main-video.mp4'

const BackVideo = () => {
  return (
    <>
      <div className="w-full h-screen fixed top-0 left-0 z-10">
        <video muted loop autoPlay className='w-full h-full object-cover' src={mainVideo}></video>
      </div>
    </>
  )
}

export default BackVideo
