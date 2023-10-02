const db = require('../db');

class Match {
  static getAll() {
    return db('match').select('*');
  }

  static create(matchData) {
    return db('match').insert(matchData, '*');
  }
}

module.exports = Match;