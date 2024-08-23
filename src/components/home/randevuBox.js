
const RandevuBox = () => {
    return (
        <div className='w-full'>
            {/* Subscribe */}
            <div className="max-w-container px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="max-w-2xl" data-aos="fade-right">
                        <h2 className="text-2xl lg:text-xl xl:text-2xl font-bold md:text-3xl md:leading-tight dark:text-white text-center lg:text-start">
                            Ücretsiz Değerlendirme Randevusu Al
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400 text-center lg:text-start">
                            Kekemeliğin üstesinden birlikte gelelim!
                        </p>
                    </div>
                    <div className="w-full flex justify-end md:pt-8" data-aos="fade-left">
                        <a
                            className="md:w-2/3 h-14 hover:scale-105 animate-bounce transition-all text-lg whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-sky-600 hover:bg-sky-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800 w-full"
                            href="/giris"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            </svg>

                            Hemen Başla!
                        </a>
                    </div>
                </div>
                {/* End Subscribe */}
            </div>
        </div>
    )
}

export default RandevuBox