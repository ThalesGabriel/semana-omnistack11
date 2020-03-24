const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { name, email, wpp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      wpp,
      city,
      uf
    })

    return res.json({ id });
  },

  async getAll(req, res) {
    const ongs = await connection('ongs').select('*');
    return res.json(ongs);
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;
    
    await connection('ongs').where('id', id).delete();

    return res.status(204).send();
  }
}