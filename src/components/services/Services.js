import React from "react";
import "./Services.css";
import CheckIcon from "@mui/icons-material/Check";
function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <CheckIcon className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <CheckIcon className="service__list-icons" />
              <p>On all screen sizes, the website is completely responsive. </p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>
                optimised code to increase the overall performance of the
                website.
              </p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>
                I can limit the function call to fetch API by using debouncing
                and throttleing. 
              </p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>I can handle both client-side and server-side errors.</p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Can work on PSDs or wireframes to make websites.</p>
            </li>

            <li>
              <CheckIcon className="service__list-icons" />
              <p>
                I have a clear knowledge of react hooks, and I can use them to
                make clean code.
              </p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>
                Made complex projects using Redux (a state management library)
                for managing the overall states of the application.
              </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <CheckIcon className="service__list-icons" />
              <p>
                I can make cross platform app using React Native for both
                Android and IOS.
              </p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Maximum code reuse & cost saving.</p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Strong performance for mobile environments.</p>
            </li>
          </ul>
        </article>
        {/* <article className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CheckIcon className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <CheckIcon className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
}

export default Services;
