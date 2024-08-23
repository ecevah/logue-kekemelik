"use client"
import PageWrapper from '@/components/main/pageWrapper';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Giris from '../giris/page';

export const metadata = {
  title: 'Hesabım',
  description: 'asdds',
};

async function fetchData(token) {
  try {
    const response = await axios.get(`http://softinyo.com:3696/api/verify?token=${token}`);

    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getReservationData(token, tel) {
  console.log('bu amk yerinedeyim')
  try {
    const response = await axios.get(`http://softinyo.com:3696/api/reservation/${tel}?token=${token}`);
    console.log('bu oç geçtim')
    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return response.data;
  } catch (error) {
    console.error('error');

    throw error;
  }
}

export default function Page() {
  const router = useRouter();
  const [isim, setIsim] = useState(null);
  const [soyisim, setSoyisim] = useState(null);
  const [telefon, setTelefon] = useState(null);
  const [email, setEmail] = useState(null);
  const [dogumTarihi, setDogumTarihi] = useState(null);
  const [auth, setAuth] = useState(null);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Update with the desired number of items per page
  const [totalItems, setTotalItems] = useState(0);
  const dummyData = [
    {
      ad: "",
      color: "",
      category: "",
      price: "",
    }
  ];

  useEffect(() => {
    const fetchReservationData = async () => {
      console.log('bu amk yerine girdi')
      try {
        console.log('bu amk yerine girdi2')
        const cevap = await getReservationData(Cookies.get('token'), Cookies.get('tel'));
        console.log('bu amk yerines girdi')
        if (cevap.status === true) {
          setData(cevap.data);
          setTotalItems(cevap.dataCount);
        }
        else {
          router.push("/giris");
        }
      } catch (error) {
        console.error(error);
        router.push("/giris");
      }
    };

    fetchReservationData();
  }, [auth]);

  useEffect(() => {
    fetchData(Cookies.get('token')).then((cevap) => {
      if (cevap.status === true) {
        setAuth(cevap.data);
      } else {
        router.push("/giris");
      }
    });
  }, []);

  const getFilteredData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    if (data && Array.isArray(data)) {
      return data.slice(startIndex, endIndex);
    } else {
      return dummyData.slice(startIndex, endIndex);
    }
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://softinyo.com:3696/api/users`, {
        ad: isim,
        soyad: soyisim,
        telNo: telefon,
        mail: email,
        dogumTarih: dogumTarihi,
        token: Cookies.get('token'),
      });
      if (response.data.status) {
        Swal.fire({
          icon: 'success',
          title: 'Başarıyla değiştirildi.',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log('API ile bağlantı hatası:', error);
    }
  };

  function formatNumber(input) {
    var number = input.replace(/\s/g, '');
    if (number.length > 10) {
      number = number.substring(0, 10);
    }

    var formattedNumber = '';
    for (var i = 0; i < number.length; i++) {
      if (i === 3 || i === 6 || i === 8) {
        formattedNumber += ' ';
      }
      formattedNumber += number[i];
    }

    return formattedNumber;
  }

  return (
    <PageWrapper>
      {auth ? (
        <>
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
                  <tr key={item.id} className="bg-white dark:bg-gray-800">
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
          <div className="flex justify-center items-center mt-2">
            <Link
              className="ml-4 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-sky-600 text-white hover:bg-slate-700 -my-2.5 z-3"
              href="/takvim"
            >
              <span className="flex z-6">Reservasyon Yap</span>
            </Link>
            <nav aria-label="Page navigation example" className="pagination-nav mt-5">
              <ul className="inline-flex items-center space-x-1">
                <li>
                  <a
                    href="#"
                    onClick={() => currentPage <= 1 ? null : handlePageChange(currentPage - 1)}
                    className="flex items-center justify-center w-8 h-8 ml-0 text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      onClick={() => handlePageChange(i + 1)}
                      className={`flex items-center justify-center w-8 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === i + 1 ? 'z-10 text-blue-600 border-blue-300 bg-blue-500 hover:bg-blue-500 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : ''
                        }`}
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
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="max-w-full mx-auto flex justify-center items-center flex-col p-6">
            <div className="flex justify-around items-center w-full mb-2">
              <p className="text-3xl">Kişisel bilgiler</p>
              <button onClick={handleSubmit} type="button" className="px-4 py-2 bg-sky-500 text-white rounded-md">
                Kaydet
              </button>
            </div>
            <h1 className="text-2xl font-bold mb-4 mt-5">Ayarlar Paneli</h1>
            <form className="space-y-4 md:w-1/2 w-full">
              <div>
                <label htmlFor="isim" className="block text-sm font-medium">
                  İsim:
                </label>
                <input
                  type="text"
                  id="isim"
                  name="isim"
                  value={isim}
                  onChange={(e) => setIsim(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="soyisim" className="block text-sm font-medium">
                  Soyisim:
                </label>
                <input
                  type="text"
                  id="soyisim"
                  name="soyisim"
                  value={soyisim}
                  onChange={(e) => setSoyisim(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label htmlFor="telefon" className="block text-sm font-medium">
                  Telefon:
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={telefon}
                  onChange={(e) => setTelefon(formatNumber(e.target.value))}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  pattern="[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  E-posta:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div>
                <label htmlFor="dogumTarihi" className="block text-sm font-medium">
                  Doğum Tarihi:
                </label>
                <input
                  type="date"
                  id="dogumTarihi"
                  name="dogumTarihi"
                  value={dogumTarihi}
                  onChange={(e) => setDogumTarihi(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </form>
          </div>
        </>
      ) : (
        <Giris />
      )}
    </PageWrapper>
  );
}
