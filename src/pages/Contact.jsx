import React, { useRef, useState } from 'react';
import { images } from '../images/images';
import Offfice from '../components/Offfice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faPhoneVolume } from '@fortawesome/fontawesome-free-solid';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import Subcribe from '../components/Subcribe';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const handleSucess = () => {
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            swal("Sent error!", "Please insert information", "error");

        } else {
            swal("Sent success!", "I'll contact you soon", "success");
        }
    }
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lresqpq', 'template_bwaw89h', form.current, 'DNPyauJxcGQMc9ZOa')
        e.target.reset();
    };
    return (
        <div className='overflow-hidden'>
            <div className="text-center wrapper">
                <div className='text-center'>
                    <h1 className='text-4xl'>Let's Connect</h1>
                    <p className='text-lg text-gray-500 my-7 w-[70%] mx-auto sm:w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis.</p>
                    <h2 className='text-xs font-bold tracking-widest text-gray-500 my-[50px]'>OUR OFFICES</h2>
                </div>
                <div className='grid gap-5 text-center lg:grid-cols-2' data-aos="fade-up" data-aos-duration="1000"> 
                    <Offfice images={images.unitedOffice} />
                    <Offfice images={images.londonOffice} />
                </div>
                <div className=''>
                    <h3 className='text-center font-bold tracking-widest text-gray-500  mt-[80px] mb-[100px]'>CONTACT ME</h3>
                    <div className='flex justify-around sm:flex-col sm:items-center' >
                        <div className='' data-aos="fade-right">
                            <h3 className='pb-3 text-2xl font-semibold'>Talk to me</h3>
                            <div className='text-left'>
                                <div className='flex items-center my-6 ' >
                                    <div className='text-2xl text-second_color'><FontAwesomeIcon icon={faEnvelope} /></div>
                                    <div className='pl-6'>
                                        <h4 className='text-lg font-medium'>Email</h4>
                                        <p className='py-2 text-sm'>I am here to help you</p>
                                        <a href='mailto:nguyendangvu137@gmail.com' className='text-sm text-second_color'>nguyendangvu137@gmail.com</a>
                                    </div>
                                </div>
                                <div className='flex items-center my-6'>
                                    <div className='text-2xl text-second_color'><FontAwesomeIcon icon={faPhoneVolume} /></div>
                                    <div className='pl-6 '>
                                        <h4 className='text-lg font-medium'>Phone</h4>
                                        <a href='tel:+0379015026' className='text-sm text-second_color'>0379015026</a>
                                    </div>
                                </div>
                                <div className='flex items-center my-6'>
                                    <div className='text-2xl text-second_color'><FontAwesomeIcon icon={faLocationDot} /></div>
                                    <div className='pl-6 '>
                                        <h4 className='text-lg font-medium'>Address</h4>
                                        <p className='py-2 text-sm'>Service clients 24/24</p>
                                        <p className='text-sm text-second_color'>97 Man Thien, Hiep Phu Ward, Thu Duc, Ho Chi Minh City</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=''data-aos="fade-left">
                            <h3 className='pb-3 text-2xl font-semibold'>Write me something</h3>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='relative my-6'>
                                    <label className='ndv__label'>Name</label>
                                    <input type="text" name='name' value={name} placeholder='Insert your name' className='ndv__input' onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='relative my-6'>
                                    <label className='ndv__label'>Email</label>
                                    <input type="email" name='mail' value={email} placeholder='Insert your mail' className='ndv__input' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='relative my-6'>
                                    <label className='ndv__label'>Message</label>
                                    <textarea name='message' cols='30' rows='5' value={message} className='resize-none ndv__input' placeholder='Write some thing' onChange={(e) => setMessage(e.target.value)} />
                                </div>
                                <button className='bg-black ndv__button' onClick={() => { handleSucess() }}>
                                    Send <i><FontAwesomeIcon icon={faPaperPlane} className='ml-2' /></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.080565798424!2d106.7866647!3d10.847987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752772b245dff1%3A0xb838977f3d419d!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCQ1ZUIGPGoSBz4bufIHThuqFpIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1679369190038!5m2!1svi!2s" className='w-full sm:h-[280px] h-[380px]' style={{ border: "0px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
            </div>
            <div className="text-center wrapper" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                <h2 className='text-xs font-bold tracking-widest text-gray-500 my-[50px]'>DIRECTORY</h2>

                <div className='grid lg:grid-cols-3' >
                    <div>
                        <h2 className='text-xs font-bold tracking-widest text-gray-500 '>PRESS</h2>
                        <p className='my-[20px] text-xl'>Robb Kohler</p>
                        <ul className='text-gray-500'>
                            <li>086-374-4962</li>
                            <li>robb.kohler@coffeestyle.com</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xs font-bold tracking-widest text-gray-500 '>MANAGEMENT</h2>
                        <p className='my-[20px] text-xl'>Roob Dayana</p>
                        <ul className='text-gray-500'>
                            <li>354-341-2750</li>
                            <li>roob.dayana@coffeestyle.com</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xs font-bold tracking-widest text-gray-500 '>SUPPORT</h2>
                        <p className='my-[20px] text-xl'>Warren Marsh</p>
                        <ul className='text-gray-500'>
                            <li>531-403-0376</li>
                            <li>warren.marsh@coffeestyle.com</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <Subcribe/>
            <ToastContainer />
        </div>

    );
}

export default Contact;
