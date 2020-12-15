import {db} from './database'

export const getUser = async (email: string) => {
  return await db
    .query('SELECT * FROM users WHERE email = $1', email)
    .then(async function(data) {
      return await data
    })
    .catch(function(error) {
      console.log('ERROR:', error)
    })
}
