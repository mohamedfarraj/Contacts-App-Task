import * as Joi from '@hapi/joi'

const add = Joi.object().keys({
    email: Joi.string().required(),
    name: Joi.string().min(3).max(150).required(),
    phones: Joi.array().items(
        Joi.object().keys({
            label: Joi.string().required(),
            number: Joi.number().required(),
        }),
    ),
})

const update = Joi.object().keys({
    email: Joi.string().required(),
    name: Joi.string().min(3).max(150).required(),
    phones: Joi.array().items(
        Joi.object().keys({
            label: Joi.string().required(),
            number: Joi.number().required(),
        }),
    ),
})

export default {
    add,
    update,
}
