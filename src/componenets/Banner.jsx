import img1 from '../assets/images/banner/1.jpg'
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'
import img5 from '../assets/images/banner/5.jpg'
import img6 from '../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className='absolute transform -translate-y-1/2    top-1/2 pl-16  bg-gradient-to-r from-black to-transparent h-full w-full'>
        <div className='text-white space-y-8 w-1/2 h-full flex flex-col justify-center' >
        <h1 className='text-5xl z-50 '>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
        <div>
        <button className='btn btn-error text-white'>Discover More</button>
        <button className='btn btn-outline text-white ml-5'>Discover More</button>
        </div>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-6">
      <a href="#slide4" className="btn btn-circle bg-opacity-40 border-none text-white hover:bg-red-500">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-opacity-40 border-none text-white hover:bg-red-500">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className='absolute transform -translate-y-1/2    top-1/2 pl-16  bg-gradient-to-r from-black to-transparent h-full w-full'>
        <div className='text-white space-y-8 w-1/2 h-full flex flex-col justify-center' >
        <h1 className='text-5xl z-50 '>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
        <div>
        <button className='btn btn-error text-white'>Discover More</button>
        <button className='btn btn-outline text-white ml-5'>Discover More</button>
        </div>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-6">
      <a href="#slide1" className="btn btn-circle bg-opacity-40 border-none text-white hover:bg-red-500">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-opacity-40 border-none text-white hover:bg-red-500">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className='absolute transform -translate-y-1/2    top-1/2 pl-16  bg-gradient-to-r from-black to-transparent h-full w-full'>
        <div className='text-white space-y-8 w-1/2 h-full flex flex-col justify-center' >
        <h1 className='text-5xl z-50 '>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
        <div>
        <button className='btn btn-error text-white'>Discover More</button>
        <button className='btn btn-outline text-white ml-5'>Discover More</button>
        </div>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-6">
      <a href="#slide2" className="btn btn-circle bg-opacity-40 border-none text-white hover:bg-red-500">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-opacity-40 border-none text-white hover:bg-red-500">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className='absolute transform -translate-y-1/2    top-1/2 pl-16  bg-gradient-to-r from-black to-transparent h-full w-full'>
        <div className='text-white space-y-8 w-1/2 h-full flex flex-col justify-center' >
        <h1 className='text-5xl z-50 '>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
        <div>
        <button className='btn btn-error text-white'>Discover More</button>
        <button className='btn btn-outline text-white ml-5'>Discover More</button>
        </div>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-6">
      <a href="#slide3" className="btn btn-circle bg-opacity-40 border-none text-white hover:bg-red-500">❮</a> 
      <a href="#slide5" className="btn btn-circle bg-opacity-40 border-none text-white hover:bg-red-500">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={img5} className="w-full" />
    <div className='absolute transform -translate-y-1/2    top-1/2 pl-16  bg-gradient-to-r from-black to-transparent h-full w-full'>
        <div className='text-white space-y-8 w-1/2 h-full flex flex-col justify-center' >
        <h1 className='text-5xl z-50 '>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
        <div>
        <button className='btn btn-error text-white'>Discover More</button>
        <button className='btn btn-outline text-white ml-5'>Discover More</button>
        </div>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-6">
      <a href="#slide4" className="btn btn-circle bg-opacity-40 border-none text-white hover:bg-red-500">❮</a> 
      <a href="#slide6" className="btn btn-circle bg-opacity-40 border-none text-white hover:bg-red-500">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src={img6} className="w-full" />
    <div className='absolute transform -translate-y-1/2    top-1/2 pl-16  bg-gradient-to-r from-black to-transparent h-full w-full'>
        <div className='text-white space-y-8 w-1/2 h-full flex flex-col justify-center' >
        <h1 className='text-5xl z-50 '>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
        <div>
        <button className='btn btn-error text-white'>Discover More</button>
        <button className='btn btn-outline text-white ml-5'>Discover More</button>
        </div>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-6">
      <a href="#slide5" className="btn btn-circle bg-opacity-40 border-none text-white hover:bg-red-500">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-opacity-40 border-none text-white hover:bg-red-500">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;