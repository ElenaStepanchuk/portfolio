import { PageWrapper } from 'components';
import { gsap } from 'gsap';
import React, { useRef, useEffect, useLayoutEffect } from 'react';
import './contact.css';

const Contact = () => {
  const contact = useRef();

  console.clear();
  let count = 0;
  const targets = document.querySelectorAll('.box');
  gsap.set(targets, { xPercent: 100 });
  gsap.set(targets[0], { xPercent: 0 });

  // Next button
  function slideOneNext() {
    gsap.fromTo(
      targets[count],
      { xPercent: 0, zIndex: 0 },
      { delay: 0.2, duration: 1.2, xPercent: 0, zIndex: -10 }
    );
    count = count < targets.length - 1 ? ++count : 0;
    gsap.fromTo(
      targets[count],
      { xPercent: 100, zIndex: 10 },
      { duration: 1.2, xPercent: 0, zIndex: 0 }
    );
  }
  // nextButton.addEventListener('click', function () {
  //   slideOneNext();
  // });

  // Previous button
  function slideOnePrev() {
    gsap.fromTo(
      targets[count],
      { xPercent: 0, zIndex: 10 },
      { xPercent: 0, zIndex: 0 }
    );
    gsap.fromTo(
      targets[count],
      { xPercent: 0, zIndex: 0 },
      { delay: 0, duration: 1.2, xPercent: 100, zIndex: -10 }
    );
    count = count < targets.length ? --count : 0;
  }
  // prevButton.addEventListener('click', function () {
  //   slideOnePrev();
  // });

  return (
    <PageWrapper>
      <div className="left_page">
        <h1>My contacts page</h1>
        <div className="box-container">
          <div className="box box01">SLIDE-01</div>
          <div className="box box02">SLIDE-02</div>
          <div className="box box03">SLIDE-03</div>
          <div className="box box04">SLIDE-04</div>
        </div>

        <div className="controls">
          <button id="prevButton" onClick={slideOnePrev}>
            Prev
          </button>
          <button id="nextButton" onClick={slideOneNext}>
            Next
          </button>
        </div>
      </div>
      <div className="right_page"></div>
    </PageWrapper>
  );
};
export default Contact;
