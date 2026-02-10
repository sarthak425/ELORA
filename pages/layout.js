import Nav from '../components/Common/Nav/Nav';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular gap-y-3`}>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='flex-1 w-full h-auto shadow-2xl bg-DeepNightBlack border border-DarkGray/50 rounded-xl relative overflow-auto overflow-x-hidden no-scrollbar'>
        {children}
      </div>
    </div>
  );
}
