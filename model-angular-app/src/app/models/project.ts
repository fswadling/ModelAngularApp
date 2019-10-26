import { Exposure } from './exposure';

export interface Project {
  name: string;
  id: number;
  exposures: Exposure[];
}
