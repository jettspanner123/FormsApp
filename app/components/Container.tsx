import React from "react";

const Container = ({ classStyles, pageProps }: any) => {
  return (
    <div className={`${classStyles} md:w-[80%] md:mx-auto`}>{pageProps}</div>
  );
};

export default Container;
