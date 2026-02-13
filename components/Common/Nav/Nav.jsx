import { FiAward, FiBriefcase } from 'react-icons/fi'
import { FaBars, FaHandshake } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { HiIdentification } from 'react-icons/hi'
import NavItem from './NavItem'

const Nav = ({ setIsOpen, isOpen }) => {
    return (
        <nav className="w-full bg-EveningBlack border border-DarkGray/60 shadow-md rounded-xl lg:rounded-xl overflow-hidden">
            <div className="flex items-center justify-between h-16 px-4">
                <div className="text-black font-extrabold tracking-widest">ELORA</div>
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
