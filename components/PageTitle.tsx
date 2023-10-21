import React from "react";
interface PageTitleProps {
  main: string;
  sub: string;
}

const PageTitle = ({ main, sub }: PageTitleProps) => {
  return (
    <div className="px-4 mt-4 md:mt-0">
      <h1 className="font-bold text-2xl leading-4">{main}</h1>
      <p className="py-3 text-gray-500/90 font-medium text-base">{sub}</p>
    </div>
  );
};

export default PageTitle;
