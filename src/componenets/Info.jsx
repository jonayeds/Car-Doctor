import { FaCalendarAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs"
import { FaMapLocationDot } from "react-icons/fa6";
const Info = () => {
    return (
        <div className="bg-black px-10 py-24 text-white my-32 rounded-2xl text-center">
            <div className="flex justify-around items-center flex-col lg:flex-row gap-y-12">
                <div className="flex items-center gap-4">
                <FaCalendarAlt className="text-white text-3xl hover:text-red-500" />
                <div>
                    <p>We are open monday-friday</p>
                    <p className="text-2xl">7:00 am - 9:00 pm</p>
                </div>
                </div>
                <div className="flex items-center gap-4">
                
                <BsFillTelephoneFill className="text-white text-3xl hover:text-red-500" />
                <div>
                    <p>Have a question?</p>
                    <p className="text-2xl">+2546 251 2658</p>
                </div>
                </div>
                <div className="flex items-center gap-4">
                <FaMapLocationDot className="text-white text-3xl hover:text-red-500" />
                <div>
                    <p>Need a repair? our address</p>
                    <p className="text-2xl">Liza Street, New York</p>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Info;