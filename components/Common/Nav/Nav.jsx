import { FiAward, FiBriefcase } from 'react-icons/fi'
import { FaBars, FaHandshake } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { HiIdentification } from 'react-icons/hi'
import NavItem from './NavItem'

const Nav = ({ setIsOpen, isOpen }) => {
    return (
        <nav className="w-full bg-gradient-to-r from-[#fdf2e9] via-[#f7e8d8] to-[#f2dcc8] border border-[#f3e2c9] shadow-sm rounded-xl lg:rounded-xl overflow-hidden">
            <div className="flex items-center justify-between h-16 px-4">
                <div className="flex items-center gap-2">
                    <img
                        src="/images/logo.jpeg"
                        alt="ELORA logo"
                        className="h-16 w-16 rounded-full object-cover border border-[#f3e2c9]"
                    />
                    <span className="text-black font-extrabold tracking-widest">ELORA</span>
                </div>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="icon border-2 text-Green border-Green p-2 text-sm rounded-lg lg:hidden"
                    aria-label="Toggle navigation"
                >
                    <FaBars />
                </button>
                <div className="hidden lg:flex items-center gap-x-3 text-black">
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/'} NavIcon={<ImHome />} NavText={'Home'} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/portfolio'} NavIcon={<FiBriefcase />} NavText={'Products'} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/background'} NavIcon={<HiIdentification />} NavText={'Data analytics and strategy'} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/contact'} NavIcon={<FaHandshake />} NavText={'Contact'} />
                </div> 
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden border-t border-EveningBlack/60 px-4 py-3`}>
                <div className="flex flex-col gap-y-2">
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/'} NavIcon={<ImHome />} NavText={'Home'} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/portfolio'} NavIcon={<FiBriefcase />} NavText={'Products'} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/background'} NavIcon={<HiIdentification />} NavText={'Data analytics and strategy'} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/contact'} NavIcon={<FaHandshake />} NavText={'Contact'} />
                </div>
            </div>
        </nav>
    )
}

export default Nav
