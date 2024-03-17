const About = ({ about }) => {
    // console.log(about);
    return <div className="about">
        <h1>{about.title}</h1>
        <span>{about.company}</span>
        <h4>{about.dates}</h4>
    </div>
}

export default About