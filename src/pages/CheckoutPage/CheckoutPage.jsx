import "../CheckoutPage/CheckoutPage.scss";
// TODO: move this to public static backend files
import rosejam from "../../assets/images/rose_jam_shower_gel_2020_thumbnail_256.png";
import twilight from "../../assets/images/twilight_body_spray_2020_thumbnail_256.png";
import logo from "../../assets/logos/commerce-site-logo_22.png";
import padlock from "../../assets/icons/padlock.png";
import check from "../../assets/icons/circle.png";
import voucher from "../../assets/icons/voucher.png";

import { NavLink, Link } from "react-router-dom";

function CheckoutPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <header className="checkout-header">
        <Link to="/">
          <img className="checkout-header__logo" src={logo} alt="lush-logo" />
        </Link>
        <div className="checkout-header__container">
          <div className="checkout-header__title-wrapper">
            <span className="checkout-header__title">Checkout</span>
            <img
              src={padlock}
              alt="padlock-icon"
              className="checkout-header__icon"
            />
          </div>
          <p className="checkout-header__price">$76.16</p>
        </div>
      </header>
      <main>
        <div className="checkout-page">
          
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
                <button className="checkout-page__apply">Apply</button>
              </div>
            </form>
          </section>

          {/* Order Summary */}
          <section>
            <h2 className="checkout-page__header">Summary & review</h2>
            <div className="checkout-page__details">
              {/* TODO: get data dynamically? use array.map */}
              <ul className="checkout-page__list">
                <li className="checkout-page__items">
                  <div className="outer-container">
                    <div className="checkout-page__col-1">
                      <img
                        src={rosejam}
                        alt="rose-jam-shower-gel"
                        className="checkout-page__image"
                      />
                      <div>
                        <p className="checkout-page__prod-title">Rose Jam</p>
                        <p className="checkout-page__prod-type">SHOWER GEL</p>
                        <div className="checkout-page__row-1">
                          <p className="checkout-page__vol">250 ML</p>
                          <p className="checkout-page__qty"> QTY: 1</p>
                        </div>
                      </div>
                    </div>
                    <p className="checkout-page__price">$26.00</p>
                  </div>
                  <div className="checkout-page__row-2">
                    <img
                      src={check}
                      alt="instock-icon"
                      className="checkout-page__icon"
                    />
                    <p className="checkout-page__instock">In stock</p>
                    <p className="checkout-page__name">Lush Cosmetics Center</p>
                  </div>

                  <p className="checkout-page__order">
                    Order by 19:00, collect in-store today
                  </p>
                </li>
                <li className="checkout-page__items">
                  <div className="outer-container">
                    <div className="checkout-page__col-1">
                      <img
                        src={twilight}
                        alt="twilight-body-spray"
                        className="checkout-page__image"
                      />
                      <div>
                        <p className="checkout-page__prod-title">Twilight</p>
                        <p className="checkout-page__prod-type">BODY SPRAY</p>
                        <div className="checkout-page__row-1">
                          <p className="checkout-page__vol">200 ML</p>
                          <p className="checkout-page__qty"> QTY: 1</p>
                        </div>
                      </div>
                    </div>
                    <p className="checkout-page__price">$42.00</p>
                  </div>
                  <div className="checkout-page__row-2">
                    <img
                      src={check}
                      alt="instock-icon"
                      className="checkout-page__icon"
                    />
                    <p className="checkout-page__instock">In stock</p>
                    <p className="checkout-page__name">Lush Cosmetics Center</p>
                  </div>

                  <p className="checkout-page__order">
                    Order by 19:00, collect in-store today
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Pricing Summary */}
          <section className="checkout-page__pricing-section">
            <div className="checkout-page__row-1 checkout-page__row-1--spacing">
              <p>Subtotal</p>
              <p>$68.00</p>
            </div>
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
              <p>$76.16</p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

export default CheckoutPage;
