import SectionTitle from '../main/sectionTitle'
const NasilCalisir = () => {
    return (
        <div className="bg-white w-full">
            <div className="">
                <>
                    {/* Icon Blocks */}
                    <div className="px-4 sm:px-6 md:px-8 max-w-container mx-auto pt-10 pb-20 bsm:pt-[50px] bmsm:pt-0 bmd:pt-0 bmd:pb-6">
                        <div className="w-full text-center text-2xl font-bold mb-16 md:mt-[50px]">
                            <SectionTitle title={"Nasıl Çalışır?"} />
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center md:justify-items-center lg:justify-items-start gap-12">
                            <Kart title={"Kayıt Ol"} content={`Size en uygun terapi planını oluşturabilmemiz için sizi daha iyi tanımamız gerekiyor. Giriş bölümündeki sorulara verdiğiniz yanıtlar ile size özel terapi planınızı oluşturuyoruz`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-sky-600 group-hover:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                </svg>
                            </Kart>
                            <Kart title={"Ücretsiz Değerlendirme ve Danışmanlık"} content={`30 dakikalık ücretsiz değerlendirme için randevu alın ve uzmanlarımıza danışın. Bu görüşmeler yalnızca lisanslı dil ve konuşma terapistleri tarafından gerçekleştirilecektir.`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-sky-600 group-hover:text-white">
                                    <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                </svg>

                            </Kart>
                            <Kart title={"Terapiye Başla"} column="col-span-2" content={`Günlük 20-30 dakikalık egzersizler, eğitim videoları ve çeşitli görevler ile kekemeliği anlamanın, duyguları kontrol etmenin, ikincil hareketleri azaltmanın ve kekemeliğin üstesinden gelmenin yollarını öğrenin.`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-sky-600 group-hover:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                            </Kart>
                        </div>
                        <div className="mt-12 text-center" >
                            <a data-aos="fade-up"
                                className="inline-flex justify-center items-center gap-x-2 text-center bg-sky-600 border hover:border-sky-300 text-sm text-white font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-slate-900 dark:border-gray-700 dark:hover:border-gray-600 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:shadow-slate-700/[.7] dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                                href="/nasil-calisir"
                            >
                                Tümünü Görüntüle
                                <svg
                                    className="w-2.5 h-2.5"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* End Icon Blocks */}
                </>

            </div>
        </div>
    )
}

const Kart = ({
    title, content, children, column
}) => {
    return (
        <>
            <div data-aos="fade-up" className={`${column == null ? null : `sm:${column} bmd:${column} md:${column} lg:col-span-1 col-span-1`} text-center group hover:scale-105 hover:bg-slate-100 p-5 cursor-pointer transition-all rounded-3xl`}>
                <div className="flex justify-center items-center w-24 h-24 group-hover:bg-sky-600 transition-all group-hover:text-white bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
                    {children}
                </div>
                <div className="mt-5">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {title}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                        {content}
                    </p>
                </div>
            </div>
        </>
    )
}
export default NasilCalisir