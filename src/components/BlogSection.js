// src/components/BlogSection.js
import React from 'react';

const BlogSection = () => {
  return (
    <section className="blog-area section-gap" id="blog">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10">Latest from our Blog</h1>
              <p>Who are in extremely love with eco-friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {['b1', 'b2', 'b3'].map((img, index) => (
            <div className="col-lg-4 col-md-6 single-blog" key={index}>
              <div className="thumb">
                <img className="img-fluid" src={`img/${img}.jpg`} alt="" />
              </div>
              <div className="details">
                <p className="date">10th March 2019</p>
                <h4>Blog Title {index + 1}</h4>
                <p>
                  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
