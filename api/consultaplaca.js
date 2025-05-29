export default async function handler(req, res) {
  const { placa } = req.query;

  if (!placa) {
    return res.status(400).json({ error: "Placa é obrigatória" });
  }

  // Lógica para buscar dados da placa (via API DETRAN ou mock)
  const dadosFake = {
    placa,
    marca: "Ford",
    modelo: "Ka",
    cor: "Prata",
    uf: "SP"
  };

  res.status(200).json(dadosFake);
}
