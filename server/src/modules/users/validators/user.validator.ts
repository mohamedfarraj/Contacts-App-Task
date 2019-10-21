import * as Joi from '@hapi/joi'

const add = Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
})

const update = Joi.object().keys({
    email: Joi.string().email(),
    name: Joi.string(),
    password: Joi.string(),
})

const login = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
})

export default {
    add,
    login,
    update,
}
