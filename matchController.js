const Match = require('../../models/Match');

exports.getAllMatches = async (req, res) => {
  try {
    const matches = await Match.getAll();
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener matches' });
  }
};

exports.createMatch = async (req, res) => {
  const { nombre_empresa, nombre_persona } = req.body;
  try {
    const newMatch = await Match.create({ nombre_empresa, nombre_persona });
    res.status(201).json(newMatch);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear un match' });
  }
};