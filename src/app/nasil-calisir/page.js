"use client"
import PageWrapper from "@/components/main/pageWrapper";

export default function Nasil() {
    let faqList = [
        {
            "baslik": `Online buluşmalara katılma sınırı var mı?  `,
            "icerik": `stediğiniz kadar buluşmaya katılabilirsiniz. Biz haftada en az 1 buluşmaya katılmanızı tavsiye ediyoruz.`
        },
        {
            "baslik": `Kameramı açmak zorunda mıyım?`,
            "icerik": `Bu sizin tercihiniz. Görünmek istemiyorsanız kameranız kapalı bir şekilde de katılabilirsiniz .`
        },
        {
            "baslik": `Gözlemci olarak katılabilir miyim? `,
            "icerik": `Gözlemci olarak da katılabilirsiniz ancak terapiste toplantıda konuşmak istemediğinizi, sadece toplantı sürecini gözlemleyeceğinizi bildiriniz. `
        }
    ];

    const arr = [
        {
            title: 'Kayıt',
            text: (
                <div>
                    <p className="font-semibold text-center md:text-left">Seninle tanışmak için sabırsızlanıyoruz!</p>
                    <p>- Logue mobil uygulamasını indirin ve Logue ailesine katılın</p>
                    <p>- Giriş bölümündeki sorulara verdiğiniz yanıtlar ile size özel terapi planınızı oluşturalım</p>
                    <p>- Uygulamayı keşfetmeye başlayın!</p>
                </div>
            ),
            position: 'left',
            photo: `http://loguekekemelik.com/assets/images/howto/Login.png`
        },
        {
            title: 'Ücretsiz Değerlendirme & Danışmanlık Seansı ',
            text: (
                <div>
                    <p className="font-semibold text-center md:text-left">Kafana takılan şeyler mi var? </p>
                    <p>-Uzman dil ve konuşma terapistiyle 30 dakikalık birebir online görüşme </p>
                    <p>-Size özel değerlendirme ve danışmanlık</p>
                    <p>-Yönlendirmeler ve tavsiyeler</p>
                    <p>-Logue modeli tüm detayları </p>
                </div>),
            position: 'right',
            photo: `http://loguekekemelik.com/assets/images/howto/terapi.png`
        },
        {
            title: 'Günlük 20 Dakikalık Size Özel Çalışma Programı ',
            text: (
                <div>
                    <p className="font-semibold text-center md:text-left">En etkili terapi teknikleri artık cebinizde! </p>
                    <p>-Önce konuşma tekniklerini ve nasıl uygulandığını öğreneceğiniz eğitim videoları </p>
                    <p>-Sonra da öğrendiklerinizi uygulayacağınız günlük egzersizler </p>
                    <p>-Tekniklerde ilerledikçe ustalık seviyeleri kazanacaksınız </p>
                    <p>-Hedefiniz her teknik için 10. Ustalık seviyesine ulaşmak!</p>
                </div>
            ),
            position: 'left',
            photo: `http://loguekekemelik.com/assets/images/howto/content.png`
        },
        {
            title: 'Değerlendirmeler',
            text: (
                <div>
                    <p className="font-semibold text-center md:text-left">Gelişiminizi grafikler üzerinde takip etmek ister misiniz? </p>
                    <p>-Duygularınızı, kekemeliğinizi ve gelişiminizi gözlemleyebileceğiniz birçok değerlendirme testi </p>
                    <p>-Günlük istatistikler  </p>
                    <p>-Terapi süreciniz rehberlik edecek grafikler  </p>
                </div>
            ),
            position: 'right',
            photo: `http://loguekekemelik.com/assets/images/howto/test.png`
        },
        {
            title: 'Yardımcı Uygulamalar',
            text: (
                <div>
                    <p className="font-semibold text-center md:text-left">Kütüphanedeki ek özellikleri keşfettiniz mi? </p>
                    <p>-Nefes egzersizleri, okuma çalışmaları gibi terapiyi destekleyici özellikler  </p>
                    <p>-Olumlamalar, bilişsel çalışmalar gibi kaygı azaltıcı çalışmalar  </p>
                    <p>-Yüzleşme görevleri, zorbalığı yen gibi özgüven destekleyici özellikler  </p>
                </div>
            ),
            position: 'left',
            photo: `http://loguekekemelik.com/assets/images/howto/menu.png`
        }
    ];

    return (
        <PageWrapper>
            <h2 className="w-full text-center font-extrabold text-4xl mb-12">Nasıl Çalışır?</h2>
            {arr.map((item, index) => (
                <Content key={index} title={item.title} text={item.text} position={item.position} photo={item.photo} />
            ))}
            <div className="flex flex-col md:flex-row md:justify-around justify-center items-center w-full mt-6 bg-gray-100 p-4 rounded-3xl">
                <div className="md:w-[47%] w-[80%] font-medium">
                    <h4 className="text-center md:text-left font-extrabold text-3xl mb-2">Online Buluşmalar</h4>
                    <div className="text-center md:text-left">
                        <p className="mb-2">Sosyal grup buluşmalarıyla diğer Logue üyeleri ile tanışabilir, bilgi ve deneyimlerinizi paylaşabilirsiniz.  </p>
                        <p>Çalışma grubu buluşmalarıyla egzersizlerinizi keyifli hale getirebilir, diğer Logue üyeleriyle gerçek hayat pratiklerinizi yapabilirsiniz.  </p>
                    </div>
                </div>
                <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700 md:w-[47%] w-[90%] mt-6">
                    {faqList.map((faq, i) => {
                        return <FAQCard
                            title={faq.baslik}
                            content={faq.icerik}
                            isActive={i == 0}
                            key={"faq-" + i}
                        />
                    })}
                </div>
            </div>

        </PageWrapper>
    );
}

const Content = ({ title, text, position, photo }) => {
    if (position === 'right') {
        return (
            <div className="flex flex-col-reverse md:flex-row md:justify-around justify-center items-center w-full mt-3">
                <div className="md:w-[50%] w-full">
                    <h4 className="text-center md:text-left font-extrabold text-3xl mb-2">{title}</h4>
                    <div>{text}</div>
                </div>
                <img id="howtoImg" src={photo} className="h-[300px] w-[150px] md:h-[600px] md:w-[300px]" alt="" />
            </div>
        );
    } else {
        return (
            <div className="flex md:flex-row flex-col md:justify-around justify-center items-center w-full mt-3">
                <img id="howtoImg" src={photo} className="h-[300px] w-[150px] md:h-[600px] md:w-[300px]" alt="" />
                <div className="md:w-[50%] w-full">
                    <h4 className="text-center md:text-left font-extrabold text-3xl mb-2">{title}</h4>
                    <div>{text}</div>
                </div>
            </div>
        );
    }
};


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