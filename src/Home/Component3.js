import component3 from '../assests/img/illustration2.webp';

const Component3 = ({ contents }) => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row mt-20">
            <div className=''>
                <img src={component3} className='w-full' alt="" />
            </div>
            {
                contents.map((content) => (
                <div className='w-fit pt-10 md:pt-20 md:pl-10' key={content.homeid}>
                    <h2 className='text-color1 font-bold text-4xl md:text-5xl' key={contents.homeid}>
                        {
                            content.homeFifthContent
                        }
                    </h2>
                    <p className='text-md mt-4 text-paragraph' key={content.homeid}>
                       {
                           content.homeSixthContent
                       }
                    </p>
                </div>

                ))
            }
        </div>
    );
}
export default Component3;