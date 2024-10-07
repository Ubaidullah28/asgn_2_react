// src/components/Review.js
import React from 'react';

const Review = () => {
  return (
    <section className="review-area section-gap" id="review">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10">Customer Reviews</h1>
              <p>Who are in extremely love with eco-friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {['r1', 'r2'].map((img, index) => (
            <div className="col-lg-6 col-md-6 single-review" key={index}>
              <img src={`img/${img}.png`} alt="" />
              <div className="title d-flex flex-row">
                <h4>Lorem Ipsum</h4>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
              <p>
                Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
              </p>
            </div>
          ))}
        </div>
        <div className="row counter-row">
          {['2536 Happy Clients', '7562 Total Projects', '2013 Cups Coffee', '10536 Total Submitted'].map((text, index) => (
            <div className="col-lg-3 col-md-6 single-counter" key={index}>
              <h1 className="counter">{text.split(' ')[0]}</h1>
              <p>{text.split(' ').slice(1).join(' ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
