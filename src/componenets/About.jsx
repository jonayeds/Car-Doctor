import parts from '../assets/images/about_us/parts.jpg'
import person from '../assets/images/about_us/person.jpg' 
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={person} className=" w-5/6 h-full rounded-2xl " />
    <img src={parts} alt="" className='w-72 absolute right-6 top-1/2  border-[10px] border-white rounded-2xl' />
    </div>
    <div className='lg:w-1/2 space-y-4'>
        <p className='text-red-500 font-semibold text-lg'>About Us</p>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
     <div>
     <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. </p>
      <p>
      the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. 
      </p>
     </div>
      <button className="btn btn-error text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;