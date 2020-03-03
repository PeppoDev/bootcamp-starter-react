import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import api from "../../services/api";

export default function Main() {
  const [produtos, SetProdutos] = useState([]);
  const [prodInfo, SetProdutoInfo] = useState({});
  const [page, SetPage] = useState(1);

  function prevPage() {
    if (page === 1) return;
    const pageNumber = page - 1;
    SetPage(pageNumber);
  }
  function nextPage() {
    if (page === prodInfo.pages) return;
    const pageNumber = page + 1;
    SetPage(pageNumber);
  }

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`/products?page=${page}`);

      const { docs, ...prodInfo } = response.data;

      SetProdutos(docs);
      SetProdutoInfo(prodInfo);
    }
    loadProducts();
  }, [page]);
  return (
    <>
      <ul className="product-list">
        {produtos.map(produto => (
          <li className="product-item" key={produto._id}>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <Link to={`product/${produto._id}`}>Acessar</Link>
          </li>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={prevPage}>
            Anterior
          </button>
          <button disabled={page === prodInfo.pages} onClick={nextPage}>
            Próxima
          </button>
        </div>
      </ul>
    </>
  );
}
