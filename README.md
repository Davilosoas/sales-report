### 📄 `README.md`

```markdown
# 📊 Painel de Relatório de Vendas

Este é um projeto React com gráfico interativo de vendas baseado em três seletores encadeados: **Categoria**, **Produto** e **Marca**. O gráfico exibe os dados de vendas dos 4 primeiros meses do ano.

## 🚀 Funcionalidades

- Seletor de **categoria**, que atualiza os produtos disponíveis
- Seletor de **produto**, que atualiza as marcas disponíveis
- Gráfico dinâmico (Highcharts) com os dados da marca selecionada
- Interface traduzida para **português**

## 🖥️ Tecnologias usadas

- React
- Highcharts
- JavaScript

## 📁 Estrutura básica
```

/sales-report
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ └── SalesChart.js
│ ├── data/
│ │ └── salesData.json
│ ├── App.js
│ ├── index.js
│ └── index.css
└── README.md

````

## ▶️ Como rodar o projeto

```bash
npm install
npm start
````

Acesse [http://localhost:3000](http://localhost:3000) no navegador.
