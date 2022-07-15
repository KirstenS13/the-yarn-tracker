// import { v4 as uuidv4 } from 'uuid';

exports.seed = async function(knex) {
  await knex('fiber').insert([
    { id: '1', name: 'acrylic' },
    { id: '2', name: 'rayon' },
    { id: '3', name: 'lyocell' },
    { id: '4', name: 'cellulose' },
    { id: '5', name: 'viscose' },
    { id: '6', name: 'nylon' },
    { id: '7', name: 'polyester' },
    { id: '8', name: 'cotton' },
    { id: '9', name: 'pima cotton' },
    { id: '10', name: 'egyptian cotton' },
    { id: '11', name: 'mercerized cotton' },
    { id: '12', name: 'linen' },
    { id: '13', name: 'bamboo' },
    { id: '14', name: 'soy' },
    { id: '15', name: 'hemp' },
    { id: '16', name: 'jute' },
    { id: '17', name: 'wool' },
    { id: '18', name: 'merino wool' },
    { id: '19', name: 'superwash wool' },
    { id: '20', name: 'alpaca' },
    { id: '21', name: 'silk' },
    { id: '22', name: 'cashmere' },
    { id: '23', name: 'mohair' },
    { id: '24', name: 'angora' },
  ])
};