import { Schema, model } from 'mongoose';
import { handleSaveError } from './hooks/handleSaveError.js';
import { runValidatorsAtUpdate } from './hooks/runValidatorsAtUpdate.js';

const cardSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const columnSchema = new Schema({
  title: {
    type: String,
    enum: ['To Do', 'In Progress', 'Done'],
    required: [true, 'Set title for column'],
  },
  cards: {
    type: [cardSchema],
  },
});

const boardSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for board'],
    },
    columns: {
      type: [columnSchema],
    },
  },
  { versionKey: false, timestamps: true }
);

boardSchema.post('save', handleSaveError);
boardSchema.pre('findOneAndUpdate', runValidatorsAtUpdate);

boardSchema.post('findOneAndUpdate', handleSaveError);

export const Board = model('board', boardSchema);
