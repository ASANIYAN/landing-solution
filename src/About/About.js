import people from '../assests/img/people.webp'

const About = () => {
    return (
        <div className="container">
            <img src={people} className='mt-8' alt="business-people" style={{width: '100%'}} />
            <div className='container'>
                <p className="text-color2 font-semibold text-center text-xl pt-8">
                    IF YOU HAVE TASKS, THEN YOU DEFINETELY NEED US.
                </p>

                <h1 className="text-color1 text-center font-bold text-4xl md:text-5xl pt-4">
                    ABOUT TASKIFY
                </h1>
                <p className="text-lg text-paragraph pt-4">
                    Our Mission is what pushes us to maximise human potentials. We do that by enabling our users properly organise tasks, set timers for when they wish to execute any of their tasks. We keep you up-to-date with your progress towards completing the tasks.
                </p>

            </div>
        </div>
    );
}
export default About;