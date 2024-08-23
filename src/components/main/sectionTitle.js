import React from 'react'

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div data-aos="fade-down">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-3xl dark:text-white">{title}</h2>
            {subtitle && <p className="mt-4 md:text-lg text-gray-600 dark:text-gray-400">Quickly get a project started with any of our examples ranging from using parts of the UI to custom components and layouts using Tailwind CSS.</p>}
        </div>
    )
}

export default SectionTitle