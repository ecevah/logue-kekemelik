'use client'
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from "next/link";
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Giris() {
  const [number, setNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const cleanedNumber = number.replace(/\s/g, '');
      const response = await axios.post(`http://softinyo.com:3696/api/login?tel=${cleanedNumber}`);
      console.log(response.data);
      if (response.data.status === true) {
        Cookies.set('token', response.data.token)
        Cookies.set('id', response.data.data[0].id)
        Cookies.set('tel', response.data.data[0].telNo)
        window.location.href = '/';
      } else if (response.data.message === 'Lütfen Kayıtlı Bir Numara Giriniz') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Lütfen Kayıt Edilmiş Numaralardan Giriniz',
          footer: '<a href="/kayit">Kaydınız yok mu? Kayıt olmak için tıklayınız.</a>',
          confirmButtonColor: '#3085d6'
        })
      }
      else {
        Swal.fire(
          'Oops...',
          'Bir şeyler yanlış gitti.',
          'question'
        )
      }
    } catch (error) {
      console.error(error);
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
    <>
      <div className='md:h-[calc(100vh-450px)] mt-[150px] mb-[50px] flex justify-center items-center h-[calc(100vh-200px)]'>
        <div className='mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 md:w-[40%] w-[90%]'>
          <div className='p-4 sm:p-7'>
            <div className='text-center'>
              <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>Giriş Yap</h1>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400 ml-2'>
                Henüz bir hesabınız yok? &nbsp;
                <Link className='text-sky-600 decoration-2 hover:underline font-medium' href='/kayit'>
                  Kayıt olun!
                </Link>
              </p>
            </div>
            <div className='mt-5'>
              <form onSubmit={handleSubmit}>
                <div className='grid gap-y-4'>
                  <div>
                    <label htmlFor='number' className='block text-sm mb-2 dark:text-white'>
                      Telefon numarası giriniz
                    </label>
                    <div className='relative'>
                      <input
                        type='tel'
                        id='number'
                        name='number'
                        value={number}
                        onChange={(e) => setNumber(formatNumber(e.target.value))}
                        className='py-3 px-4 block w-full border-solid border-[1px] border-gray-200 rounded-md text-sm focus:border-sky-600 focus:ring-sky-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                        required
                        pattern='[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}'
                        placeholder='555 555 55 55'
                      />
                      <div className='hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3'>
                        <svg
                          className='h-5 w-5 text-red-500'
                          width='16'
                          height='16'
                          fill='currentColor'
                          viewBox='0 0 16 16'
                          aria-hidden='true'
                        >
                          <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
                  >
                    Giriş Yap
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
