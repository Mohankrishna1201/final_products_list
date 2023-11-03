import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
    return (
        <>

            <section className="card">
                <img src={img} alt={title} className="card-img" />
                <div className="card-details">
                    <h3 className="card-title">{title}</h3>
                    <section className="card-reviews">
                        {star} {star} {star} {star}
                        <span className="total-reviews">{reviews}</span>
                    </section>
                    <section className="card-price">
                        <div className="price">
                            <del>{prevPrice}</del> {newPrice}
                        </div>

                    </section>
                </div>

                <img className="bag" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f759bbc-55a4-4354-a5e1-ead040ee6ad2?" alt="" srcset="" />

            </section>


        </>
    );
};




export default Card;
