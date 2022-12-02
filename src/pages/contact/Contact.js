import { PageWrapper } from 'components';
import { gsap } from 'gsap';
import './contact.css';

const Contact = () => {
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
      <div class="left_page">
        <h1>My contacts page</h1>
        <div class="box-container">
          <div class="box box01">SLIDE-01</div>
          <div class="box box02">SLIDE-02</div>
          <div class="box box03">SLIDE-03</div>
          <div class="box box04">SLIDE-04</div>
        </div>

        <div class="controls">
          <button id="prevButton" onClick={slideOnePrev}>
            Prev
          </button>
          <button id="nextButton" onClick={slideOneNext}>
            Next
          </button>
        </div>
      </div>
      <div class="right_page"></div>
    </PageWrapper>
  );
};
export default Contact;
