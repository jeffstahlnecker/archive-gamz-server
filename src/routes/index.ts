import express from 'express'
import {indexPage} from '../controllers'

const router = express.Router()

// @ts-ignore
router.get('/:email', indexPage)

export default router
