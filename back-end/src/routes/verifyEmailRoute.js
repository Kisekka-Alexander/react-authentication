import { objectID } from 'mongodb'
import jwt from 'jsonwebtoken'
import { getDbConnection } from '../db'

export const verifyEmailRoute = {
    path: '/api/verify-email',
    method: 'put',
    handler: async (req, res) => {
        const { verificationString } = req.body
        
    }
}