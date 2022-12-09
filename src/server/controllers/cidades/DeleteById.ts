import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

import { validation } from '../../shared/middlewares'

interface IParamProps {
    id?: number,
}

export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}))

export const deleteById: RequestHandler = async (req: Request<IParamProps>, res: Response) => {

    if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            defalut: 'Registro não encontrado.'
        }
    })

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.')
}