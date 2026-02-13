import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { HiMail, HiUser } from 'react-icons/hi'
import { BsChatTextFill } from 'react-icons/bs'
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_azsaobb';
const TEMPLATE_ID = 'template_kfumb0d';
const PUBLIC_KEY = 'xxvK2qybkwWIFB-Zs';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('In Progress')
    const [modalMessage, setModalMessage] = useState('Please try again.')
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (loading) return

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setModalTitle('Missing Fields')
            setModalMessage('Please fill in name, email, and message.')
            setIsOpen(true)
            return
        }

        setLoading(true)
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                PUBLIC_KEY
            )
            setModalTitle('Message Sent')
            setModalMessage('Thanks! I will get back to you soon.')
            setIsOpen(true)
            setForm({ name: '', email: '', message: '' })
        } catch (error) {
            setModalTitle('Send Failed')
            setModalMessage('Something went wrong. Please try again.')
            setIsOpen(true)
            // eslint-disable-next-line no-console
            console.error('EmailJS error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-black flex flex-col gap-y-5 border-l">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base text-amber-900 '>Country:</span>
                                <span className='text-LightGray md:text-sm'>India</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base text-amber-900  first-letter:'>City:</span>
                                <span className='text-LightGray md:text-sm'>pune</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base text-amber-900 '>Company:</span>
                                <span className='text-LightGray md:text-sm'>Elora</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base text-amber-900 '>Email:</span>
                                <span className='text-LightGray text-sm'>sarthakkhatpe24@gmail.com</span>
                            </div>
                         
                            <div className="flex justify-between items-center">
                                <span className='md:text-base text-amber-900 '>Phone:</span>
                                <span className='text-LightGray text-sm'>+92 7559463115</span>
                            </div>
                        </div>
                    </div>
                </div>
               


                <div className="my-12 w-full h-auto text-black">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="input_stylings"
                                        placeholder="Name"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="input_stylings"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea
                                        rows={6}
                                        cols={50}
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        className="input_stylings"
                                        placeholder="Message"
                                    />
                                </div>
                            </div>

                            <div className="my-4">
                                <button type="submit" className="button">
                                    {loading ? 'SENDING...' : 'SEND MESSAGE'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Custom success modal */}
            {isOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm'>
                    <div className='card_stylings p-8 rounded-lg shadow-2xl max-w-sm mx-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-Green font-bold text-2xl'>{modalTitle}</h1>
                            <p className='text-Snow text-center mt-4 mb-6'>{modalMessage}</p>
                            <button 
                                onClick={() => setIsOpen(false)} 
                                className='button px-6'
                            >
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </BannerLayout>

    )
}

export default Contact
