const db = require('../db');

class Empresa {
  static getAll() {
    return db('empresas').select('*');
  }

  static getById(id) {
    return db('empresas').where({ empresa_id: id }).first();
  }

  static create(empresaData) {
    return db('empresas').insert(empresaData, '*');
  }

  static update(id, empresaData) {
    return db('empresas').where({ empresa_id: id }).update(empresaData, '*');
  }

  static delete(id) {
    return db('empresas').where({ empresa_id: id }).del();
  }
}

module.exports = Empresa;