import db from '../database/db.js';

// logic from fruits table
// everything about fruits

const select_all_fruits = db.prepare(
  /*sql*/
  `
  SELECT 
    fruits.id,
    fruits.title,
    fruits.image_path,
    fruits.price,
    fruits.fruits_description,
    fruits_types.name AS ftype 
    FROM fruits JOIN fruits_types 
    WHERE fruits.id = fruit_types.id
`
);

export function getAllFruits() {
  return select_all_fruits.all();
}

const select_fruit_by_id = db.prepare(
  /*sql*/
  `
SELECT 
  fruits.id,
  fruits.title,
  fruits.image_path,
  fruits.price,
  fruits.fruits_description,
  fruits_types.name AS ftype 
  FROM fruits JOIN fruits_types 
  WHERE id = ?
`
);

export function getFruitById(id) {
  return select_fruit_by_id.get(id);
}

const select_fruit_by_type = db.prepare(
  /*sql*/
  `
SELECT 
  fruits.id,
  fruits.title,
  fruits.image_path,
  fruits.price,
  fruits.fruits_description,
  fruits_types.name AS ftype 
  FROM fruits JOIN fruits_types 
  WHERE fruits.type = ?
`
);

export function getFruitByType(type) {
  return select_fruit_by_type.all(type);
}
