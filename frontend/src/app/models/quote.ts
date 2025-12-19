export type Mood = 'motivation' | 'stress' | 'focus';

export interface Quote {
  text: string;
  author: string;
  mood: Mood;
}
