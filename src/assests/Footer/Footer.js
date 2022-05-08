const Footer = () => {
    return (
        <div className="w-full mx-auto bg-footer_bg mt-20 pb-10">
            <div className="flex flex-col pt-16 text-center mx-auto justify-center">
                <p className="text-color1 font-bold text-3xl md:text-6xl">
                    Taskify
                </p>
                <div className="text-color1 text-lg font-semibold flex flex-col justify-evenly md:flex-row mt-8 md:mt-6 md:ml-10">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href='/contact'>Contact</a>
                </div>
            </div>
            <p className="mt-6 text-center text-color2 font-semibold text-2xl">
                09033271463
            </p>
        </div>
    );
}

export default Footer;