
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
require("dotenv").config();

async function getData(token) {
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

const Header = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData(Cookies.get('token')).then((cevap) => {
      if (cevap.status == true) {
        setData(cevap.data);
      }
    });
  }, []);
  const pathname = usePathname();
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  let menuler = [
    {
      title: "Anasayfa",
      href: "/",
    },
    {
      title: "Nasıl Çalışır?",
      href: "/nasil-calisir",
    },
    {
      title: "Takip Seansı",
      href: "/randevu",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Hakkımızda",
      href: "/hakkimizda",
    },
  ];

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <header
      className="absolute lg:top-10 z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900 top-[0px] bg-white lg:bg-transparent"
      data-aos="fade-down"
    >
      <nav
        aria-label="Global"
        className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-2 lg:py-0"
      >
        <div className="relative flex items-center py-4 lg:py-[2.125rem] flex-row justify-between ">
          <Link className="flex-none text-slate-900" href="/">
            <span className="sr-only">Tailwind UI</span>
            <img
              src={`${process.env.HOST}/assets/images/logo.png?v0.1`}
              alt={"Logo"}
              width={200}
              height={57.82}
              quality={100}
            />
          </Link>
          <div className="hidden lg:flex lg:items-center mx-auto">
            {menuler.map((menu, i) => {
              const isActive = pathname === menu.href;
              return (
                <Link
                  className={`ml-8 border-b-2 py-1 transition-[border] ${isActive ? "border-sky-600" : "border-transparent"
                    }`}
                  href={menu.href}
                  key={"menu-" + i}
                >
                  {menu.title}
                </Link>
              );
            })}
          </div>
          <button
            type="button"
            className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden"
            onClick={toggleSlider}
          >
            <span className="sr-only">Open navigation</span>
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-slate-900"
            >
              <path
                d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="hidden lg:ml-8 lg:flex lg:items-center lg:pl-8 flex-col">
            <Link
              id="hesabımBtn"
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8 z-3"
              href="/hesabim"
            >
              <span className="flex z-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {data ? `${data.results[0].ad} ${data.results[0].soyad}` : 'Hesabım'}
              </span>
            </Link>
            <button className={`${data ? 'block' : 'hidden'} logOutBtn inline-flex justify-center mt-[4px] rounded-b-lg text-sm font-semibold py-2.5 px-4 bg-slate-600 text-white hover:bg-slate-700 -my-2.5 ml-8 z-0 md:w-[80%]`} onClick={() => { Cookies.remove('token'); window.location.href = '/'; }}>
              Çıkış Yap
            </button>
          </div>
          {isSliderOpen && (
            <div className="fixed inset-0 mt-2 bg-white z-40 p-4 md:px-6 lg:hidden">
              <div className="flex justify-between items-center">
                <Link className="flex-none text-slate-900" href="/">
                  <img
                    src={`https://loguekekemelik.com/assets/images/logo.png`}
                    alt={"Logo"}
                    width={200}
                    height={57.82}
                    quality={100}
                  />
                </Link>
                <span className="sr-only">Close navigation</span>
                <button
                  type="button"
                  className="h-8 w-8 flex items-center justify-center"
                  onClick={toggleSlider}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 stroke-slate-900"
                  >
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col justify-between h-[80vh] items-center">
                <div />
                <div className="flex flex-col mt-8 items-center" data-aos="fade-left">
                  {menuler.map((menu, i) => {
                    const isActive = pathname === menu.href;
                    return (
                      <Link
                        className={`mb-6 text-xl font-semibold ${isActive ? "text-sky-600" : "text-slate-900"
                          }`}
                        href={menu.href}
                        key={"menu-" + i}
                        onClick={() => setIsSliderOpen(false)}
                      >
                        {menu.title}
                      </Link>
                    );
                  })}
                </div>
                <div className="flex flex-col h-[75px] justify-between items-center">
                  <Link
                    id="hesabımBtn"
                    className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-5 z-3"
                    href="/hesabim"
                    onClick={() => setIsSliderOpen(false)}
                  >
                    <span className="flex z-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {data ? `${data.results[0].ad} ${data.results[0].soyad}` : 'Hesabım'}
                    </span>
                  </Link>
                  <button className={`${data ? 'block' : 'hidden'} inline-flex justify-center mt-[1px] rounded-lg text-sm font-semibold py-2 bg-slate-600 text-white hover:bg-slate-700 -my-2.5 ml-5 z-0 md:w-[80%] w-[127px]`} onClick={() => { Cookies.remove('token'); window.location.href = '/'; }}>
                    Çıkış Yap
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;