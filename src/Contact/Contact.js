const Contact = ({contents, isPending, error}) => {
    return (
        <div className="container mt-10">
            <p className="text-color2 font-semibold text-left text-xl">
                Contact Us
            </p>
            <h1 className="text-color1 text-left font-bold text-4xl md:text-5xl pt-4">
                If you Have any query, Don't Hesitate to Contact Us.
            </h1>
            <div className="mt-16 flex flex-col justify-center md:flex-row md:justify-evenly">
                <div>

                    <div className="flex">
                        <i className="fa-solid fa-location-dot text-color2 text-3xl mt-3"></i>
                        <div className="flex flex-col ml-6">
                            <p className="text-2xl text-color1 font-bold">
                                Office Address
                            </p>
                            {
                                error && <div> { error } </div>
                            }
                            {
                                isPending && <div> Loading... </div>
                            }
                            {
                                contents && contents.map((content) => (
                                    <small className="text-paragraph pt-1 text-base">
                                        {
                                            content.contactFirstContent
                                        }
                                    </small>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex mt-8">
                        <i className="fa-solid fa-phone text-color2 text-3xl mt-3"></i>
                        <div className="flex flex-col ml-6">
                            <p className="text-2xl text-color1 font-bold">
                                Phone
                            </p>
                            {
                                error && <div> { error } </div>
                            }
                            {
                                isPending && <div> Loading... </div>
                            }
                            {
                                contents && contents.map((content) => (
                                    <small className="text-paragraph pt-1 text-base">
                                        {
                                            content.contactSecondContent
                                        }
                                    </small>

                                ))
                            }
                        </div>
                    </div>

                    <div className="flex mt-8">
                        <i className="fa-solid fa-envelope text-color2 text-3xl mt-3"></i>
                        <div className="flex flex-col ml-6">
                            <p className="text-2xl text-color1 font-bold">
                                Email
                            </p>
                            {
                                error && <div> { error } </div>
                            }
                            {
                                isPending && <div> Loading... </div>
                            }
                            {
                                contents && contents.map((content) => (
                                    <small className="text-paragraph pt-1 text-base">
                                        {
                                            content.contactThirdContent
                                        }
                                    </small>

                                ))
                            }
                        </div>
                    </div>
                </div>

                <form className="mt-10 md:mt-0 md:ml-10 mx-auto container">
                    <div className="mb-6 mx-auto">
                        <input type="text" id="name" className="bg-transparent border border-gray-300  text-sm rounded-lg  block w-full p-2.5  text-paragraph dark" placeholder="Name" required />
                    </div>
                    <div className="mb-6">
                        <input type="email" id="email" className="bg-transparent border border-gray-300  text-sm rounded-lg  block w-full p-2.5  text-paragraph dark" placeholder="Email Address" required />
                    </div>
                    <div className="mb-6">
                        <textarea className="bg-transparent border border-gray-300  text-sm rounded-lg  block w-full p-2.5 text-paragraph dark" name="comment" placeholder="Write Comment" id="" cols="50" rows="10"></textarea>
                    </div>

                    <button type="submit" className="bg-btn_bg hover:bg-btn_bg_hover hover:text-white text-btn_bg_hover font-bold py-3 px-8 rounded">Button</button>
                </form>
            </div>
        </div>
    );
}
export default Contact;