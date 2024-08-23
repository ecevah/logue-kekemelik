import PageWrapper from "@/components/main/pageWrapper";
export const metadata = {
  title: 'Hakkımızda',
  description: 'asdds',
};

const HakkimizdaPage = () => {
  return (
    <PageWrapper title={"Hakkımızda"}>
      <div className="flex justify-center flex-col items-center">
        <div className="flex flex-row items-center justify-around py-8 w-[80%] border-sky-100 border-2 border-solid rounded-2xl">
          <div className="lg:w-[50%] w-[80%] mt-4 lg:text-start text-center font-semibold">
            <Paragraf>
              Biz de tarihin ilk kekemelik terapistlerinden biri olan Lionel Logue
              gibi kekemelik terapisinin yaşamı kolaylaştırıcı gücüne inanıyoruz. Bu
              yüzden Türkiye’nin en iyi konuşma terapistleri bir araya geldik ve
              Logue’u oluşturduk.
            </Paragraf>
          </div>
          <img className="w-[250px] h-[300px] rounded-xl hidden lg:flex" alt="İtü Çekirdek Logosu" src={`${process.env.HOST}/assets/images/Lionel.jpg`} />
        </div>
        <div className="w-[80%] mt-20 text-center">
          <Paragraf title="Logue Nedir ?">
            Uzman dil ve konuşma terapistleri tarafından kekeme bireylere özel
            hazırlanmış Türkiye’nin ilk ve tek terapi uygulamasıdır.
          </Paragraf>
          <Paragraf title={"Biz Kimiz ?"}>
            Sadece kekemelik alanında çalışan, insan hayatına dokunmayı ilke edinmiş
            lisanslı dil ve konuşma terapistleriyiz.
          </Paragraf>
          <Paragraf title={"Ne Yapıyoruz ?"}>
            Kekemeliği anlamanın, duyguları kontrol etmenin, ikincil hareketleri
            azaltmanın ve kekemeliğin üstesinden gelmenin yollarını öğretiyoruz.
          </Paragraf>
          <Paragraf title={"Nasıl Yapıyoruz ?"}>
            Logue mobil uygulaması üzerinden günlük 20 dakikalık egzersiz, eğitim
            videoları ve çeşitli görevler ile Dünya üzerinde etkinliği kanıtlanmış
            tüm konuşma tekniklerini ve nasıl uygulanacağını adım adım anlatıyoruz.
          </Paragraf>
          <div className="flex flex-col">
            <Paragraf title={"İTÜ ÇEKİRDEKTEYİZ !"}>
              Dünyanın en iyi 5. girişimcilik merkezi olan İstanbul Teknik
              Üniversitesi Çekirdek Kuluçka Merkezi’nde faaliyet gösteriyoruz.
            </Paragraf>
            <div className="flex w-full justify-end">
              <img className="mt-4 w-[250px] h-[200px]" alt="İtü Çekirdek Logosu" src={`${process.env.HOST}/assets/images/ituCekirdek.png`} />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

const Paragraf = ({ title, children }) => {
  return (
    <>
      {title && (
        <p className="mt-12">
          <b>{title}</b>
        </p>
      )}
      <p>{children}</p>
      <br />
    </>
  );
};

export default HakkimizdaPage;
