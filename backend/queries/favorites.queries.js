const queries = {
 getAllFavoritesByUser: `
 SELECT f.favorite_id, t.*
 FROM favorites f
 JOIN tshirts t ON f.tshirt_id = t.tshirt_id
 WHERE f.user_id = $1;
`,
postFavorites:`
INSERT INTO favorites (user_id, tshirt_id)
VALUES ($1, $2)
RETURNING *;
`,
deleteFavorite:`
DELETE FROM favorites
WHERE user_id = $1 AND tshirt_id = $2
RETURNING *;
`
}
export default queries;