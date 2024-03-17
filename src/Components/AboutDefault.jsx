const AboutDefault = ({dataList})=>{
    return <div className="about">
    <h1>{dataList[0].title} </h1>
    <span>{dataList[0].company}</span>
    <h4>{dataList[0].dates}</h4>
  </div>
}

export default AboutDefault