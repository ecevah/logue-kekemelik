import React from "react";
import SectionTitle from "./sectionTitle";

const PageWrapper = ({ title, subTitle, children }) => {
  return (
    <div className="min-h-screen w-full h-full" data-aos="fade-up">
      <div className="max-w-container bg-white  mt-52 mb-16 mx-auto h-full p-8 rounded-xl">
        {title && <div className="w-full text-center mb-12"><SectionTitle title={title} subtitle={subTitle}/></div>}
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
