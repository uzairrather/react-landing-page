import { useEffect, useState } from "react"
// import background from "./Components/Background/background";
import Background from "./Components/Background/background";
import Navbar from "./Components/Navbar/navbar";
import Main from "./Components/Main/main"; 

//NMP/nmp means;-we download folder then use &&& NPX/npx means:-we donnot download we diesct use it  ;

 const App = () => {
 
  let mainData = [
    {text1:"The mountains are calling, and I must go.",text2:"What are men to rocks and mountains?"},
    {text1:"Our peace shall stand as firm as rocky mountains",text2:"Each fresh peak ascended teaches something"},
    {text1:"Life's a bit like mountaineering—never look down",text2:"A path is a prior interpretation of the best way to traverse"},
  ]
  const [mainCount,setMainCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=> {
      setMainCount((count)=>{return count===2?0:count+1})
    }, 4000);
  },[])

  return (
    <div>
      
       <Background playStatus={playStatus} mainCount={mainCount}/>
       <Navbar/>
       <Main
       setPlayStatus={setPlayStatus}
       mainData={mainData[mainCount]}
       mainCount={mainCount}
       setMainCount={setMainCount}
       playStatus={playStatus}
       />
    </div>
  )
}


export default App
    
