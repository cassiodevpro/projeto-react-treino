import BackGroundWhiter from "../../components/background/BackgroundWhiter";
import ButtonBlue from "../../components/button/ButtonBlue";
import ButtonType from "../../components/button/ButtonType";
import ButtonWhite from "../../components/button/ButtonWhiter";
import HeaderClient from "../../components/headerClient";
import ProductDetailCards from "../../components/products/ProductDetailsCards";

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <div className="dsc-card dsc-mb20">
            <BackGroundWhiter />
            <ProductDetailCards />
            <ButtonType />
          </div>
          <div className="dsc-btn-page-container">
            <ButtonBlue />
            <ButtonWhite />
          </div>
        </section>
      </main>
    </>
  );
}
