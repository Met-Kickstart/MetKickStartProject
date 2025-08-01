import React, { useState } from 'react';
import { FaSearch, FaUserGraduate, FaEdit, FaFileExcel } from 'react-icons/fa';
import * as XLSX from 'xlsx';
import './StudentManagement.css';

const StudentManagement = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      rollNo: "2023MBA001",
      name: "John Doe",
      contactNo: "9876543210",
      officialEmail: "john.doe@met.edu",
      specialization: "Finance",
      status: "Placed"
    },
    {
      id: 2,
      rollNo: "2023MBA002", 
      name: "Jane Smith",
      contactNo: "9876543211",
      officialEmail: "jane.smith@met.edu",
      specialization: "Marketing",
      status: "In Progress"
    }
  ]);

  const [filters, setFilters] = useState({
    search: '',
    specialization: '',
    status: ''
  });

  const specializations = ['Finance', 'Marketing', 'HR', 'Operations'];
  const statuses = ['Placed', 'In Progress', 'Not Placed'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(filters.search.toLowerCase()) ||
      student.officialEmail.toLowerCase().includes(filters.search.toLowerCase());
      
    const matchesSpecialization = !filters.specialization || 
      student.specialization === filters.specialization;
      
    const matchesStatus = !filters.status || 
      student.status === filters.status;

    return matchesSearch && matchesSpecialization && matchesStatus;
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

  const handleStatusChange = (studentId, newStatus) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId
          ? { ...student, status: newStatus }
          : student
      )
    );
  };

  const handleFileImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const data = evt.target.result;
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
        const newStudents = jsonData.map((row, index) => ({
          id: students.length + index + 1,
          rollNo: row['Roll No'] || '',
          name: row['Name'] || '',
          contactNo: row['Contact No'] || '',
          officialEmail: row['Official Email ID'] || '',
          specialization: row['Specialization'] || '',
          status: row['Status'] || 'Not Placed'
        }));

        setStudents(prevStudents => [...prevStudents, ...newStudents]);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="student-management">
      <div className="page-header">
        <div className="header-content">
          <h2><FaUserGraduate /> Student Management</h2>
          <p>Manage and track student records</p>
        </div>
        <div className="import-section">
          <label htmlFor="fileInput" className="import-btn">
            <FaFileExcel /> Import Excel
            <input
              id="fileInput"
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileImport}
              style={{ display: 'none' }}
            />
          </label>
        </div>
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
              <th>Roll No</th>
              <th>Name</th>
              <th>Contact No</th>
              <th>Official Email ID</th>
              <th>Specialization</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id}>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.contactNo}</td>
                <td>{student.officialEmail}</td>
                <td>{student.specialization}</td>
                <td>
                  <select
                    value={student.status}
                    onChange={(e) => handleStatusChange(student.id, e.target.value)}
                    className={`status-select ${student.status.toLowerCase().replace(' ', '-')}`}
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
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