import group from '../assets/icons/group.svg'
import clock from '../assets/icons/deliveryt.svg'
import person from '../assets/icons/person.svg'
import wrench from '../assets/icons/Wrench.svg'
import check from '../assets/icons/check.svg'
import delivery from '../assets/icons/Group 38729.svg'
const ChooseUs = () => {
    return (
        <div className='my-32'>
            <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-red-500 text-lg font-semibold">Core Features</p>
        <h1 className="text-3xl font-bold">Why Choose Us </h1>
        <p>
        the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. 
        </p>
      </div>  
      <div className='flex flex-col md:flex-row justify-between '>
        <div className='text-center p-10 space-y-4 w-max hover:bg-red-500 hover:text-white  rounded-2xl'>
            <img src={group} alt="" className='mx-auto ' />
            <p className='text-xl font-semibold'>Expert Team</p>
        </div>
        <div className='text-center p-10 space-y-4 w-max hover:bg-red-500 hover:text-white  rounded-2xl'>
            <img src={delivery} alt="" className='mx-auto ' />
            <p className='text-xl font-semibold'>Timely Delivery</p> 
        </div>
        <div className='text-center p-10 space-y-4 w-max hover:bg-red-500 hover:text-white  rounded-2xl'>
            <img src={person} alt="" className='mx-auto ' />
            <p className='text-xl font-semibold'>24/7 Support</p>
        </div>
        <div className='text-center p-10 space-y-4 w-max hover:bg-red-500 hover:text-white  rounded-2xl'>
            <img src={check} alt="" className='mx-auto ' />
            <p className='text-xl font-semibold'>Best Equipment</p>
        </div>
        <div className='text-center p-10 space-y-4 w-max hover:bg-red-500 hover:text-white  rounded-2xl'>
            <img src={wrench} alt="" className='mx-auto ' />
            <p className='text-xl font-semibold'>100% Guranty</p>
        </div>
        <div className='text-center p-10 space-y-4 w-max hover:bg-red-500 hover:text-white  rounded-2xl'>
            <img src={clock} alt="" className='mx-auto ' />
            <p className='text-xl font-semibold'>Timely Delivery</p>
        </div>
      </div>
        </div>
    );
};

export default ChooseUs;