import component1 from '../assests/img/illustration1.webp'

const Component1 = ({contents}) => {
    return (
        <div className="container mx-auto flex flex-col-reverse md:flex-row mt-20">
            <div className='pt-8 text-center md:w-1/2'>
                {
                    contents.map((content) => (
                        <h1 className="text-color1 font-bold text-4xl md:text-5xl">
                            {
                            content.homeFirstContent
                            }
                        </h1>

                    ))
                }
                {
                    contents.map((content) => (
                        <p className="text-md mt-4 text-paragraph">
                            {
                            content.homeSecondContent
                            }
                        </p>
                    ))
                }
            </div>
            <div className='md:w-1/2 md:ml-4'>
                <img src={component1} alt="" />
            </div>
        </div>

    );
}

export default Component1;