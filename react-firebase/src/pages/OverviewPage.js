import AbaCard from "../components/Card";

export default function OverviewPage(){
    return(
        <>
              <h1 style={{textAlign: "center"}}>AbaStories</h1>

<div className='container'>

  <div className='flex-item'>
    <AbaCard/>
  </div>
  
  <div className='flex-item'>
    <AbaCard/>
  </div>
  
  <div className='flex-item'>
    <AbaCard/>
  </div>
  

</div>

<h1 style={{textAlign: "center"}}>AbaRazzis</h1>

<div className='container'>

<div className='flex-item'>
<AbaCard/>
</div>

<div className='flex-item'>
<AbaCard/>
</div>

<div className='flex-item'>
<AbaCard/>
</div>


</div>
        </>
    )
}