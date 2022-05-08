import component3 from '../assests/img/illustration2.webp';

const Component3 = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row mt-20">
            <div className=''>
                <img src={component3} className='w-full' alt="" />
            </div>
            <div className='w-fit pt-10 md:pt-20 md:pl-10'>
                <h2 className='text-color1 font-bold text-4xl md:text-5xl'>
                    Share Your streaks with your Friends on Taskify
                </h2>
                <p className='text-md mt-4 text-paragraph'>
                    With Taskify, you can share and compare your daily streaks with your friends. The more you Complete your daily tasks, the higher your score and chances of getting to the LeaderBoard.
                </p>
            </div>
        </div>
    );
}
export default Component3;