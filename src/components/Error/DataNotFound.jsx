import { Link } from 'react-router-dom';

export default function DataNotFound() {
    return (
        <>
            <section className="relative z-10 bg-neutral py-[140px] h-fit">
                <div className="container">
                    <div className="flex -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-7xl text-center">
                                <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                                    No Product Available
                                </h2>
                                <h4 className="mb-3 text-[35px] font-semibold leading-tight text-white">
                                    Oops! We Are Very Sorry!
                                </h4>
                                <p className="mb-8 text-lg text-white">
                                    Thanks For Being With Us!
                                </p>
                                <Link
                                    to="/"
                                    className="inline-block px-8 py-3 text-base font-semibold text-center text-white transition border border-white rounded-lg hover:bg-white hover:text-neutral"
                                >
                                    Go to Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
                    <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
                    <div className="flex w-1/3 h-full">
                        <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
                        <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
                    </div>
                    <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
                </div>
            </section>
        </>
    );

}
