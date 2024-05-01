import team1 from '../assets/images/team/1.jpg'
import team2 from '../assets/images/team/2.jpg'
import team3 from '../assets/images/team/3.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Team = () => {
    return (
        <div className="my-32 ">
            <div className="text-center max-w-3xl mx-auto space-y-4 ">
        <p className="text-red-500 text-lg font-semibold">Team</p>
        <h1 className="text-3xl font-bold">Meet Our Team</h1>
        <p>
        the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. 
        </p>
      </div>
      <div>
      <div className='flex justify-between flex-col lg:flex-row gap-y-7 mt-12' >
          <div className="card card-compact w-96 bg-base-100 shadow-xl p-4 border  mx-auto">
            <figure>
              <img
                src={team1}
                
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-3xl font-semibold ">Car Engine Plug</h2>
             
              <div className=" flex justify-between items-center text-gray-500">
              <p className="font-semibold text-lg">Engine Expert</p>
              </div>
              <div className='flex justify-center gap-3 mt-4 text-2xl items-center'>
              <button className='bg-gray-200 p-3 rounded-full hover:text-red-500 '><FaFacebookF /></button>
              <button className='bg-gray-200 p-3 rounded-full hover:text-red-500'><FaLinkedinIn /></button>
              <button className='bg-gray-200 hover:text-red-500 p-3 rounded-full'><FaGoogle /></button>
            </div> 
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl p-4 border  mx-auto">
            <figure>
              <img
                src={team2}
                
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-3xl font-semibold ">Car Engine Plug</h2>
             
              <div className=" flex justify-between items-center text-gray-500">
              <p className="font-semibold text-lg">Engine Expert</p>
              </div>
              <div className='flex justify-center gap-3 mt-4 text-2xl items-center'>
              <button className='bg-gray-200 p-3 rounded-full hover:text-red-500 '><FaFacebookF /></button>
              <button className='bg-gray-200 p-3 rounded-full hover:text-red-500'><FaLinkedinIn /></button>
              <button className='bg-gray-200 hover:text-red-500 p-3 rounded-full'><FaGoogle /></button>
            </div> 
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl p-4 border  mx-auto">
            <figure>
              <img
                src={team3}
                
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-3xl font-semibold ">Car Engine Plug</h2>
             
              <div className=" flex justify-between items-center text-gray-500">
              <p className="font-semibold text-lg">Engine Expert</p>
              </div>
              <div className='flex justify-center gap-3 mt-4 text-2xl items-center'>
              <button className='bg-gray-200 p-3 rounded-full hover:text-red-500 '><FaFacebookF /></button>
              <button className='bg-gray-200 p-3 rounded-full hover:text-red-500'><FaLinkedinIn /></button>
              <button className='bg-gray-200 hover:text-red-500 p-3 rounded-full'><FaGoogle /></button>
            </div> 
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Team;