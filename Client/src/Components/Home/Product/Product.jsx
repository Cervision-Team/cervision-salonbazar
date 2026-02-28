import React from "react";
import "./Product.scss";
import { FiMapPin } from "react-icons/fi";
import image1 from "../../../Image/product1.png";
import image2 from "../../../Image/product2.png";
import image3 from "../../../Image/product3.png";

// Badge rəngləri
const BADGE_STYLES = {
  "İkinci əl": { bg: "#f0f0f0", color: "#555" },
  "Az qalıb": { bg: "#fff3cd", color: "#856404" },
  Endirim: { bg: "#fde8f0", color: "#d63384" },
  Yeni: { bg: "#e6f9f0", color: "#1a8a4a" },
};

const PRODUCTS = [
  {
    id: 1,
    badge: "İkinci əl",
    image: image1,
    name: "Saxara Gözəllik Salonu",
    desc: "Damascus Steel, Yaponiya",
    shop: "Golden Scissors Shop",
    price: "99 AZN",
    href: "/product/1",
  },
  {
    id: 2,
    badge: "Az qalıb",
    image: image2,
    name: "Saxara Gözəllik Salonu",
    desc: "Professional qoruyucu",
    shop: "Loreal Shop",
    price: "99 AZN",
    href: "/product/2",
  },
  {
    id: 3,
    badge: "Endirim",
    image: image3,
    name: "Professional Fen Set",
    desc: "Az işlənmiş, Almaniya",
    shop: "Master Ali",
    price: "99 AZN",
    href: "/product/3",
  },
  {
    id: 4,
    badge: "Yeni",
    image: image1,
    name: "Saxara Gözəllik Salonu",
    desc: "Turbo power, İtaliya",
    shop: "Loreal Shop",
    price: "99 AZN",
    href: "/product/4",
  },
];

function ProductCard({ badge, image, name, desc, shop, price, href }) {
  const badgeStyle = BADGE_STYLES[badge] || BADGE_STYLES["Yeni"];

  return (
    <div className="product-card">
      {/* Image */}
      <div className="product-card__image-wrap">
        <img src={image} alt={name} className="product-card__image" />
        {badge && (
          <span
            className="product-card__badge"
            style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.color }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__desc">{desc}</p>
        <div className="product-card__shop">
          <FiMapPin className="product-card__shop-icon" />
          <span>{shop}</span>
        </div>
        <p className="product-card__price">{price}</p>
      </div>

      {/* Footer */}
      <div className="product-card__footer">
        <a href={href} className="product-card__btn">
          Ətraflı bax
        </a>
      </div>
    </div>
  );
}

function Product() {
  return (
    <section className="product">
      <div className="product__container">
        <div className="product__header">
          <h2 className="product__title">Bazardakı məhsullar</h2>
          <p className="product__subtitle">
            Seçilmiş professional gözəllik məhsulları
          </p>
        </div>

        <div className="product__grid">
          {PRODUCTS.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
