const queries = {
getAllTshirts:`
SELECT t.name, t.description,t.sizes,t.price, t.image,t.type, t.league_name
FROM tshirts AS t
 `,
getTshirtsByType:`
SELECT t.name, t.description,t.sizes,t.price, t.image,t.type, t.league_name
FROM tshirts AS t
WHERE t.type = $1
`,
getTshirtsByName:`
SELECT t.name, t.description,t.sizes,t.price, t.image,t.type, t.league_name
FROM tshirts AS t
WHERE t.name = $1
`,
getTshirtsByLeagueName: `
  SELECT *
  FROM tshirts
  WHERE type = 'Liga'
  AND league_name = $1
`
}
module.exports = queries;