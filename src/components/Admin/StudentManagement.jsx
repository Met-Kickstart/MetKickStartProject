import React, { useState } from 'react';
import { FaSearch, FaUserGraduate, FaEdit, FaTrash } from 'react-icons/fa';
import './StudentManagement.css';

const StudentManagement = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      course: 'MBA',
      specialization: ['Finance', 'Marketing'],
      batch: '2024-2026',
      status: 'Placed',
      email: 'john.doe@example.com',
      cgpa: '8.5'
    },
    {
      id: 2,
      name: 'Jane Smith',
      course: 'MCA',
      year: '2025',
      status: 'Not Placed',
      branch: 'Computer Applications',
      email: 'jane.smith@example.com'
    }
  ]);

  const [filters, setFilters] = useState({
    search: '',
    course: '',
    specialization: '', // Changed from array to string
    batch: '',
    status: ''
  });

  const courses = ['MBA', 'MCA'];
  const specializations = ['Finance', 'Marketing', 'HR', 'Operations'];
  const batches = ['2024-2026', '2025-2027', '2026-2028'];
  const statuses = ['Placed', 'Not Placed', 'In Process'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCourse = !filters.course || student.course === filters.course;
    const matchesBatch = !filters.batch || student.batch === filters.batch;
    const matchesStatus = !filters.status || student.status === filters.status;
    const matchesSpecialization = !filters.specialization || 
      student.specialization.includes(filters.specialization);

    return matchesSearch && matchesCourse && matchesBatch && 
           matchesStatus && matchesSpecialization;
  });

  const handleEdit = (studentId) => {
    console.log('Editing student:', studentId);
    // Add edit functionality
  };

  const handleDelete = (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(student => student.id !== studentId));
    }
  };

  return (
    <div className="student-management">
      <div className="page-header">
        <div className="header-content">
          <h2><FaUserGraduate /> Student Management</h2>
          <p>Manage and track student records</p>
        </div>
        <button className="add-student-btn">Add New Student</button>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search students..."
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <select
              name="course"
              value={filters.course}
              onChange={handleFilterChange}
            >
              <option value="">All Courses</option>
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <select
              name="specialization"
              value={filters.specialization}
              onChange={handleFilterChange}
            >
              <option value="">All Specializations</option>
              {specializations.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <select
              name="batch"
              value={filters.batch}
              onChange={handleFilterChange}
            >
              <option value="">All Batches</option>
              {batches.map(batch => (
                <option key={batch} value={batch}>{batch}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
            >
              <option value="">All Statuses</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="students-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.branch}</td>
                <td>{student.year}</td>
                <td>{student.email}</td>
                <td>
                  <span className={`status-badge ${student.status.toLowerCase().replace(' ', '-')}`}>
                    {student.status}
                  </span>
                </td>
                <td className="actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(student.id)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(student.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentManagement;