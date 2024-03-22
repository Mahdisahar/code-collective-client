import '../CheckoutPage/CheckoutPage.scss';

import logo from '../../assets/logos/commerce-site-logo_22.png';
import padlock from '../../assets/icons/padlock.png';
import check from '../../assets/icons/circle.png';
import voucher from '../../assets/icons/voucher.png';
import redeem from "../../assets/icons/star_3386686.png";
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
const Base_URL = 'http://localhost:8080';

function CheckoutPage() {
  const [selectcheckout, setSelectCheckout] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  const [points, setPoints] = useState(1000); // get the value from backend
  const [redeemPoints, setRedeemPoints] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false); // State to track if discount has been applied
  const [totalPrice, setTotalPrice] = useState(76.16); // get the value from backend
  const [discountValue, setDiscountValue] = useState(0);

  const handleRedeemPoints = () => {

    // set points to price
     const discount = redeemPoints * 0.0025; // what is the value of 1 point? eg  1000 points = $2.5
     const updatedTotalPrice = totalPrice - discount;

    setDiscountValue(discount);
    setPoints((prevPoints) => prevPoints - redeemPoints);
    setRedeemPoints(0); // Reset redeemPoints after redeeming
    setDiscountApplied(true); // Set discountApplied to true after redeeming points
    setTotalPrice(updatedTotalPrice); 
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setRedeemPoints(value === '' ? '' : parseInt(value));
  };

  useEffect(() => {
    const getcheckout = async () => {
      try {
        const response = await axios.get(`${Base_URL}/checkout`);
        const checkoutData = response.data;
        setSelectCheckout(checkoutData);
      } catch (error) {
        console.log('Error fetching videos', error);
      }
    };
    getcheckout();
  }, []);

  const toUpperCase = (str) => {
    return str.toUpperCase();
  }

  return (
    <>
      <header className='checkout-header'>
        <Link to='/'>
          <img className='checkout-header__logo' src={logo} alt='lush-logo' />
        </Link>
        <div className='checkout-header__container'>
          <div className='checkout-header__title-wrapper'>
            <span className='checkout-header__title'>Checkout</span>
            <img
              src={padlock}
              alt='padlock-icon'
              className='checkout-header__icon'
            />
          </div>
          <p className='checkout-header__price'>$76.16</p>
        </div>
      </header>

      <main>
        <div className='checkout-page'>

          {/* Voucher */}
          <section>
            <form
              id="voucher-form"
              className="checkout-page__form"
              onSubmit={handleSubmit}
            >
              <div className="checkout-page__voucher">
                <img
                  src={voucher}
                  alt="voucher-icon"
                  className="checkout-page__icon"
                />
                <h2 className="checkout-page__title">Add Voucher</h2>
              </div>
              <div className="checkout-page__voucher-info">
                <input
                  type="text"
                  name="voucher"
                  id="voucher"
                  className="checkout-page__code"
                  placeholder="Your voucher code"
                ></input>
               
              </div>
              <button className="checkout-page__apply">Apply</button>
            </form>
          </section>

          {/* TODO: rename BEM and structure of jsx elements */}
          {/* Redeem points */}
          <section>
            <form
              id="redeem"
              className="checkout-page__form"
              onSubmit={handleSubmit}
            >
              <div className="checkout-page__redeem">
                <h2 className="checkout-page__title">Your Points</h2>
                <p className="checkout-page__points">
                  {points}
                  <img
                    src={redeem}
                    alt="redeem-icon"
                    className="checkout-page__icon"
                  />
                  points
                </p>
              </div>
              <div className="checkout-page__redeem-form">
                <input
                  type="number"
                  name="redeem"
                  id="redeem"
                  className="checkout-page__code"
                  placeholder="Enter points to redeem"
                  value={redeemPoints}
                  onChange={handleInputChange}
                ></input>
                
                {discountApplied && <p className="checkout-page__disc-message"> <img
                    src={check}
                    alt="check-icon"
                    className="checkout-page__icon"
                  /> Your discount has been applied</p>}
              </div>
              <button
                  className="checkout-page__button"
                  onClick={handleRedeemPoints}
                >
                  Redeem
                </button>
            </form>
          </section>

          {/* Order Summary */}
          <section>
            <h2 className='checkout-page__header'>Summary & review</h2>
            <div className='checkout-page__details'>
              {selectcheckout.map((checkout) => (
                <ul key={checkout.id} className='checkout-page__list'>
                  <li className='checkout-page__items'>
                    <div className='outer-container'>
                      <div className='checkout-page__col-1'>
                        <img
                          src={checkout.image}
                          alt='product'
                          className='checkout-page__image'
                        />
                        <div>
                          <p className='checkout-page__prod-title'>
                            {checkout.title}
                          </p>
                          <p className='checkout-page__prod-type'>
                            {toUpperCase(checkout.product)}
                          </p>
                          <div className='checkout-page__row-1'>
                            <p className='checkout-page__vol'>
                              {checkout.volum}
                            </p>
                            <p className='checkout-page__qty'>
                              QTY:{checkout.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className='checkout-page__price'>${checkout.price}</p>
                    </div>
                    <div className='checkout-page__row-2'>
                      <img
                        src={check}
                        alt='instock-icon'
                        className='checkout-page__icon'
                      />
                      <p className='checkout-page__instock'>In stock</p>
                      <p className='checkout-page__name'>
                        Lush Cosmetics Center
                      </p>
                    </div>

                    <p className='checkout-page__order'>
                      Order by 19:00, collect in-store today
                    </p>
                  </li>
                </ul>
              ))}
            </div>
          </section>

          {/* Pricing Summary */}
          <section className='checkout-page__pricing-section'>
            <div className='checkout-page__row-1 checkout-page__row-1--spacing'>
              <p>Subtotal</p>
              <p>$68.00</p>
            </div>

           {/* Add conditional rendering of discount applied */}
           {!discountApplied? '' : (
             <div className="checkout-page__row-1 checkout-page__row-1--spacing">
             <p>Discount applied</p>
             <p>${discountValue}</p>
           </div>
            )}
           <div className="checkout-page__row-1 checkout-page__row-1--spacing">
              <p>Delivery</p>
              <p>$0.00</p>
            </div>
            <div className="checkout-page__row-1 checkout-page__row-1--spacing">
              <p>Tax</p>
              <p>$8.16</p>
            </div>
            <div className="checkout-page__row-1 checkout-page__row-1--spacing">
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default CheckoutPage;
