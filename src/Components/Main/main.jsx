import './main.css'
import arrow_btn from '../../Assets/arrow_btn.png'
import play_icon from '../../Assets/play_icon.png'
import pause_icon from '../../Assets/pause_icon.png'

 const main = ({mainData, setMainCount, mainCount, setPlayStatus, playStatus}) => {
  return (
    <div className='main'>
        <div className="main-text">
            <p>{mainData.text1}</p>
            <p>{mainData.text2}</p>
        </div>
        <div className="main-explore">
            <p>Discover new features</p>
            <img src={arrow_btn} alt=""  width="50px" height="50px" />
        </div>
        <div className="main-dot-play">
            <ul className='main-dots'>
                <li onClick={() => setMainCount(0)} className={mainCount===0?"main-dot red":"main-dot"}></li>
                <li onClick={() => setMainCount(1)} className={mainCount===1?"main-dot red":"main-dot"}></li>
                <li onClick={() => setMainCount(2)} className={mainCount===2?"main-dot red":"main-dot"} ></li>
            </ul>
            
            <div className="main-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
                <p>Watch the video</p>
            </div>
        </div>
    </div>
    
  )
}

export default main