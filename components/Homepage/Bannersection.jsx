import Image from 'next/image'

const Bannersection = () => {
  return <div style={{position:"relative", width:"100vw", height:"100vh"}}>
    <Image src="/Images/map-pic.png" layout='fill' objectFit='cover' objectPosition="50% 50%" quality={"100"}/>
    <div style={{position:"absolute", width:"100vw" , height:"100%",left:0, bottom:"-1px", display:"flex", justifyContent:"flex-start" ,alignItems:"flex-end"}}>
      <img src={"/Svg/Subtract.svg"} width="100%"/>
    </div>
  </div>;
};

export default Bannersection;
