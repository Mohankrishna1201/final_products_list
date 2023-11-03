import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from "react-icons/bs"
function Card({ img, title, star, reviews, prevPrice, newPrice }) {
    return (
        <section className='card-container'>
            <section className='card'>

                <img src={img} alt="" srcset="" className='card-img' />
                <div className="card-details" >

                    <h3 className='card-title'> Shoe</h3>

                    <section className='card-reviews'>

                        <AiFillStar className='ratings-start' /> <AiFillStar className='ratings-start' /> <AiFillStar className='ratings-start' /> <AiFillStar className='ratings-start' />
                        <span className='total-reviews'>4</span>

                    </section>

                    <section className='card-price'>
                        <div className='price'>
                            <p> $200</p>
                        </div>
                        <BsFillBagHeartFill className='bag-icon' />
                    </section>


                </div>
            </section>

            <section className='card'>

                <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="" srcset="" className='card-img' />
                <div className="card-details" >

                    <h3 className='card-title'> Shoe</h3>

                    <section className='card-reviews'>

                        <AiFillStar className='ratings-start' /> <AiFillStar className='ratings-start' /> <AiFillStar className='ratings-start' /> <AiFillStar className='ratings-start' />
                        <span className='total-reviews'>4</span>

                    </section>

                    <section className='card-price'>
                        <div className='price'>
                            <p> $200</p>
                        </div>
                        <BsFillBagHeartFill className='bag-icon' />
                    </section>


                </div>
            </section>
            <section className='card'>

                <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="" srcset="" className='card-img' />
                <div className="card-details" >

                    <h3 className='card-title'> Shoe</h3>

                    <section className='card-reviews'>

                        <AiFillStar className='ratings-start' /> <AiFillStar className='ratings-start' /> <AiFillStar className='ratings-start' /> <AiFillStar className='ratings-start' />
                        <span className='total-reviews'>4</span>

                    </section>

                    <section className='card-price'>
                        <div className='price'>
                            <p> $200</p>
                        </div>
                        <BsFillBagHeartFill className='bag-icon' />
                    </section>


                </div>
            </section>
            <section className='card'>

                <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="" srcset="" className='card-img' />
                <div className="card-details" >

                    <h3 className='card-title'> Shoe</h3>

                    <section className='card-reviews'>

                        <AiFillStar className='ratings-start' /> <AiFillStar className='ratings-start' /> <AiFillStar className='ratings-start' /> <AiFillStar className='ratings-start' />
                        <span className='total-reviews'>4</span>

                    </section>

                    <section className='card-price'>
                        <div className='price'>
                            <p> $200</p>
                        </div>
                        <BsFillBagHeartFill className='bag-icon' />
                    </section>


                </div>
            </section>

        </section>

    )
}

export default Card;