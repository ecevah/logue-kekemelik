import BlogListele from '@/app/blog/blogListele'
import SectionTitle from '../main/sectionTitle'

const Blog = () => {
    return (
        <>
            {/* Card Blog */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <SectionTitle title={"Blog"} />
                </div>
                {/* End Title */}
                {/* Grid */}
                <BlogListele limit={3} />
                <div className="mt-12 text-center" >
                    <a data-aos="fade-up"
                        className="inline-flex justify-center items-center gap-x-2 text-center bg-sky-600 border hover:border-sky-300 text-sm text-white font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-slate-900 dark:border-gray-700 dark:hover:border-gray-600 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:shadow-slate-700/[.7] dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                        href="/blog"
                    >
                        Tümünü Görüntüle
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
                    </a>
                </div>

                {/* End Grid */}
            </div>

            {/* End Card Blog */}
        </>

    )
}

export default Blog