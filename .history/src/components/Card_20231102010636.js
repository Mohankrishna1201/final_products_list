import React from 'react'

function Card() {
    return (
        <section className='card-container'>
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