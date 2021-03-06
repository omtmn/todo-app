exports.up = async function(knex) {
    await knex.schema
    .createTable('todos', table => {
        table.increments('todo_id')
        table.string('todo', 128).notNullable()
        table.timestamps(true, true)
    })
}

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('todos');
  };
  