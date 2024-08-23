"use client"
import PageWrapper from "@/components/main/pageWrapper";
import { useEffect, useState } from "react";
async function getData() {
  const res = await fetch(`http://softinyo.com:3696/blog/list`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogDetayPage = ({ params }) => {
  let { id } = params;
  id = id.split("-");
  id = id[id.length - 1];
  let [bloglar, setBloglar] = useState(null);
  // const router = useRouter();
  useEffect(() => {
    // if (router.isReady){
    // console.log(router);
    getData().then((cevap) => {
      if (cevap.sonuc == true) {
        setBloglar(cevap.data);
      }
    });
    // }
  }, []);
  return <PageWrapper title={params.title}>
    <h4 className="w-full text-center">{params.title}</h4>
    <p className="w-full text-center">{params.text}</p>
  </PageWrapper>;
};

export default BlogDetayPage;
