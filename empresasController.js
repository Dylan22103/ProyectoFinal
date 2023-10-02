const Empresa = require('../../models/Empresa');

exports.getAllEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.getAll();
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empresas' });
  }
};

exports.createEmpresa = async (req, res) => {
  const { nombre_empresa, habilidad_requerida } = req.body;
  try {
    const newEmpresa = await Empresa.create({ nombre_empresa, habilidad_requerida });
    res.status(201).json(newEmpresa);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear una empresa' });
  }
};

exports.updateEmpresa = async (req, res) => {
  const { id } = req.params;
  const { nombre_empresa, habilidad_requerida } = req.body;
  try {
    const updatedEmpresa = await Empresa.update(id, { nombre_empresa, habilidad_requerida });
    res.json(updatedEmpresa);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar una empresa' });
  }
};

exports.deleteEmpresa = async (req, res) => {
  const { id } = req.params;
  try {
    await Empresa.delete(id);
    res.json({ message: 'Empresa eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar una empresa' });
  }
};
