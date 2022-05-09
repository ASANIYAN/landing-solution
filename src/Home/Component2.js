const Component2 = ({contents}) => {
    return (
        <>
            {
                contents.map((content) => (
                    <div className="mt-10 md:mt-20 text-center" key={contents.id}>
                    <p className="text-color1 font-bold text-3xl md:text-5xl" key={contents.id}>
                        {
                            content.homeThirdContent
                        }
                    </p>
                    <p className="text-color1 font-bold text-3xl md:text-5xl" key={contents.id}>
                        {
                            content.homeFourthContent
                        }
                    </p>
                    </div>

                ))
            }

        </>
    );
}
export default Component2;