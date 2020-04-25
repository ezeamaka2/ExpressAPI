import { pool } from "../models/pool";
import {
  insertMessages,
  dropMessagesTable,
  createMessageTable,
} from "./queries";

export const executeQueryArray = async (arr) => {
  const newPro = new Promise((resolve) => {
    const stop = arr.length;
    arr.forEach(async (q, index) => {
      await pool.query(q);
      if (index + 1 === stop) resolve();
    });
  });
  return newPro;
};

export const dropTables = () => executeQueryArray([dropMessagesTable]);
export const createTables = () => executeQueryArray([createMessageTable]);
export const insertIntoTables = () => executeQueryArray([insertMessages]);
