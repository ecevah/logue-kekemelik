
let faqList = [
    {
        "baslik": `Güvenli, Etkin, Kanıta Dayalı Terapi`,
        "icerik": `Kekemelik sanılanın aksine kontrol altına alınabilen bir konuşma bozukluğudur. Uzman dil ve konuşma terapistleri olarak dünyada sadece etkinliği kanıtlanmış terapi teknikleri ile oluşturduğumuz ve dijitalleştirdiğimiz terapi modelimiz sizin için en iyisini hedefler.`
    },
    {
        "baslik": `Çok Yönlü Terapi Yaklaşımı`,
        "icerik": `Kekemeliğin hem fizyolojik hem de psikolojik etmenlerine odaklandığımız terapi modelimizde konuşmayı kolaylaştıracak nefes ve konuşma tekniklerine ek olarak, kekeme bireylerin kekemeliğe karşı duyarsızlaşarak kaygı ve stres seviyesini azaltmaya yönelik görevler bulunmaktadır.`
    },
    {
        "baslik": `Tüm Yaş Grupları İçin Uygun Model`,
        "icerik": `Logue modeli çocuk grubu için ebeveyn desteğiyle, ergen grubu için ebeveyn onayıyla, yetişkinler için ise bireysel olarak kullanılabilmektedir`
    },
    {
        "baslik": `Kombine Terapi Anlayışı`,
        "icerik": <>Terapi tekniklerin birleşimi birbirlerini güçlendirir !
            Logue modeli etkinliği kanıtlanmış 3 ana tekniği temel almaktadır;<br /><br />
            <span className='text-bold text-lg'>1.</span>	Akıcılığı şekillendirme<br />
            <span className='text-bold text-lg'>2.</span>	Konuşmanın modifikasyonu<br />
            <span className='text-bold text-lg'>3.</span>	Bilişsel davranışçı terapi
        </>
    },
];

const NedenLogue = () => {
    return (
        <div className='w-full '>
            {/* FAQ */}
            <div className="max-w-container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="grid md:grid-cols-5 gap-10">
                    <div className="md:col-span-2 md:flex md:items-center">
                        <div className="max-w-xs" data-aos="fade-right">
                            <h2 className="text-2xl font-bold lg:text-4xl md:text-3xl md:leading-tight dark:text-white text-center md:text-start">
                                Neden Logue ?
                            </h2>
                        </div>
                    </div>
                    {/* End Col */}
                    <div className="md:col-span-3">
                        {/* Accordion */}
                        <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
                            {faqList.map((faq, i) => {
                                return <FAQCard
                                    title={faq.baslik}
                                    content={faq.icerik}
                                    isActive={i == 0}
                                    key={"faq-" + i}
                                />
                            })}
                        </div>
                        {/* End Accordion */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End FAQ */}
        </div>

    )
}

const FAQCard = ({
    title, content, isActive
}) => {
    return <>
        <div data-aos="fade-up"
            className={`hs-accordion pt-6 pb-3 ${isActive && 'active'} bg-white p-5 rounded-3xl mb-3`}
            id="hs-basic-with-title-and-arrow-stretched-heading-two"
        >
            <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
            >
                {title || "Başlık"}
                <svg
                    className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                    />
                </svg>
                <svg
                    className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                    />
                </svg>
            </button>
            <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                className={`hs-accordion-content ${!isActive && 'hidden'} w-full overflow-hidden transition-[height] duration-300`}
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
                <p className="text-gray-600 dark:text-gray-400">
                    {content || "İçerik"}
                </p>
            </div>
        </div>
    </>
}

export default NedenLogue