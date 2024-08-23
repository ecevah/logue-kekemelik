"use client"
import SectionTitle from "@/components/main/sectionTitle";
import 'remixicon/fonts/remixicon.css';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

let musteriYorumlari = [
    {
        "content": `Logue ince düşünülmüş çok yararlı bir uygulama. Benim gibi kekemelikle yıllardır mücadele eden biri için mükemmel bir yol arkadaşı. `,
        "author": `Ezgi B.`,
    },
    {
        "content": `Bir mobil uygulama kekemelik konusunda yardımcı olur mu? Evet oluyormuş. Önyargılarımı yıkıp geçti. Kekemeliği olan herkes mutlaka denemeli`,
        "author": `Koray B.`,
    },
    {
        "content": `Öz güvenimi tamamen yitirdiğim bir dönemde kurtarıcım oldu. Uygulama sadece konuşma teknikleri öğretmiyor, duygularla nasıl mücadele edebileceğini de öğretiyor. Mükemmel!`,
        "author": `Onur A.`,
    },
    {
        "content": `Daha önce çok kez terapi aldım ama böylesine detaylı bir program görmemiştim. Eğitim videoları kolaydan zora doğru gidiyor ve çok açıklayıcı. Kesinlikle tavsiye ederim`,
        "author": `Sema S.`,
    },
    {
        "content": `Topluluk karşısında konuşurken ya da sunum yaparken çok takılıyordum. Daha sadece 2-3 haftadır kullanmama rağmen takılmalarımı kontrol altına almaya başladım. Geliştirenlere teşekkürler`,
        "author": `Berat B.`,
    },
    {
        "content": `Kekemeliğim yüzünden yaşadığım zorlukları en iyi anlayan ve çözüm üreten uygulama. `,
        "author": `Erkan D.`,
    },
    {
        "content": `Bu uygulama kekemeliğin anatomisini çıkarmış. İçinde o kadar çok özellik var ki. Sadece biraz sabırlı olun. Yavaş yavaş konsepti anlayacak ve fayda görmeye başlayacaksınız.`,
        "author": `Talha B.`,
    },
];

const MusteriYorumlari = () => {
    return <>
        {/* Testimonials */}
        <div className="w-full bg-white">
            <div className="max-w-container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="w-full text-center mb-16"><SectionTitle title={"Kullanıcı Yorumları"} /></div>
                {/* Grid */}
                <Swiper
                    data-aos="fade-up"
                    autoplay={{
                        "delay": 5000
                    }}
                    spaceBetween={16}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2
                        },
                        976: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {
                        musteriYorumlari.map((yorum) => {
                            return <SwiperSlide key={"author-" + yorum.author}><MusteriCard author={yorum.author} key={"author-" + yorum.author}>{yorum.content}</MusteriCard></SwiperSlide>
                        })
                    }
                </Swiper>
                {/* End Grid */}
            </div>
            {/* End Testimonials */}
        </div>
    </>
}

const MusteriCard = ({ author, children }) => {
    return <>
        {/* Card */}
        <div className="group flex flex-col h-full shadow-sm bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700 cursor-pointer transition-transform">
            <div className="flex-auto p-4 md:p-6">
                <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
                    <em>
                        &quot;{children.trim()}&quot;
                    </em>
                </p>
            </div>
            <div className="p-4 rounded-b-xl md:px-6 bg-slate-50 group-hover:bg-slate-100 transition-colors flex flex-row items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200 transition-colors">
                    {author}
                </h3>
                <div className="flex flex-row ">
                    <i class="ri-star-fill text-yellow-500"></i>
                    <i class="ri-star-fill text-yellow-500"></i>
                    <i class="ri-star-fill text-yellow-500"></i>
                    <i class="ri-star-fill text-yellow-500"></i>
                    <i class="ri-star-fill text-yellow-500"></i>
                </div>
            </div>
        </div>
        {/* End Card */}
    </>
}

export default MusteriYorumlari