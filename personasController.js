const Persona = require('../../models/Persona');

exports.getAllPersonas = async (req, res) => {
  try {
    const personas = await Persona.getAll();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener personas' });
  }
};

exports.createPersona = async (req, res) => {
  const { nombre_persona, habilidad } = req.body;
  try {
    const newPersona = await Persona.create({ nombre_persona, habilidad });
    res.status(201).json(newPersona);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear una persona' });
  }
};

exports.updatePersona = async (req, res) => {
  const { id } = req.params;
  const { nombre_persona, habilidad } = req.body;
  try {
    const updatedPersona = await Persona.update(id, { nombre_persona, habilidad });
    res.json(updatedPersona);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar una persona' });
  }
};

exports.deletePersona = async (req, res) => {
  const { id } = req.params;
  try {
    await Persona.delete(id);
    res.json({ message: 'Persona eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar una persona' });
  }
};
