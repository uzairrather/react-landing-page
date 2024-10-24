
import './background.css'
import video  from '../../Assets/video.mp4'
import image1 from '../../Assets/image1.jpg'
import image2 from '../../Assets/image2.jpg'
import image3 from '../../Assets/image3.jpg'

 const background = ({ playStatus, mainCount }) => {
    if (playStatus){
        return (
            <video className='background fade-in' autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video>
        )
    }
    else if(mainCount===0){
        return <img src={image1} className='background fade-in' alt="" />
    }
    else if(mainCount===1){
        return <img src={image2} className='background fade-in' alt="" />
    }
    else if(mainCount===2){
        return <img src={image3} className='background fade-in' alt="" />
    }
 }

export default background
