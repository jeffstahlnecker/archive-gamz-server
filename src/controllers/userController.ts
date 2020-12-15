import {getUser} from '../util/queries'
//@ts-ignore
export const indexPage = async (req, res) => {
  const email = req.params.email
  console.log(email)
  const data = await getUser(email)
  res.send({messages: data})
}
