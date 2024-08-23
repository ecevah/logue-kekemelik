'use client'
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedNumber = phone.replace(/\s/g, '');
    axios
      .post(`http://softinyo.com:3696/api/add/user`, {
        ad: name,
        soyad: surname,
        telNo: cleanedNumber,
        dogumTarih: birthdate,
        mail: ''
      })
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Kayıt Başarılı',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          window.location.href = '/giris';
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Oops...',
          'Bir şeyler yanlış gitti.',
          'question'
        )
      });
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
    <div className='h-[calc(100vh-450px)] mt-[150px] mb-[50px] flex justify-center items-center'>
      <div className='mt-7 md:w-[40%] w-[90%] bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>Kayıt Ol</h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
              Zaten hesabınız var mı?&nbsp;
              <a className='text-sky-600 decoration-2 hover:underline font-medium' href='/giris'>
                Giriş yap
              </a>
            </p>
          </div>

          <div className='mt-5'>
            <form onSubmit={handleSubmit}>
              <div className='grid gap-y-4'>
                <div>
                  <label htmlFor='name' className='block text-sm mb-2 dark:text-white'>
                    İsim
                  </label>
                  <div className='relative'>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={name}
                      onChange={handleNameChange}
                      className='py-3 px-4 block w-full border-solid border-[1px] border-gray-200 rounded-md text-sm focus:border-sky-500 focus:ring-sky-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                      required
                      aria-describedby='name-error'
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
                        <path
                          d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'
                        />
                      </svg>
                    </div>
                  </div>
                  <p className='hidden text-xs text-red-600 mt-2' id='name-error'>
                    Lütfen geçerli bir isim girin
                  </p>
                </div>
                <div>
                  <label htmlFor='surname' className='block text-sm mb-2 dark:text-white'>
                    Soyisim
                  </label>
                  <div className='relative'>
                    <input
                      type='text'
                      id='surname'
                      name='surname'
                      value={surname}
                      onChange={handleSurnameChange}
                      className='py-3 px-4 block w-full border-solid border-[1px] border-gray-200 rounded-md text-sm focus:border-sky-500 focus:ring-sky-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                      required
                      aria-describedby='surname-error'
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
                        <path
                          d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'
                        />
                      </svg>
                    </div>
                  </div>
                  <p className='hidden text-xs text-red-600 mt-2' id='surname-error'>
                    Lütfen geçerli bir soyisim girin
                  </p>
                </div>
                <div>
                  <label htmlFor='phone' className='block text-sm mb-2 dark:text-white'>
                    Telefon Numarası
                  </label>
                  <div className='relative'>
                    <input
                      type='tel'
                      id='number'
                      name='number'
                      value={phone}
                      onChange={(e) => setPhone(formatNumber(e.target.value))}
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
                        <path
                          d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'
                        />
                      </svg>
                    </div>
                  </div>
                  <p className='hidden text-xs text-red-600 mt-2' id='phone-error'>
                    Lütfen geçerli bir telefon numarası girin
                  </p>
                </div>
                <div>
                  <label htmlFor='birthdate' className='block text-sm mb-2 dark:text-white'>
                    Doğum Tarihi
                  </label>
                  <div className='relative'>
                    <input
                      type='date'
                      id='birthdate'
                      name='birthdate'
                      value={birthdate}
                      onChange={handleBirthdateChange}
                      className='py-3 px-4 block w-full border-solid border-[1px] border-gray-200 rounded-md text-sm focus:border-sky-500 focus:ring-sky-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                      required
                      aria-describedby='birthdate-error'
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
                        <path
                          d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'
                        />
                      </svg>
                    </div>
                  </div>
                  <p className='hidden text-xs text-red-600 mt-2' id='birthdate-error'>
                    Lütfen geçerli bir doğum tarihi girin
                  </p>
                </div>
              </div>

              <div className='mt-6'>
                <button
                  type='submit'
                  className='w-full py-3 px-4 text-white bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600'
                >
                  Kayıt Ol
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
