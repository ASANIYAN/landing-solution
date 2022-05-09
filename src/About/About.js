import people from '../assests/img/people.webp'

const About = ({contents, isPending, error}) => {
    return (
        <div className="container">
            <img src={people} className='mt-8' alt="business-people" style={{width: '100%'}} />
            {
                error && <div> { error } </div>
            }
            {
                isPending && <div> Loading... </div>
            }
            <div className='container'>
                {
                    contents && contents.map((content) => (
                    <p className="text-color2 font-semibold text-center text-xl pt-8" key={content.aboutid}>
                        {
                            content.aboutFirstContent
                        }
                    </p>
                    ))
                }

                <h1 className="text-color1 text-center font-bold text-4xl md:text-5xl pt-4">
                    ABOUT TASKIFY
                </h1>
                {
                    contents && contents.map((content) => (
                    <p className="text-lg text-paragraph pt-4" key={content.homeid}>
                        {
                            content.aboutSecondContent
                        }
                    </p>
                    ))
                }

            </div>
        </div>
    );
}
export default About;