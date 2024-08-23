import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import moment from "moment/moment";
import 'moment/locale/tr'

var getSlug = require('speakingurl');
const BlogCard = ({ id, baslik, icerik, thumbnail, createdAt }) => {
  if (createdAt != null) {
    moment.locale('tr');
    var tarih = moment(createdAt).format('LLLL');
    var seoURL = getSlug(baslik);
  }
  return (
    <>
      {/* Card */}
      <Link
        className="group rounded-xl overflow-hidden bg-white p-5 shadow-sm w-full md:w-auto"
        data-aos="fade-up"
        href={baslik ? `/blog/${seoURL}-${id}` : "#"}
      >
        {baslik ? (
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <>
              <img
                className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src={thumbnail}
                alt="Image Description"
              />
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                {tarih}
              </span>
            </>
          </div>
        ) : (
          <Skeleton className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden" />
        )}
        <div className="mt-7">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
            {baslik || <Skeleton />}
          </h3>
          <p className="mt-3 text-gray-800 dark:text-gray-200">
            {icerik ? icerik.slice(0, 100).trim() + "..." : <Skeleton />}
          </p>
          {baslik ? (
            <p className="mt-5 inline-flex items-center gap-x-1.5 text-sky-600 decoration-2 font-medium float-right">
              Devamını Oku
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </p>
          ) : (
            <Skeleton className="mt-5 float-right" width={128} />
          )}
        </div>
      </Link>
      {/* End Card */}
    </>
  );
};

export default BlogCard;
