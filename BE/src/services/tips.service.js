// src/services/tips.service.js
import { query } from '../db/rdsClient.js';

// Get all tips for a specific course
export const getTipsByCourse = async (courseName) => {
  const text = 'SELECT id, content FROM tips WHERE course = $1';
  const values = [courseName];
  const result = await query(text, values);
  return result.rows;
};

// Add a new tip for a course
export const addTip = async (courseName, content) => {
  const text = 'INSERT INTO tips (course, content) VALUES ($1, $2) RETURNING *';
  const values = [courseName, content];
  const result = await query(text, values);
  return result.rows[0];
};

// Delete a tip by ID
export const removeTip = async (tipId) => {
  const text = 'DELETE FROM tips WHERE id = $1';
  const values = [tipId];
  await query(text, values);
};
