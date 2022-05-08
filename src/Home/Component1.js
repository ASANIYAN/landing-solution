import component1 from '../assests/img/illustration1.webp'

const Component1 = () => {
    return (
        <div className="container mx-auto flex flex-col-reverse md:flex-row mt-20">
            <div className='pt-8 text-center md:w-1/2'>
                <h1 className="text-color1 font-bold text-4xl md:text-5xl">
                    Ensuring your tasks are organized and ready to be Smashed
                </h1>
                <p className="text-md mt-4 text-paragraph">
                    Having a hard time structuring your daily tasks and getting them done on-time? Taskify is here to make that Easy for You!!!
                </p>
            </div>
            <div className='md:w-1/2 md:ml-4'>
                <img src={component1} alt="" />
            </div>
        </div>

    );
}

export default Component1;