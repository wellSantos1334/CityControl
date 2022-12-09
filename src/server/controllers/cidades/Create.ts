import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

import { validation } from '../../shared/middlewares'

interface ICidade {
    name: string,
} 

export const createTournamentValidation = validation((getSchema) => ({
    body: getSchema<ICidade>(yup.object().shape({
        name: yup.string().required().min(3),
    })),
}))

export const createTournamentSave: RequestHandler = async (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body)

    return res.status(StatusCodes.CREATED).json(1)
}