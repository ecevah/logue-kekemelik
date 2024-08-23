import SectionTitle from '../main/sectionTitle'

const BasEtmeyiOgren = () => {
    return (
        <div className='w-full bg-white'>
            {/* Icon Blocks */}
            <div className="max-w-container px-4 py-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto pb-20">
                <div className='mb-16 text-center w-full'>
                    <SectionTitle title={"Kekemelikle Baş Etmeyi Öğrenin!"} />
                </div>
                <div className=" mx-auto">
                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                        <div className="space-y-6 lg:space-y-10">
                            <IconCard aos="fade-right"
                                title={`Konuşma Teknikleri`}
                                content={`Dünya üzerinde etkinliği kanıtlanmış tüm konuşma teknikleri ve günlük egzersiz programları`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-sky-600 group-hover:scale-110 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </IconCard>
                            <IconCard aos="fade-right"
                                title={`Takip Seansları`}
                                content={`Bir dil ve konuşma terapisti gelişiminizi takip etsin ve yönlendirsin istiyorsanız, Takip Seansları!`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-sky-600 group-hover:scale-110 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>

                            </IconCard>
                            <IconCard aos="fade-right"
                                title={`Yardımcı Uygulamalar`}
                                content={`Nefes Egzersizleri, gecikmiş işitsel geribildirim teknolojisi ve konuşma simülasyonları gibi birçok yardımcı uygulama`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-sky-600 group-hover:scale-110 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                                </svg>
                            </IconCard>
                        </div>
                        {/* End Col */}
                        <div className="space-y-6 lg:space-y-10">
                            <IconCard aos="fade-left"
                                title={`Eğitim Videoları`}
                                content={`Konuşma tekniklerini ve nasıl uygulandığını öğreneceğiniz eğitim videoları`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-sky-600 group-hover:scale-110 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                </svg>

                            </IconCard>
                            <IconCard aos="fade-left"
                                title={`Değerlendirmeler`}
                                content={`Gelişiminizi takip edip istatistik oluşturabileceğiniz birçok değerlendirme testi`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-sky-600 group-hover:scale-110 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                </svg>

                            </IconCard>
                            <IconCard aos="fade-left"
                                title={`Online Buluşmalar`}
                                content={`Gerçek hayat pratikleri ve bilgi paylaşımı yaparken sosyalleşebileceğin Logue online buluşmaları`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-sky-600 group-hover:scale-110 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>

                            </IconCard>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Grid */}
                </div>
            </div>

            {/* End Icon Blocks */}
        </div>

    )
}
const IconCard = ({ title, content, children, aos }) => {
    return <>
        <div className="flex group bg-body p-5 rounded-xl cursor-pointer hover:bg-sky-100 transition-colors" data-aos={aos}>
            <div className='h-auto flex items-center justify-center'>{children}</div>
            <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                    {content}
                </p>
            </div>
        </div>
    </>
}

export default BasEtmeyiOgren