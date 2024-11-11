import { Question } from '../models/index.js';
import process from 'process';

const cleanDB = async (): Promise<void> => {
  try {
    await Question.deleteMany({});
    console.log('Question collection cleaned.');
  } catch (err: unknown) {
    console.error('Error cleaning collections:', err);
    process.exit(1);
  }
};

export default cleanDB;
