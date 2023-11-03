import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeart } from "react-icons/bs"
function Products() {
    return (
        <section className='card-container'>
            <section className='Card'>

                <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="" srcset="" />
                <div className="card-details" >

                    <h3 className='card-title'> Shoe</h3>

                    <section className='card-review'>

                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                        <span className='total-reviews'>4</span>

                    </section>

                    <section className='card-price'>
                        <div className='price'>
                            $200
                        </div>

                    </section>


                </div>
            </section>

        </section>
    )
}
export default Products;