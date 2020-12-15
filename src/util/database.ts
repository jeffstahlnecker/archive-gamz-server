import pgPromise from 'pg-promise'
const pgp = pgPromise({})

export const db = pgp('postgres://Developer@localhost:5432/gamz')
