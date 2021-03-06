const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { id } = req.body;
    
    const ong = await connection('ongs')
      .where('id', id)
      .select('name', 'id')
      .first()

    if(!ong) return res.status(400).json({ error: "Seu email ou senha podem estar incorretos." })
    
    return res.json(ong);
  },

}