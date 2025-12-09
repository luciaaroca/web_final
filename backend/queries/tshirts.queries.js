const queries = {
getAllTshirts:`
SELECT t.tshirt_id,t.name, t.description,t.sizes,t.price, t.image,t.type, t.league_name
FROM tshirts AS t
 `,
getTshirtsByType:`
SELECT t.tshirt_id, t.name, t.description,t.sizes,t.price, t.image,t.type, t.league_name
FROM tshirts AS t
WHERE t.type = $1
`,
getTshirtsByName:`
SELECT t.tshirt_id, t.name, t.description,t.sizes,t.price, t.image,t.type, t.league_name
FROM tshirts AS t
WHERE REPLACE(LOWER(t.name), ' ', '') LIKE CONCAT('%', REPLACE(LOWER($1), ' ', ''), '%');
`,
getTshirtsById: `
  SELECT t.tshirt_id,t.name, t.description,t.sizes,t.price, t.image,t.type, t.league_name
  FROM tshirts AS t 
  WHERE t.tshirt_id = $1;
`,
getTshirtsByLeagueName: `
  SELECT t.tshirt_id,t.name, t.description,t.sizes,t.price, t.image,t.type, t.league_name
  FROM tshirts AS t
  WHERE type = 'Liga'
  AND league_name = $1
`
}
export default queries;