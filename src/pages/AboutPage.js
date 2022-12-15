import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/about.jpg';
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Welcome to our online sneaker store! We're a team of sneaker
            enthusiasts who have come together to create a one-stop destination
            for all your sneaker needs. Our goal is to provide the best
            selection of sneakers at the most competitive prices, and to make it
            easy for you to find the perfect pair for your style and needs.{' '}
          </p>
          <p>
            At our website, you'll find a wide range of sneakers from the top
            brands in the industry, including Nike, Adidas, Champion, and many
            more. We offer a variety of styles, from high-performance running
            shoes to classic, timeless sneakers. And we're constantly updating
            our inventory with the latest releases, so you'll always have access
            to the newest and most sought-after sneakers on the market.
          </p>
          <p>
            We're dedicated to providing exceptional customer service and
            support. If you have any questions or need help finding the right
            sneaker, our team is here to assist you. We also offer free shipping
            on all orders and a hassle-free return policy, so you can shop with
            confidence.
          </p>
          <p>
            Thank you for choosing our website for your sneaker needs. We hope
            you enjoy your shopping experience and find the perfect pair of
            sneakers to suit your style and needs.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 750px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
    width: 12rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
