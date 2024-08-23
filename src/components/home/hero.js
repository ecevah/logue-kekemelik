
const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <div className='w-full h-[70vh] bg-sky-600 absolute top-0 left-0 -z-20 '></div>
            <div className='w-full h-[30vh] bg-white absolute bottom-0 left-0 -z-20'></div>
            <div className='mt-[17vh] lg:mt-0 relative bsm:mt-[20vh] bmd:pt-[20px] pt-0 lg:pt-0' >
                <div className="absolute top-0 left-0 w-full h-screen z-10" id="heroShapes">
                    <div className='rotated-style absolute -left-[8rem] -top-[8rem] bg-sky-600 opacity-5 aspect-square w-[32rem] rounded-full'></div>
                    <img alt="dönenCisim" v className='absolute left-16 bottom-16 rotated-style hidden lg:block' src={`${process.env.HOST}/assets/images/hero/shapes/1.png`} />
                    <img alt="dönenCisim1" className='absolute left-[10%] top-[25%] veritcal' src={`${process.env.HOST}/assets/images/hero/shapes/2.png`} />
                    <img alt="dönenCisim2" className='absolute right-[12%] top-[12%] spine' src={`${process.env.HOST}/assets/images/hero/shapes/3.png`} />
                    <img alt="donenCisim3" className='absolute right-[35%] bottom-[16%] veritcal hidden lg:block' src={`${process.env.HOST}/assets/images/hero/shapes/4.png`} />
                </div>
                <div className="relative lg:h-[calc(100vh-4rem)] bg-body overflow-hidden m-8 rounded-3xl lg:pt-24 z-auto shadow-sm h-[calc(80vh-4rem)] pt-0 bsm:h-[648px] sm:h-[550px] bmsm:h-[610px] bmd:h-[550px] md:h-[670px]" id="Hero">
                    <div className="bg-sky-700 h-[150vh] -top-[25vh] w-[26%] lg:block z-0 absolute right-0 rounded-s-[50%] hidden" ></div>
                    <div className="absolute inset-0 overflow-hidden">
                    </div>
                    <div className="relative">
                        <div className="relative mx-auto max-w-container px-4 md:pt-16 sm:px-6 lg:px-8 lg:pt-20" >
                            <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2" >
                                <div className='flex flex-col lg:pb-6 justify-center' data-aos="fade-right">
                                    <h1 className="mt-4 lg:text-6xl mb-12 font-extrabold lg:leading-none lg:text-start tracking-tight text-slate-900 text-5xl text-center leading-[65px] bsm:text-40px bsm:mb-2 bmsm:text-30px bmsm:leading-none bmsm:pt-5 bmsm:pb-2 sm:pt-[12%] bsm:pt-[12%]">
                                        <span className="relative text-sky-600">
                                            <svg className="absolute -bottom-5 z-10 lg:right-0 w-full -right-[17%] bmd:right-0 sm:right-0" width="500.5px" height="25.5px" viewBox="0 0 445.5 21.5">
                                                <path className="fill-sky-600 opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z"></path>
                                            </svg>
                                            Kuşlar Kadar Özgür
                                        </span>
                                    </h1>
                                    <p className="mt-6 text-xl leading-7 text-slate-700 text-center lg:text-start">
                                        <b>Logue</b> uzman dil ve konuşma terapistleri tarafından kekeme bireylere özel hazırlanmış Türkiye’nin ilk ve tek terapi uygulamasıdır.
                                    </p>
                                    <div className="mt-10 flex gap-4 relative z-10 flex-col lg:flex-row">
                                        <a href="/" className="hover:bg-opacity-80 hover:scale-105 transition-all flex mt-3 lg:w-48 h-14 bg-black text-white rounded-lg items-center justify-center w-full">
                                            <div className="mr-3">
                                                <svg viewBox="30 336.7 120.9 129.2" width="30">
                                                    <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"></path>
                                                    <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"></path>
                                                    <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"></path>
                                                    <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-xl font-semibold font-sans -mt-1">Google Play</div>
                                                <div className="text-xs">İle İndir</div>
                                            </div>
                                        </a>
                                        <a href="/" className="hover:bg-opacity-80  hover:scale-105 transition-all flex mt-3 lg:w-48 h-14 bg-black text-white rounded-xl items-center justify-center w-full">
                                            <div className="mr-3">
                                                <svg viewBox="0 0 384 512" width="30">
                                                    <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-semibold font-sans -mt-1">App Store</div>
                                                <div className="text-xs">İle İndir</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="relative lg:col-span-1 move-y hidden lg:block" >
                                    <img id='HeroImg' alt='phone' data-aos="fade-left"
                                        src={`${process.env.HOST}/assets/images/hero/phone.png`}
                                        width={1400}
                                        height={1280}
                                        className="relative z-20-mb-0 max-h-[620px] w-auto rounded-xl float-right -mt-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
                        <div className="absolute -left-8 -right-8 bottom-0 h-px bg-[linear-gradient(89deg,#0f172a1a,transparent)] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero