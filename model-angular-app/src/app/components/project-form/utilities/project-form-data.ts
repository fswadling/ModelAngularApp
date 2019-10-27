import { ExposureListItem } from 'src/app/models/exposure-list-item';

export interface ProjectFormData {
  name: string;
  minimumVolume: number;
  exposures: ExposureListItem[];
}
