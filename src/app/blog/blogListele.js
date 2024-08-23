"use client"
import BlogCard from "@/components/blog/blogCard";
import { useEffect, useState } from "react";

async function getData(limit) {
  const res = await fetch(`http://softinyo.com:3696/blog/list${limit > 0 ? '/' + limit : ''}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const blogs = [
  {
    id: '1',
    baslik: 'Kekemelik İçin Kas Egzersizleri Faydalı Olur Mu?',
    icerik: `Kekeme bir birey anlatmakta olduğu konudan ziyade ‘’takılmamalıyım’’, ‘’kekelememeliyim’’ düşüncesine odaklanırsa kekeleme ihtimalini de arttırmış olur. Bu sadece kekemelikte değil, hayatın birçok alanında gördüğümüz psikolojik bir etkidir. Dolayısıyla kekelememek için gösterdiği bu çaba (kaçma&kaçınma davranışları), kekemeliğin şiddetini arttırabilmektedir. Kekemeliğin şiddetinin artması da zamanla yüz kaslarında gerginlik oluşturabilmektedir. Ancak bahsedilen gerginlik, kekemeliğin nedeni değil sonucudur. Sonucu değiştirmek kekemelik üzerinde bir etki yaratmayacaktır. Dolayısı ile kekemelik vücudun herhangi bir bölgesinde ya da yüz bölgesinde kas yapılarını etkileyen bir konuşma bozukluğu olmadığı için kekemeliği olan bireylerde kas egzersizleri fayda sağlamamaktadır. 

 

    Dil ve Konuşma Terapistleri tarafından önerilen ve bilimsel dayanağı olan gerçek kekemelik terapileri, geleneksel kas egzersizlerinden oldukça farklıdır. Kekemelik terapileri kasları güçlendirmeyi hedeflemez, kekemeliği benimsemenin ve üstesinden gelmenin yollarını öğretir. Ancak kekeme bireylere uygulanan bilimsel dayanağı ve faydası olmayan bazı egzersizler kekeme bireylere yardımcı olmamakta hatta kekemelik şiddetinin artmasına sebebiyet verebilmektedir. 
    
    Kekemelik Terapisinde Kullanılmaması Gereken Egzersizler 
    
    Şimdiye kadar, kekemelik terapisi için kullanılan egzersizler hakkında birtakım yanlış bilgiler edinmiş olabilirsiniz. Bilimsel olarak kanıtlanmayan ve günümüz dünyasında geçerliliği kabul edilmemiş bu egzersizleri kendiniz, çocuğunuz ya da yakınlarınız için uygulamadan önce hangi egzersizlerden kaçınmanız gerektiğini öğrenmenizin zamanı geldi. 
    
     
    
    1. Pipet ve Su Kullanılarak Yapılan Egzersizler 
    
    Pipet yardımı ile su ya da benzeri sıvıları içmek konuşma akıcılığının artırılmasında fayda sağlamaz. Bu egzersizlerin kekemelikte fayda sağladığına dair kanıtlanmış herhangi bir bilimsel çalışma, makale, araştırma ve kitap bulunmamaktadır. 
    
    Pipetin malzemesi, şekli ve boyutu ne olursa olsun bu tekniğin kekemelik için fayda sağlamasını beklememelisiniz. 
    
    2. Çene Güçlendirme Egzersizleri  
    
    Kekemelik yüz kasları problemleri ve dil-dudak koordinasyonu gibi durumlar sebebi ile ortaya çıkmaz. Dolayısı ile konuşma akıcılığını artırdığı düşünülerek bilinçsizce yapılan egzersizler bireylere fayda sağlamamakta aksine durumun daha kötüye gitmesine sebep olabilmektedir. Kekemeliğin ortaya çıkışı ve nedeni çene hareketleri, kaslar vb. gibi yapılarda meydana gelen sorunlardan ötürü olamadığından kekemeliği olan bireylere uygulanan yüz ve çene egzersizleri kekemeliğe olumlu yönde yarar sağlamayacaktır. 
    
    3. Çakıl Taşı, Bilye, Kalem 
    
    Kekemeliği olan bireylerde bilinçsizce, bilimsel geçerliliği olmayan bazı teknik ve uygulamalar kullanılmaktadır. Bu tekniklere örnek olarak ağızda çakıl taşları, bilye ve kalem tutma gibi uygulamaları örneklendirebiliriz. Bu çalışmalar bilimsel hiçbir geçerliliği olmayan ve kekemeliği olan bireylere fayda sağlamayan tekniklerdir. Konuşma tekniklerini ve bilimsel geçerliliği kanıtlanmış kekemelik terapi tekniklerini ancak lisanslı Dil ve Konuşma Terapistlerinden öğrenebilirsiniz. `,
    thumbnail: 'http://loguekekemelik.com/assets/images/blog1.jpg',
    createdAt: '03.07.2023'
  },
  {
    id: '2',
    baslik: 'Çocuğum Kekeliyor Nelere Dikkat Etmeliyim?',
    icerik: `1. Olumsuz Tutum ve Davranışlar 

Erken dönem çocuk yaş grubunda kekemelik görülebilmektedir. Dikkat edilmesi gereken nokta çocuğun ilk aşamada kekemeliğinin farkına varmaması ve kekemeliğiyle ilgi olumsuz bir duygu ya da düşünce oluşturmamasıdır. Yetişkin bireylerin, ebeveynlerin ve çocuğun sosyal çevresinin kekemelik hakkında yaptığı tutum ve davranışlar ya da yapılan olumsuz yorumlar çocuğun kekemeliğinin farkındalığının artmasına ve kekemeliği kötü ve utanılacak bir şey olarak görmesine sebep olabilmektedir. Kekemeliğe karşı bu şekilde negatif duygular beslemesi kekemeliği daha çok tetikleyip şiddetini arttırabilmektedir. 
Ebeveynlerin çocuğun kekemeliğine yönelik olarak olumsuz yorumlarda ve davranışlarda bulunmamaları aynı zamanda çocuğun sosyal çevresini duyarlı hale getirerek düzenlemeleri gerekmektedir. 

2. ‘’ Yavaş Konuş’’ Uyarıları 

Kekemelik terapisinde yavaş konuşma, yetişkinler için kekemeliğin sıklığını ve yoğunluğunu azaltabilir. Ancak, çocuklardan her kekelediklerinde yavaşlamalarını veya biraz nefes almalarını istemek, olumsuz bir mesaj verebilir.  
Konuşma sırasında her takılmada kesintiye uğramak inanılmaz derecede rahatsız edici ve çileden çıkarıcı olabilir. Çocuğunuz heyecanlıysa ve hızlı konuşuyorsa, onu olduğu yerde durdurup yavaşlamasını istemek yerine, konuşmasını bitirmesine izin verin ve iyi bir model olun. Unutmayın ki çocuklar birer ayna gibidir, yavaş konuşmayı öğretmenin en iyi yolu onlara örnek olmanız, sıra alarak konuşmanız ve hızlı konuşmasına gerek olmayacak bir ortam yaratmanızdır. 

3. Ritmik Konuşma 

Heceleme ya da melodik konuşma teknikleri kekemeliği azaltabilmektedir. Ancak heceleyerek konuşmak ya da şarkı söylermiş gibi konuşmak, konuşmanın doğallığını bozan tekniklerdir ve dil ve konuşma terapistleri tarafından çok istisnai durumlar haricinde önerilmemektedir. 
Özellikle küçük yaş grupları için ritmik konuşma teknikleri alışkanlık haline gelebilmektedir. Alışkanlık haline gelen yeni konuşma tarzı kekemelikten daha dikkat çekici olabilmekte, bakışlardan ve garipsemelerden dolayı rahatsız edici olabilmektedir. 

 

4. Kelime Değiştirme 

Her kekeme bireyin daha çok takıldığı harf ya da kelimeler vardır. Bunlar çoğunlukla patlamalı harfler dediğimiz p,b,ç,k vb. harfler ve bu harflerle başlayan kelimelerdir. Ancak kişiden kişiye göre harfler ve kelimeler değişiklik gösterebilmektedir. 
Kekeme bireyler çok takıldığı harflerle başlayan kelimeleri kullanmak yerine takılmamak için alternatif kelimeler kullanmaktadırlar. Ancak bu durum içerik erozyonu dediğimiz duruma neden olabilmektedir. Kelime değişimleri belli bir seviyenin üzerine çıktığında anlatılan konunun içeriğinin bozularak, kişinin anlatmaya çalıştığı şeyi tam olarak aktaramamasına neden olabilmektedir.  
Kelime değiştirmek kekemeliğin kaçınılması ve yüzleşilmemesi gereken bir sorun olduğu mesajını oluşturmaktadır. Ancak unutulmamalıdır ki kekemelikle baş etmenin yolu kekemelikten kaçmak değil, kabullenip üzerine gitmektir. 

5. ‘’Heyecanlanma’’ Uyarıları 

Heyecan, mutluluk, üzüntü, sinir gibi duygular yoğun hissedildiğinde zaman zaman takılma miktarını arttırabilmektedir. Ancak herkes tüm bu duygu yelpazesini hissedebilmeli ve ifade edebilmelidir.  
Kekeme bir çocuğa sakinleş, heyecanlanma demek heyecanını önlemeyecektir. Bu uyarı söz konusu duyguyu hissetmemesi veya ifade etmemesi gerektiğini hissettirebilir ve kırıcı olabilir.  
Ancak, oluşan öfke probleminin kekemelik ile ilgisi olduğunu düşünüyorsanız, hemen bir dil ve konuşma terapistine danışmalısınız `,
    thumbnail: 'http://loguekekemelik.com/assets/images/blog2.webp',
    createdAt: '03.07.2023'
  },
  {
    id: '3',
    baslik: 'Kekemelik Hakkında Her Şey',
    icerik: `Kekemelik nedir? 

    Kekemelik, konuşmanın akıcılığı ve ritminde meydana gelen kesintiler ve doğal akışının bir biçimde bozulması ile ortaya çıkan bir konuşma bozukluğudur. Kekeleyen insan sayısı kadar farklı kekemelik modeli ve hafiften şiddetliye kadar pek çok farklı kekemelik derecesi vardır ancak temelde tekrar, uzatma ya da blok tipi olarak adlandırılan 3 tip kekemeliğin bir yada birkaçının bir araya gelmesiyle oluşmaktadır.  
    Tekrar Tipi Kekemelik; Ses, hece ya da kelime tekrarlarından oluşmaktadır. 
    
    Örn; ka-ka-kalem 
    Uzatma Tipi Kekemelik; kelime içindeki seslerin uzatılması şeklinde oluşmaktadır. 
    Örn; kaaaalem 
    Blok Tipi Kekemelik; Kimi seslerin üretilirken zorluk yaşanması ve bloklanması şeklinde oluşmaktadır. Sesli ya da sessiz blok şeklinde görülebilmektedir. 
    Örn; kkkkk kalem 
    Örn; ………. kalem 
    Kekeleyerek konuşan bireyler konuşma kaslarında sık sık fiziksel gerginlik ve mücadelenin yanı sıra utanma, endişe ve konuşma korkusu yaşarlar. Bu belirtiler birlikte, kekeleyen kişilerin konuşmasını çok zorlaştırabilir ve bu da onların başkalarıyla etkili bir şekilde iletişim kurmasını zorlaştırır.  
    
    Kekemeliğin nedeni nedir? 
    
    Kekemeliğin nedeni kesin olarak bilinmemekle beraber yapılan araştırmalar kekemeliğin ortaya çıkmasında genetik, nörofizyolojik ve gelişimsel faktörlerin ve farklılıkların rol oynadığını göstermiştir. Bilinenin aksine kaza, korku ve şok gibi durumlar kekemeliğe neden olmamaktadır. Sadece genetik bir yatkınlığın bulunması durumunda tetikleyici bir etken olabilmektedir. Dolayısıyla hiçbir çocuk korktuğu ya da üzüldüğü için kekeme olmamaktadır.  
    Ailede kekemelik geçmişinin bulunması, cinsiyetin erkek olması ve beyin zarındaki yapısal farklılıkların her biri kekemelik riskini 2-3 kat arttırmaktadır. 
    En yaygın kekemelik türü (bazen gelişimsel kekemelik olarak adlandırılır) genellikle çocuklukta, çoğunlukla iki ila sekiz yaşları arasında kendiliğinden gelişmektedir (nadir durumlarda çok daha sonra başlayabilir). İnsanların kabaca yüzde 4 ila 5'i çocukluklarının bir döneminde kekelemektedir. Çoğunluğu yetişkinliğe eriştiklerinde akıcı konuşsa da kekemelik toplumun ortalama %1’i için kronik ve kalıcı bir sorun olmaya devam etmektedir. 
    
    Kekemelik Tedavi Edilebilir mi ? 
    Öncelikle tedavi kelimesini kullanmamak daha doğru olacaktır çünkü kekemelik bir hastalık değildir. Herhangi bir terapi yönteminin kekemeliği %100 bir şekilde tamamen ortadan kaldıracağını belirtmek çok doğru olmayacaktır. Çünkü bir terapi yöntemi bazı kişilere fayda sağlarken diğerlerinde işe yaramayabilir veya kekemelik tamamen ortadan kalktıktan bir süre sonra tekrar nüks edebilir.  
    Tüm yaş grupları ve tüm kekemelik çeşitleri için etkili terapi yöntemleri mevcuttur. Ancak bilinmelidir ki kekemeliği kontrol altına almak, kişinin kekemeliğini kabul etmesiyle başlayan ve oldukça sabırlı olunması gereken uzun bir süreçtir.  
    
    Çocuğum Kekelemeye Başladı Ne Yapmalıyım ? 
    Çocuğum kekelemeye başladı, beklemeli miyim yoksa yardım mı istemeliyim ? Bilinmelidir ki çocukluk çağı kekemeliği ortalama %75 ihtimalle kendiliğinden geçmektedir. Anne babalar olarak yapmanız gereken ilk şey çocuğunuzun kekelediğini fark etmemesini sağlamaktır.  Çocuklar özellikle ilk günler ya da ilk haftalarda kekelediklerinin farkında değillerdir. Dolayısıyla bu farkındalığı yaratmamak adına ‘heyecanlanma’, ‘yavaş konuş’, ‘derin nefes alıp tekrar söyle’ gibi uyarılarda bulunulmaması gerekmektedir. Çocuğunuz birkaç haftadan uzun süredir takılıyorsa ve kekemeliğinden rahatsız olduğuna dair sözlü ya da fiziksel belirtiler gösteriyorsa Logue’nun sadece kekemelik alanıyla ilgilenen uzman dil ve konuşma terapisti ekibinden ücretsiz online danışmanlık seansı alıp süreçle ilgili bilgi alabilirsiniz. 
    
    Kekemelik Günlük Hayatı Nasıl Etkiler ? 
    Çocukluk çağı kekemeliği başlar başlamaz iletişimde engeller oluşturabilmektedir. Bazı çocuklar, kekemelikleri başladıktan hemen sonra kaygı belirtileri göstermektedirler. Bu da sınıfta parmak kaldırmama, sosyal ortamlara dahil olmama, daha az konuşmaya çalışma ya da susma gibi davranışlara neden olabilmektedir. 7-12 yaşları arasında okul çağındaki çocukların, sınıfta soruları cevaplarken veya yüksek sesle okurken kekeleme korkusu ve utanç hissetmeleri yaygın olarak karşımıza çıkmaktadır. 
    Yetişkinlik döneminde bu duygu yoğunluğu devam edebilmekte ya da azalarak minimal seviyeye gelebilmektedir. Ancak kaygı seviyesini azaltabilmiş yetişkin kekeme bireylerde de bir miktar sosyal kaygıyla karşılaşılabilmektedir. İş hayatları etkili iletişim gerektiren veya performansa dayalı meslekler yapan bireyler utanma ve olumsuz değerlendirilme korkusu ile mesleki potansiyellerinin gerisinde kalabilmektedirler.     
    Ancak unutulmamalıdır ki bu ve bu gibi durumlara yol açan etken kişinin kekemeliği değildir. Kekemeliğiyle ilgili kaygılarıdır. Kaygılı olmayan bir çocuk sınıfta rahatça parmak kaldıracağından ya da olumsuz değerlendirilme kaygıları olmayan yetişkin bir birey işini rahatça yapabileceğinden dolayı öncelik kekemeliği bitirmek değil kekemelikle ilgili kaygıları ortadan kaldırmaktır. Kaygılar ortadan kalkınca hem kekemeliğin günlük hayattaki etkileri ortadan kalkmış olacak hem de kekemelik ile mücadele etmek daha kolay olacaktır.     
    Logue terapistleri olarak kaygı seviyesini azaltmanın kekemelik terapisinde en önemli yapı taşlarından biri olduğunu biliyor ve yalnızca bu alanda özel eğitimler almış uzman terapistler ile çalışıyoruz. Uzman ekibimizden ücretsiz danışmanlık seansı alıp daha detaylı bilgiler edinebilirsiniz.`,
    thumbnail: 'http://loguekekemelik.com/assets/images/blog3.jpg',
    createdAt: '03.07.2023'
  }
]


const BlogListele = ({ limit }) => {

  if (limit != null) {
    limit = 0;
  }

  let [bloglar, setBloglar] = useState(null);

  useEffect(() => {
    setBloglar(blogs);
    getData(limit).then((cevap) => {
      if (cevap.sonuc == true) {
        setBloglar(cevap.data);
      }
    });
  }, [limit]);
  return (
    <div className="grid-cols-1 md:grid-cols-3 grid gap-3">
      {bloglar == null && (
        <>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </>
      )}
      {bloglar && (
        <>
          {bloglar.map((blog, i) => {
            return (
              <BlogCard
                id={blog.id}
                baslik={blog.baslik}
                icerik={blog.icerik}
                thumbnail={blog.thumbnail}
                createdAt={blog.createdAt}
                key={`blog-i-${i}`}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default BlogListele;
