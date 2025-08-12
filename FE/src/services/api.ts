// src/services/api.ts
import axios from 'axios';
import { Course } from '../data/courses';

const API_BASE = '/api/tips';

export type Tip = {
  id: number;
  content: string;
};

export const fetchTips = async (course: Course): Promise<Tip[]> => {
  const res = await axios.get(`${API_BASE}/${course}`);
  return res.data;
};

export const addTip = async (course: Course, content: string): Promise<Tip> => {
  const res = await axios.post(`${API_BASE}/${course}`, { content });
  return res.data;
};

export const deleteTip = async (tipId: number): Promise<void> => {
  await axios.delete(`${API_BASE}/${tipId}`);
};
