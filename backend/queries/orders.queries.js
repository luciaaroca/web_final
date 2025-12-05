const queries = {
createOrder:`
 INSERT INTO orders (user_id)
 VALUES ($1)
 RETURNING *;
`,
createOrderTshirt:`
 INSERT INTO order_tshirts (order_id,tshirt_id, quantity)
 VALUES ($1,$2,$3)
 RETURNING *;
`
}
export default queries;