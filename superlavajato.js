
// superlavajato.js
import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import * as XLSX from 'xlsx';

export default function PainelFinanceiro() {
  const [ordens, setOrdens] = useState([]);

  useEffect(() => {
    buscarOrdens();
  }, []);

  async function buscarOrdens() {
    const colRef = collection(db, 'ordens');
    const snapshot = await getDocs(colRef);
    const dados = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setOrdens(dados);
  }

  function calcularTotais() {
    let total = 0, comissao = 0;
    ordens.forEach(ordem => {
      if (ordem.valor) total += Number(ordem.valor);
      if (ordem.comissao) comissao += Number(ordem.comissao);
    });
    return { total, comissao, lucro: total - comissao };
  }

  function exportarExcel() {
    const dados = ordens.map(o => ({
      Cliente: o.cliente,
      Lavador: o.lavador,
      Serviço: o.servico,
      Valor: o.valor,
      Comissão: o.comissao,
      Data: o.data
    }));
    const ws = XLSX.utils.json_to_sheet(dados);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Relatório');
    XLSX.writeFile(wb, 'relatorio_superlavajato.xlsx');
  }

  const { total, comissao, lucro } = calcularTotais();

  return (
    <div>
      <h1>Painel Financeiro</h1>
      <p>Faturamento: R$ {total.toFixed(2)}</p>
      <p>Comissões: R$ {comissao.toFixed(2)}</p>
      <p>Lucro: R$ {lucro.toFixed(2)}</p>
      <button onClick={exportarExcel}>Exportar Excel</button>
    </div>
  );
}
