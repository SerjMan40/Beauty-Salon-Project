import type { Appointment } from '../../appointments';
import type { User } from '../../auth';

export interface Profile extends User {
  phone?: string;
  birthday?: string;
  avatarUrl?: string;
}

export interface VisitHistoryItem extends Appointment {
  serviceName: string;
  masterName: string;
  price: number;
}

export interface PersonalOffer {
  id: string;
  title: string;
  description: string;
  discountPercent?: number;
  expiresAt?: string;
}
