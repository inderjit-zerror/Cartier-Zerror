import mainVideo from "/main-video.mp4";
import img1 from '/img/imgBg1.webp'
import img2 from '/img/imgBg2.webp'
import img3 from '/img/imgBg3.webp'

const BackVideo = () => {

  const ImgArr = [img1,img2,img3]

  return (
    <>
          <div className="w-full h-screen fixed top-0 BossVideo left-0 z-10">
            <video
              muted
              loop
              autoPlay
              className="w-full h-full object-cover"
              src={mainVideo}
            ></video>
          </div>

          {/* img1 */}
          <div className="w-full h-screen BossImg1 fixed top-0 left-0 z-9">
            <img className="w-full h-full object-cover" src={ImgArr[0]} alt="" />
          </div>

          {/* img2 */}
          <div className="w-full h-screen BossImg2 fixed top-0 left-0 z-8">
            <img className="w-full h-full object-cover" src={ImgArr[1]} alt="" />
          </div>

          {/* img3 */}
          <div className="w-full h-screen BossImg3 fixed top-0 left-0 z-7">
            <img className="w-full h-full object-cover" src={ImgArr[2]} alt="" />
          </div>

    </>
  );
};

export default BackVideo;
