"use client";
import PageWrapper from '@/components/main/pageWrapper';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from "next/link";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const metadata = {
  title: 'Randevu Al',
  description: 'asdds',
};

export const getData = async (token, tel) => {
  try {
    const response = await axios.get(`http://softinyo.com:3696/api/reservation/${tel}?token=${token}`);
    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const Randevu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [satinAl, setSatinAl] = useState(0);
  const [data, setData] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;
  const dummyData = [
    {
      ad: "",
      color: "",
      category: "",
      price: "",
    }
  ];
  const priceData = [
    {
      sayı: 2,
      normalFiyat: "₺599",
      indirimliFiyat: "₺579.90"
    },
    {
      sayı: 4,
      normalFiyat: "₺599",
      indirimliFiyat: "₺559.90"
    },
    {
      sayı: 8,
      normalFiyat: "₺599",
      indirimliFiyat: "₺539.90"
    },
  ]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cevap = await getData(Cookies.get('token'), Cookies.get('tel'));
        if (cevap.status === true) {
          setData(cevap.data);
          setTotalItems(cevap.dataCount)
        }
        setData(cevap.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getFilteredData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    if (data) {
      return data.slice(startIndex, endIndex);
    } else {
      return dummyData.slice(startIndex, endIndex);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  function formatTarih(tarih) {
    if (!tarih) {
      return '';
    }

    const date = new Date(tarih);
    const gun = String(date.getDate()).padStart(2, '0');
    const ay = String(date.getMonth() + 1).padStart(2, '0');
    const yil = date.getFullYear();
    const formattedTarih = `${gun}.${ay}.${yil}`;

    return formattedTarih;
  }

  function formatSaat(tarih) {
    if (!tarih) {
      return '';
    }

    const date = new Date(tarih);
    const saat = String(date.getUTCHours()).padStart(2, '0');
    const dakika = String(date.getUTCMinutes()).padStart(2, '0');
    const formattedSaat = `${saat}:${dakika}`;

    return formattedSaat;
  }

  const handleButtonClick = (item) => {
    setSatinAl(item.sayı);
  };

  const reservationAl = async () => {
    const sayi = satinAl;
    const headers = {
      "x-access-token": Cookies.get('token')
    }

    axios.post(`http://softinyo.com:3696/api/update/reservation`, { sayi }, { headers })
      .then(response => {
        if (response.data.status) {
          Swal.fire({
            title: 'Randevu Alındı!',
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Tamam',
            confirmButtonColor: '#4C9AFF',
            customClass: {
              confirmButton: 'px-4 py-2 text-white rounded-md focus:outline-none',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        } else {
          Swal.fire({
            title: 'Oops...',
            text: 'Bir şeyler yanlış gitti.',
            icon: 'question',
            confirmButtonText: 'Tamam',
            confirmButtonColor: '#4C9AFF',
            customClass: {
              confirmButton: 'px-4 py-2 text-white rounded-md focus:outline-none'
            },
          })
        }
      })
  }

  return (
    <>
      {data ?
        <PageWrapper>
          <div className='flex items-center justify-center flex-col'>
            <div className='grid grid-cols-1 lg:grid-cols-4 '>
              <button
                onClick={() => handleButtonClick({ sayı: 1 })}
                className={`flex flex-col justify-center items-center border-2 border-solid border-[#6b728066] hover:border-blue-800 active:border-blue-900 m-4 rounded-3xl py-6 px-10 w-fit ${satinAl === 1 ? 'border-blue-800' : ''
                  }`}
              >
                <div className='text-blue-900 text-3xl font-extrabold'>1 Seans</div>
                <div className='text-[#6b728066] text-xl font-bold'>Seans Başı<br /> &nbsp;</div>
                <div className='text-blue-900 text-4xl font-extrabold'>₺599.90</div>
              </button>
              {
                priceData.map((item) => (
                  <button
                    key={item.sayı}
                    onClick={() => handleButtonClick(item)}
                    className={`flex flex-col justify-center items-center border-2 border-solid border-[#6b728066] hover:border-blue-800 active:border-blue-900 m-4 rounded-3xl py-6 px-10 w-fit ${satinAl === item.sayı ? 'border-blue-800' : ''
                      }`}
                  >
                    <div className='text-blue-900 text-3xl font-extrabold'>{`${item.sayı} Seans`}</div>
                    <div className='text-[#6b728066] text-xl font-bold text-center'>
                      Seans Başı <br className='html-br' /> <span className='line-through'>{item.normalFiyat}</span>
                    </div>
                    <div className='text-blue-900 text-4xl font-extrabold'>{item.indirimliFiyat}</div>
                  </button>
                ))
              }
            </div>

            <button onClick={() => reservationAl()}
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-sky-600 text-white hover:bg-slate-700 mt-8 mb-12 z-3" href="/takvim">
              <span className="flex z-6">
                Satın Al
              </span>
            </button>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Danışan Adı
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tarih
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Saati
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Seans Süresi
                  </th>
                </tr>
              </thead>
              <tbody>
                {getFilteredData().map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white dark:bg-gray-800"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {`${item.tadı} ${item.tsoyadı}`}
                    </th>
                    <td className="px-6 py-4">{formatTarih(item.startDate)}</td>
                    <td className="px-6 py-4">{formatSaat(item.startDate)}</td>
                    <td className="px-6 py-4">40 Dk</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='flex justify-center items-center mt-2'>
            <Link
              className="ml-4 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-sky-600 text-white hover:bg-slate-700 -my-2.5 z-3" href="/takvim">
              <span className="flex z-6">
                Reservasyon Yap
              </span>
            </Link>
            <nav aria-label="Page navigation example" className="pagination-nav mt-5">
              <ul className="inline-flex items-center space-x-1">
                <li>
                  <a
                    href="#"
                    onClick={() => currentPage <= 1 ? null : handlePageChange(currentPage - 1)}
                    className="flex items-center justify-center w-8 h-8 ml-0 text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </li>
                {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      onClick={() => handlePageChange(i + 1)}
                      className={`flex items-center justify-center w-8 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === i + 1 ? 'z-10 text-blue-600 border-blue-300 bg-blue-500 hover:bg-blue-500 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : ''}`}
                    >
                      {i + 1}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    onClick={() => Math.ceil(totalItems / itemsPerPage) <= currentPage ? null : handlePageChange(currentPage + 1)}
                    className="flex items-center justify-center w-8 h-8 text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </PageWrapper> :
        <PageWrapper>
          <div className='flex items-center justify-center flex-col'>
            <div className="flex md:flex-row flex-col md:justify-around justify-center items-center w-full mt-3">
              <div className="md:w-[80%] w-full font-medium py-9">
                <h4 className="text-center font-extrabold text-3xl mb-2">Takip Seansları</h4>
                <div className="text-center">
                  <p className="py-3">Bir konuşma terapistinin yönlendirmeleriyle daha iyi sonuçlar alabilirsin </p>
                  <p>Takip seansları, gelişiminizin bir dil ve konuşma terapisti tarafından takip edilmesini sağlar </p>
                </div>
              </div>
            </div>
            <h4 className="text-center font-extrabold text-3xl mb-2">Takip Seansları Nasıl Çalışır?</h4>
            <div className="flex w-full justify-center">
              <ol class="relative border-l w-[70%] border-gray-200 dark:border-gray-700 mt-5">
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    <time class="mb-1 mr-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">1.</time>
                    Logue uygulamasını indirin </h3>
                </li>
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    <time class="mb-1 mr-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">2.</time>
                    Günlük programınızda en az 7. Güne kadar ilerleyin </h3>
                </li>
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    <time class="mb-1 mr-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">3.</time>
                    Bir plan seçin ve istediğiniz gün ve saat için randevu oluşturun</h3>
                </li>
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    <time class="mb-1 mr-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">4.</time>
                    Terapistiniz randevu öncesinde ilerlemenizi ve oluşturduğunuz ses kayıtlarınızı analiz etsin  </h3>
                </li>
                <li class="ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    <time class="mb-1 mr-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">5.</time>
                    Randevu saatiniz geldiğinde genel sürecinizle ilgili geri bildirimler, tamamlayıcı çalışmalar, öneri ve yönlendirmeler alın  </h3>
                </li>
              </ol>
            </div>
            <div className="flex justify-center w-full my-12">
              <div className="w-[70%] text-center">
                <p>Uzman dil ve konuşma terapisti ile 50 dakikalık birebir online görüşme</p>
                <p>Logue süreci takibi ve geribildirimler </p>
                <p>Eksik noktalar için ek çalışmalar, öneriler ve yönlendirmeler </p>
                <p>12 saat öncesine kadar ücretsiz iptal/erteleme </p>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 '>
              <button
                onClick={() => handleButtonClick({ sayı: 1 })}
                className={`flex flex-col justify-center items-center border-2 border-solid border-[#6b728066] hover:border-blue-800 active:border-blue-900 m-4 rounded-3xl py-6 px-10 w-fit ${satinAl === 1 ? 'border-blue-800' : ''
                  }`}
              >
                <div className='text-blue-900 text-3xl font-extrabold'>1 Seans</div>
                <div className='text-[#6b728066] text-xl font-bold'>Seans Başı<br /> &nbsp;</div>
                <div className='text-blue-900 text-4xl font-extrabold'>₺599.90</div>
              </button>
              {
                priceData.map((item) => (
                  <button
                    key={item.sayı}
                    onClick={() => handleButtonClick(item)}
                    className={`flex flex-col justify-center items-center border-2 border-solid border-[#6b728066] hover:border-blue-800 active:border-blue-900 m-4 rounded-3xl py-6 px-10 w-fit ${satinAl === item.sayı ? 'border-blue-800' : ''
                      }`}
                  >
                    <div className='text-blue-900 text-3xl font-extrabold'>{`${item.sayı} Seans`}</div>
                    <div className='text-[#6b728066] text-xl font-bold text-center'>
                      Seans Başı <br className='html-br' /> <span className='line-through'>{item.normalFiyat}</span>
                    </div>
                    <div className='text-blue-900 text-4xl font-extrabold'>{item.indirimliFiyat}</div>
                  </button>
                ))
              }
            </div>
            <Link
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-sky-600 text-white hover:bg-slate-700 mt-8 z-3" href="/giris">
              <span className="flex z-6">
                Satın Al
              </span>
            </Link>
          </div>
        </PageWrapper>}
    </>
  );
};

export default Randevu;
