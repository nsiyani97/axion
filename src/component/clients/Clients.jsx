import React from "react";
import image1 from './assets/image 1.svg';
import image2 from './assets/image 2.svg';
import image3 from './assets/image 3.svg';
import image4 from './assets/image 4.svg';
import image5 from './assets/image 5.svg';
import image6 from './assets/image 6.svg';

function Clients() {
  return (
    <div>
      <center>
        <marquee
          class="align-content-center h-auto"
          behavior="scroll"
          direction="left"
          scrollamount="20"
          bgcolor="#F9F9FF"
        >
            <img className="m-5 px-5" src={image1}></img>
            <img className="m-5 px-5" src={image2}></img>
            <img className="m-5 px-5" src={image3}></img>
            <img className="m-5 px-5" src={image4}></img>
            <img className="m-5 px-5" src={image5}></img>
            <img className="m-5 px-5" src={image6}></img>
        </marquee>
      </center>
    </div>
  );
}

export default Clients;
