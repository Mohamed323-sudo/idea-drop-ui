import api from "@/lib/axios";
import type { Idea } from "@/types";

// fetch all ideas
export const fetchIdeas = async (limit?: number): Promise<Idea[]> => {
  const res = await api.get("/ideas", {
    params: limit ? { _limit: limit } : {},
  });
  return res.data;
};

//fetch single idea

export const fetchIdea = async (ideaId: string): Promise<Idea> => {
  const res = await api.get(`/ideas/${ideaId}`);
  return res.data;
};
// create new idea
export const createNewIdea = async (newIdea: {
  title: string;
  summary: string;
  description: string;
  tags: string[];
}): Promise<Idea> => {
  const res = await api.post("/ideas", {
    ...newIdea,
    createdAt: new Date().toISOString(),
  });

  return res.data;
};

// delete idea
export const deleteIdea = async (ideaId: string): Promise<void> => {
  await api.delete(`/ideas/${ideaId}`);
};

// update idea
export const updateIdea = async (
  ideaId: string,
  updatedIdea: {
    title: string;
    summary: string;
    description: string;
    tags: string[];
  }
): Promise<Idea> => {
  const res = await api.put(`/ideas/${ideaId}`, updatedIdea);
  return res.data;
};
