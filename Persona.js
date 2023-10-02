const db = require('../db');

class Persona {
  static getAll() {
    return db('personas').select('*');
  }

  static getById(id) {
    return db('personas').where({ persona_id: id }).first();
  }

  static create(personaData) {
    return db('personas').insert(personaData, '*');
  }

  static update(id, personaData) {
    return db('personas').where({ persona_id: id }).update(personaData, '*');
  }

  static delete(id) {
    return db('personas').where({ persona_id: id }).del();
  }
}

module.exports = Persona;