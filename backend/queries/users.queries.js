const queries = {
 getUserByEmail: `
    SELECT * FROM users
    WHERE email = $1
`,

  createUser: `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
    `,
}
export default queries;