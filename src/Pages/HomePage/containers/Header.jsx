import headerMeet from '../../../assets/headerMeet.jpg'

const Header = () => {
  return (
    <div className='flex flex-col justify-center   min-h-screen '>
         <div className=' flex justify-start pt-[200px] items-center'>
      <h1 className='font-bold text-[80px] px-16 slide-top'> <span className='text-[--logo-color]'>How we can </span> <br/>  help you ?</h1>
     <img src={headerMeet}
     alt='header Logo'
     height={80}
     width={120}
     className='h-[400px] w-[600px] relative left-[100px] rounded-2xl slide-top opacity-90' />
    </div>

    <div className='w-full h-[100px] relative top-16 opacity-80 bg-[--logo-color] flex justify-center items-center'> 
    <h1 className='font-light text-white text-[20px]'>  Everything that you need to know to use our products effectively </h1>
    </div>
    </div>
 


  )
}

export default Header


/*<img
          src={headerMeet}
          alt="Logo"
          width={50}
          height={50}
          className="m-0 w-[650px] h-[400px] overflow-hidden"
        /> */