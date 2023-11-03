import React from 'react'
import { AiFillStar } from 'react-icons/ai';

function Products() {
    return (
        <section className='card-container'>
            <section className='Card'>

                <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="" srcset="" />
                <div className="card-details" >

                    <h3 className='card-title'> Shoe</h3>

                    <section className='card-review'>

                        <AiFillStar />
                    </section>


                </div>
            </section>

        </section>
    )
}
export default Products;