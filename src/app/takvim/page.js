"use client"
import PageWrapper from '@/components/main/pageWrapper';
import axios from 'axios';
import evoCalendar from 'evo-calendar';
import 'evo-calendar/evo-calendar/css/evo-calendar.min.css';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const getData = async (token) => {
  try {
    const response = await axios.get(`http://softinyo.com:3696/api/reservations/${Cookies.get('id')}?token=${token}`);
    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const formattedDate = (res) => {
  const date = new Date(res);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).replace(',', '/');
  return formattedDate;
};

export const formattedTime = (res) => {
  const date = new Date(res);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  return formattedTime;
};


const Takvim = () => {
  const router = useRouter();
  const [data, setData] = useState(false);
  const [hak, setHak] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(`${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`);
  const [time, setTime] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cevap = await getData(Cookies.get('token'));
        console.log(cevap);
        if (cevap.status === true) {
          setData(cevap.data);
          setHak(cevap.kalanHak);
        }
        setData(cevap.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(data)
  useEffect(() => {
    if (data) {
      $("#calendar").evoCalendar({
        language: 'tr',
        calendarEvents: data.map((data) => ({
          name: `Terapist: ${data.ad} ${data.soyad}`,
          badge: `${formattedTime(data.startDate)}-${formattedTime(data.endDate)}`,
          date: [formattedDate(data.startDate), formattedDate(data.startDate)],
          type: "event"
        }))
      });
    }

    $("#calendar").on('selectDate', function (event, date) {
      setDate(date);
      console.log(date)
    });

  }, [data]);

  const addReservation = async () => {
    try {
      const parts = date.split('/');
      console.log(parts);

      const formattedDate = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;

      const response = await axios.post(`http://softinyo.com:3696/api/add/reservation`, {
        startDate: `${formattedDate} ${time}:00:00`,
        endDate: `${formattedDate} ${time}:40:00`,
        therapistID: '1',
        userID: Cookies.get('id'),
        meetLink: 'https://example.com/meet',
        token: Cookies.get('token')
      });
      if (response.data.status) {
        Swal.fire({
          title: 'Randevu Alındı!',
          text: `Randevu Linki: ${response.data.meetLink}`,
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Tamam',
          confirmButtonColor: '#4C9AFF',
          customClass: {
            confirmButton: 'px-4 py-2 text-white rounded-md focus:outline-none',
          },
        }).then((result) => {
          if (result.isConfirmed) {
          }
        });
      } else if (response.data.message === "You do not have any remaining reservation rights.") {
        Swal.fire({
          title: 'Oops...',
          text: 'Krediniz yetersiz lütfen randevu hakkı alınız.',
          icon: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Tamam',
          confirmButtonColor: '#4C9AFF',
          customClass: {
            confirmButton: 'px-4 py-2 text-white rounded-md focus:outline-none',
          }
        });
      } else if (response.data.message === 'You can only make reservations for today or tomorrow.') {
        Swal.fire({
          text: 'Geçmiş Tarihlere Randevu Alınamaz.',
          icon: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Tamam',
          confirmButtonColor: '#4C9AFF',
          customClass: {
            confirmButton: 'px-4 py-2 text-white rounded-md focus:outline-none',
          }
        });
      }
    } catch (error) {
      console.error('Hata:', error);
      Swal.fire({
        title: 'Oops...',
        text: 'Bir şeyler yanlış gitti.',
        icon: 'question',
        showConfirmButton: true,
        confirmButtonText: 'Tamam',
        confirmButtonColor: '#4C9AFF',
        customClass: {
          confirmButton: 'px-4 py-2 text-white rounded-md focus:outline-none',
        }
      });
    }
  };
  console.log(hak)

  return (
    <>
      <PageWrapper>
        {data ?
          <div className='relative'>
            <div className='w-full text-end my-5 text-2xl'>{`Kalan Randevu Hakkınız: ${hak}`}</div>
            <div id="calendar"></div>
            <button onClick={openModal} data-aos="fade-left" type="button" class="reservationButton absolute right-[50px] md:right-[6%] lg:right-[3%] bottom-[10px] lg:bottom-[30px] z-50 w-[250px] lg:w-[300px] hover:scale-105 transition-all text-lg whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-sky-600 hover:bg-sky-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" data-toggle="modal" data-target="#exampleModal">
              Randevu Al
            </button>
          </div> : <div></div>}
      </PageWrapper>
      <div>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99]">
            <div className="bg-white w-full max-w-[800px] p-6 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-lg font-bold text-center">Randevu Saati Seçiniz</h5>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Close"
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button id='btnTakvim' className="bg-gray-100 h-24 rounded-md flex items-center justify-center text-lg" onMouseOver={() => setTime(10)} onClick={() => { setTime(10); }}>10:00</button>
                <button id='btnTakvim' className="bg-gray-100 h-24 rounded-md flex items-center justify-center text-lg" onMouseOver={() => setTime(11)} onClick={() => { setTime(11); }}>11:00</button>
                <button id='btnTakvim' className="bg-gray-100 h-24 rounded-md flex items-center justify-center text-lg" onMouseOver={() => setTime(12)} onClick={() => { setTime(12); }}>12:00</button>
                <button id='btnTakvim' className="bg-gray-100 h-24 rounded-md flex items-center justify-center text-lg" onMouseOver={() => setTime(13)} onClick={() => { setTime(13); }}>13:00</button>
                <button id='btnTakvim' className="bg-gray-100 h-24 rounded-md flex items-center justify-center text-lg" onMouseOver={() => setTime(14)} onClick={() => { setTime(14); }}>14:00</button>
                <button id='btnTakvim' className="bg-gray-100 h-24 rounded-md flex items-center justify-center text-lg" onMouseOver={() => setTime(15)} onClick={() => { setTime(15); }}>15:00</button>
                <button id='btnTakvim' className="bg-gray-100 h-24 rounded-md flex items-center justify-center text-lg" onMouseOver={() => setTime(16)} onClick={() => { setTime(16); }}>16:00</button>
                <button id='btnTakvim' className="bg-gray-100 h-24 rounded-md flex items-center justify-center text-lg" onMouseOver={() => setTime(17)} onClick={() => { setTime(17); }}>17:00</button>
                <button id='btnTakvim' className="bg-gray-100 h-24 rounded-md flex items-center justify-center text-lg" onMouseOver={() => setTime(18)} onClick={() => { setTime(18); }}>18:00</button>
                <button id='btnTakvim' className="bg-gray-100 h-24 rounded-md flex items-center justify-center text-lg" onMouseOver={() => setTime(19)} onClick={() => { setTime(19); }}>19:00</button>
                <button id='btnTakvim' className="bg-gray-100 h-24 rounded-md flex items-center justify-center text-lg" onMouseOver={() => setTime(20)} onClick={() => { setTime(20); }}>20:00</button>
                <button id='btnTakvim' className="bg-gray-100 h-24 rounded-md flex items-center justify-center text-lg" onMouseOver={() => setTime(21)} onClick={() => { setTime(21); }}>21:00</button>
              </div>
              <div className='flex w-full justify-center mt-8'>
                <button className='px-4 py-2 text-white rounded-md focus:outline-none bg-[#4C9AFF]' onClick={() => { addReservation(); closeModal(); }}>
                  Randevu Al
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Takvim;