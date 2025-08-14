// src/services/tips.service.js
import { query } from '../db/rdsClient.js';

// Get all tips for a specific course
export const getTipsByCourse = async (courseName) => {
  const text = 'SELECT id, content FROM tips WHERE course = ?';
  const values = [courseName];
  const [rows] = await query(text, values);
  return rows;
};

// Add a new tip for a course
export const addTip = async (courseName, content) => {
  const text = 'INSERT INTO tips (course, content) VALUES (?, ?)';
  const values = [courseName, content];
  const [result] = await query(text, values);
  return { id: result.insertId, course: courseName, content }; // MySQL לא מחזיר אוטומטית את השורה
};

// Delete a tip by ID
export const removeTip = async (tipId) => {
  const text = 'DELETE FROM tips WHERE id = ?';
  const values = [tipId];
  await query(text, values);
};
