import Joi from 'joi';
export const cardJoiSchema = Joi.object({
    _id: Joi.string().optional(),
    title: Joi.string().optional().messages({
        'string.base': 'Title must be a string',
    }),
    description: Joi.string().optional().messages({
        'string.base': 'Description must be a string',
    }),
});
export const columnJoiSchema = Joi.object({
    _id: Joi.string().optional(),
    title: Joi.string()
        .valid('To Do', 'In Progress', 'Done')
        .required()
        .messages({
        'any.required': 'Set title for column',
        'any.only': 'Title must be one of: To Do, In Progress, Done',
    }),
    cards: Joi.array().items(cardJoiSchema).optional(),
});
export const boardJoiSchema = Joi.object({
    _id: Joi.string().optional(),
    name: Joi.string().required().messages({
        'any.required': 'Set name for board',
        'string.base': 'Name must be a string',
    }),
    columns: Joi.array().items(columnJoiSchema).optional(),
    createdAt: Joi.string().optional(),
    updatedAt: Joi.string().optional(),
});
