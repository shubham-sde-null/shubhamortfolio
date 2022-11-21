import React from "react";
import "./Testimonial.css";
import AVTR1 from "../../assests/avatar1.jpg";
import AVTR2 from "../../assests/avatar2.jpg";
import AVTR3 from "../../assests/avatar3.jpg";
import AVTR4 from "../../assests/avatar4.jpg";
import Carousel from "react-material-ui-carousel";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const data = [
  {
    avatar: AVTR1,
    name: "John Stones",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qua autem explicabo id maxime praesentium asperiores excepturi similique deserunt ipsam velit earum, est in impedit incidunt Quidem, saepe Odio aliquid?",
  },
  {
    avatar: AVTR2,
    name: "Bruce Wills",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qua autem explicabo id maxime praesentium asperiores excepturi similique deserunt ipsam velit earum, est in impedit incidunt Quidem, saepe Odio aliquid?",
  },
  {
    avatar: AVTR3,
    name: "Henry Cole",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qua autem explicabo id maxime praesentium asperiores excepturi similique deserunt ipsam velit earum, est in impedit incidunt Quidem, saepe Odio aliquid?",
  },
  {
    avatar: AVTR4,
    name: "Harry young",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qua autem explicabo id maxime praesentium asperiores excepturi similique deserunt ipsam velit earum, est in impedit incidunt Quidem, saepe Odio aliquid?",
  },
];
function Testimonial() {
  return (
    <section id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonioal</h2>
      <Carousel className=" container testimonial__container">
        {data.map(({ avatar, name, review, index }) => (
          <article key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="Avatar One" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </article>
        ))}
      </Carousel>
    </section>
  );
}

export default Testimonial;
