import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  employee_data = [
    {
      id: 1,
      name: 'John Doe',
      managerId: null,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'john.doe@example.com',
      subordinates: [2, 3],
      designation: 'CEO',
    },
    {
      id: 2,
      name: 'Jane Smith',
      managerId: 1,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'jane.smith@example.com',
      subordinates: [4, 5],
      designation: 'CTO',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      managerId: 1,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'bob.johnson@example.com',
      subordinates: [6],
      designation: 'CFO',
    },
    {
      id: 4,
      name: 'Alice Brown',
      managerId: 2,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'alice.brown@example.com',
      subordinates: [8, 9],
      designation: 'Engineering Manager',
    },
    {
      id: 5,
      name: 'Charlie White',
      managerId: 2,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'charlie.white@example.com',
      subordinates: [10, 11],
      designation: 'Product Manager',
    },
    {
      id: 6,
      name: 'David Black',
      managerId: 3,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'david.black@example.com',
      subordinates: [7],
      designation: 'Finance Manager',
    },
    {
      id: 7,
      name: 'Eva Green',
      managerId: 6,
      imageUrl: 'https://via.placeholder.com/150',
      email: 'eva.green@example.com',
      subordinates: null,
      designation: 'Accountant',
    },
    // ... Add more employees as needed
  ];
}