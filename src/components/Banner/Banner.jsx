import bannerImg from '../../assets/Images/banner1.jpg'

export default function Banner() {
    return (
        <div className="relative">
            <img className=" top-0 w-full object-cover h-[730px] -z-10" src={bannerImg} alt="" />
            <div className='absolute top-80 left-9 text-7xl font-black' >Need Something?
                <br />
                Here We are</div>
        </div>
    )
}
