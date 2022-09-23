exports.seed = async function(knex) {
  await knex('stash').truncate()
  await knex('colorway_yarntype').truncate()
  await knex('yarntype_fiber').truncate()
  await knex('yarntype').truncate()
  await knex('fiber').truncate()
  await knex('colorway').truncate()
  await knex('user').truncate()
};
