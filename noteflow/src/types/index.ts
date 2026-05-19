export type Nota = {
  id: string;
  title: string;
  description?: string;
};

export type Idea = {
  id: string;
  title: string;
  details?: string;
};

export type Tarea = {
  id: string;
  title: string;
  done: boolean;
};
