import React from "react";
import TagLine from "../TagLine/TagLine";
import "./Banner.scss";

interface BannerProps {
  children: React.ReactNode;
  bannerImage: string;
}
export const Banner: React.FC<BannerProps> = ({ children, bannerImage }) => {
  return (
    <>
      <section id="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="container">
          {children}
          <button type="button">Enquire</button>
        </div>
      </section>
      <TagLine />
    </>
  );
};

interface BannerContentProps {
  title: string;
  tagLine1: string;
  tagLine2: string;
  price: string;
  paragraph?: string;
}
export const BannerContent = (props: BannerContentProps) => {
  return (
    <div className="bannerContent">
      <h1>{props.title}</h1>
      <h3>{props.tagLine1}</h3>
      <h2 className="price">{props.price}</h2>
      <h2>
        <span>{props.tagLine2}</span>
      </h2>
      <p>{props.paragraph}</p>
    </div>
  );
};
