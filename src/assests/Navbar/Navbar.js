import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [isNavExpanded, setIsNavExPanded] = useState(false);

    return (
        <div className="container mx-auto">
            <nav className='mt-6'>
                <div className='flex justify-between'>
                <p className="text-color1 font-bold text-3xl md:text-4xl">
                    Taskify
                </p>

                    <div className='w-full hidden text-color1 text-lg font-semibold justify-evenly md:flex ml-6 pt-3'>
                    <Link to='/' style={{cursor: 'pointer'}}>Home</Link>
                    <Link to='/about' style={{cursor: 'pointer'}}>About</Link>
                    <Link to='/contact' style={{cursor: 'pointer'}}>Contact</Link>
                    </div>

                    <div className='md:hidden'>
                        <i style={{cursor: 'pointer'}} className="fa-solid fa-bars text-2xl text-color1"  onClick={() => {
                            setIsNavExPanded(!isNavExpanded)
                        }}>
                        </i>
                    </div>
                </div>
                <div className={isNavExpanded ? 'md:hidden flex flex-col absolute w-full text-left text-color1 text-lg font-semibold mx-auto bg-white transition-all ease-in-out duration-600 pb-4' : 'md:hidden flex flex-col absolute w-full text-left text-color1 text-lg font-semibold mx-auto bg-white -top-56 transition-all ease-in-out duration-600 pb-4'}>
                    <Link to='/' className='pt-10' style={{cursor: 'pointer'}}>Home</Link>
                    <Link to='/about' className='pt-10' style={{cursor: 'pointer'}}>About</Link>
                    <Link to='/contact' className='pt-10' style={{cursor: 'pointer'}}>Contact</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;