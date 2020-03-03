import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../../services/api";
//css
import "./styles.css";

export default function Product() {
  const [produto, SetProduto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`/products/${id}`);
      SetProduto(response.data);
    }
    loadProduct();
  }, []);
  return (
    <div className="product-info">
      <h2>{produto.title}</h2>
      <p>{produto.description}</p>
      <p>
        URL: <a href={produto.url}>{produto.url}</a>
      </p>
    </div>
  );
}
