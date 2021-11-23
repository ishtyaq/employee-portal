export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  hireDate?: Date;
  salary?: number;
  managerId?: number;
  departmentId?: number;
}
