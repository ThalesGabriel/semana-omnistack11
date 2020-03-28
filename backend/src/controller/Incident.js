const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { title, description, value, ong_id } = req.body;

    const [ id ] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    return res.json({ id });
  },

  async getAllPaginated(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('incidents').count()
    const incidents = await connection('incidents').select('*')
      .join('ongs', 'ong_id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page -1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.wpp',
        'ongs.city',
        'ongs.uf',
      ]);

    return res.json({data: incidents, amount: count['count(*)']});
  },

  async getAll(req, res) {

    const incidents = await connection('incidents').select('*')

    return res.json({data: incidents});
  },

  async change(req, res) {
    const {id} = req.params    
    const {ong_id} = req.body;

    const ong = await connection('incidents')
      .where('id', id)
      .first()
    let updatedOng = Object.assign({}, ong, req.body);

    console.log(updatedOng)
    await connection('incidents')
      .where('id', id)
      .update(updatedOng)
 
    const incidents = await connection('incidents').where('ong_id', ong_id).select('*')
    return res.json({success: true, data: incidents});
  },

  async delete(req, res) {
    const { id } = req.params;
    console.log(id)
    const ong_id = req.headers.authorization;

    const ong = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first()
    
    if(!ong) {
      return res.status(401).json( { error: "Este incidente não existe mais na base de dados" } )      
    }
    if(ong.ong_id == ong_id) {
      await connection('incidents').where('id', id).delete();
      const incidents = await connection('incidents').where('ong_id', ong_id).select('*')
      return res.json({success: true, data: incidents});
    }
    return res.status(401).json( { error: "Operação inválida, o caso não pertence a sua empresa." } )
  },
}