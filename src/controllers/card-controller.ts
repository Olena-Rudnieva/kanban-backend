import HttpError from '../helpers/HttpError.js';
import ctrlWrapper from '../helpers/ctrlWrapper.js';
import { Request, Response } from 'express';
import { Board } from '../models/board.js';

const addCardToColumn = async (req: Request, res: Response) => {
  const { boardId, columnId } = req.params;
  const { title, description } = req.body;
  const board = await Board.findById(boardId);
  console.log('board', board);

  if (!board) {
    throw HttpError(404, `Board with id ${boardId} not found`);
  }

  const column = board.columns.id(columnId);
  console.log('column', column);

  if (!column) {
    throw HttpError(404, `Column with id ${columnId} not found`);
  }

  const newCard = {
    title,
    description,
  };

  console.log('newCard', newCard);

  column.cards.push(newCard);

  await board.save();

  res.status(201).json(newCard);
};

const updateCardInColumn = async (req: Request, res: Response) => {
  const { boardId, columnId, cardId } = req.params;
  const { title, description } = req.body;

  const board = await Board.findById(boardId);
  if (!board) {
    throw HttpError(404, `Board with id ${boardId} not found`);
  }

  const column = board.columns.id(columnId);
  if (!column) {
    throw HttpError(404, `Column with id ${columnId} not found`);
  }

  const card = column.cards.id(cardId);
  if (!card) {
    throw HttpError(404, `Card with id ${cardId} not found`);
  }

  card.title = title || card.title;
  card.description = description || card.description;

  await board.save();

  res.json(card);
};

const deleteCardFromColumn = async (req: Request, res: Response) => {
  const { boardId, columnId, cardId } = req.params;

  const board = await Board.findById(boardId);
  if (!board) {
    throw HttpError(404, `Board with id ${boardId} not found`);
  }

  const column = board.columns.id(columnId);
  if (!column) {
    throw HttpError(404, `Column with id ${columnId} not found`);
  }

  const card = column.cards.id(cardId);
  if (!card) {
    throw HttpError(404, `Card with id ${cardId} not found`);
  }

  column.cards.pull({ _id: cardId });

  await board.save();

  res.status(200).json({ message: 'Card deleted successfully', cardId });
};

export default {
  addCardToColumn: ctrlWrapper(addCardToColumn),
  updateCardInColumn: ctrlWrapper(updateCardInColumn),
  deleteCardFromColumn: ctrlWrapper(deleteCardFromColumn),
};
