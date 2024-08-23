"use client";
import PageWrapper from "@/components/main/pageWrapper";
import React, { useEffect, useState } from "react";
import BlogListele from "./blogListele";

export const metadata = {
  title: "Blog",
  description: "asdds",
};

const BlogPage = () => {
 
  return (
    <PageWrapper title={"Blog"}>
      <BlogListele/>
    </PageWrapper>
  );
};

export default BlogPage;
