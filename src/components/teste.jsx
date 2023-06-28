import React, { useState } from 'react';
import CardProduto from './CardProduto';
import DetalhesProduto from './DetalhesProduto';

const ComponentePrincipal = () => {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const handleProdutoClick = (produto) => {
    setProdutoSelecionado(produto);
  };

  return (
    <div>
      {/* Renderize os cards de produtos */}
      <CardProduto
        produto={produto1}
        onClick={() => handleProdutoClick(produto1)}
      />
      <CardProduto
        produto={produto2}
        onClick={() => handleProdutoClick(produto2)}
      />
      {/* ... mais cards de produtos ... */}

      {/* Renderize o componente de detalhes do produto */}
      {produtoSelecionado && (
        <DetalhesProduto produto={produtoSelecionado} />
      )}
    </div>
  );
};

export default ComponentePrincipal;

import React from 'react';

const CardProduto = ({ produto, onClick }) => {
  const handleCardClick = () => {
    onClick(produto);
  };

  return (
    <div onClick={handleCardClick}>
      {/* Renderize o conteúdo do card */}
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
      {/* ... mais informações do produto ... */}
    </div>
  );
};

export default CardProduto;

