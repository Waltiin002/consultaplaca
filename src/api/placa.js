export default function handler(req, res) {
  const { placa } = req.query;

  // Aqui, coloque a lógica de consulta real.
  // Por enquanto, envia uma resposta simulada:
  res.status(200).json({
    placa,
    modelo: "Fiat Uno",
    ano: "2008",
    cor: "Prata"
  });
}
