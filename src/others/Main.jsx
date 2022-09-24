import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";
// import Carouser from "./Carouser";

const Main = () => {
  return (
    <>
      {/* <Carouser /> */}
      <div className="container_center">
        {Sdata.map((val, index) => {
          return (
            <Cards
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sName={val.sName}
              link={val.link}
            />
          );
        })}
        </div>
    </>
  );
};
export default Main;
