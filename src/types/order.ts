export interface Order {
  id: string;
  customerInfo: CustomerInfo;
  product: SmartRing;
  quantity: number;
  totalAmount: number;
  status: OrderStatus;
  createdAt: Date;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export enum OrderStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

import { SmartRing } from './product';
