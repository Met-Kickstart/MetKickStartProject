import React, { useState } from 'react';
import { FaSearch, FaUserGraduate, FaEdit, FaFileExcel } from 'react-icons/fa';
import * as XLSX from 'xlsx';
import './StudentManagement.css';

const StudentManagement = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      rollNo: "2023MBA001",
      fullName: "John Doe",
      contactNo: "9876543210",
      officialEmail: "john.doe@met.edu",
      personalEmail: "john.d@gmail.com",
      academics: {
        tenthPercentage: "85",
        twelfthPercentage: "82",
        graduationStream: "Computer Science",
        graduationDegree: "B.Tech",
        university: "Pune University",
        graduationCGPA: "8.5",
        mbaFirstYearCGPA: "8.2",
        mbaSpecialization: "Finance"
      },
      prepSessionsAttended: 12, // Add this field
      aptitudeTestsAttended: 8, // Add this field
      companiesAppeared: [
        { name: "TCS", date: "2024-02-15", round: "Technical" },
        { name: "Infosys", date: "2024-02-10", round: "HR" }
      ],
      status: "Placed"
    },
    {
      id: 2,
      rollNo: "2023MBA002", 
      fullName: "Jane Smith",
      contactNo: "9876543211",
      officialEmail: "jane.smith@met.edu",
      personalEmail: "jane.s@gmail.com",
      academics: {
        tenthPercentage: "78",
        twelfthPercentage: "80",
        graduationStream: "Information Technology",
        graduationDegree: "B.Tech",
        university: "Mumbai University",
        graduationCGPA: "8.0",
        mbaFirstYearCGPA: "7.5",
        mbaSpecialization: "Marketing"
      },
      prepSessionsAttended: 10, // Add this field
      aptitudeTestsAttended: 6, // Add this field
      companiesApplied: [
        { name: "Microsoft", status: "Placed" }
      ],
      status: "Placed"
    }
  ]);

  const [filters, setFilters] = useState({
    search: '',
    specialization: '',
    status: ''
  });

  const specializations = ['Finance', 'Marketing', 'HR', 'Operations'];
  const statuses = ['Placed',  'Not Placed'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.fullName.toLowerCase().includes(filters.search.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(filters.search.toLowerCase()) ||
      student.officialEmail.toLowerCase().includes(filters.search.toLowerCase()) ||
      student.personalEmail.toLowerCase().includes(filters.search.toLowerCase());
      
    const matchesSpecialization = !filters.specialization || 
      student.academics.mbaSpecialization === filters.specialization;
      
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
          fullName: row['Full Name'] || '',
          contactNo: row['Contact No'] || '',
          officialEmail: row['Official Email ID'] || '',
          personalEmail: row['Personal Email ID'] || '',
          academics: {
            tenthPercentage: row['10th Percentage'] || '',
            twelfthPercentage: row['12th Percentage'] || '',
            graduationStream: row['Graduation Stream'] || '',
            graduationDegree: row['Graduation Degree'] || '',
            university: row['University'] || '',
            graduationCGPA: row['Graduation CGPA'] || '',
            mbaFirstYearCGPA: row['MBA First Year CGPA'] || '',
            mbaSpecialization: row['MBA Specialization'] || ''
          },
          companiesApplied: row['Companies Applied'] ? 
            row['Companies Applied'].split(',').map(company => ({
              name: company.trim(),
              date: row[`${company.trim()} Date`] || new Date().toISOString().split('T')[0],
              round: row[`${company.trim()} Round`] || 'Not Specified'
            })) : [],
          status: row['Status'] || 'Not Placed',
          prepSessionsAttended: parseInt(row['Prep Sessions Attended']) || 0,
          aptitudeTestsAttended: parseInt(row['Aptitude Tests Attended']) || 0
        }));
        
        setStudents(prevStudents => [...prevStudents, ...newStudents]);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Placed':
        return 'status-placed';
      case 'Not Placed':
        return 'status-not-placed';
      default:
        return '';
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
              <th>Full Name</th>
              <th>Contact No</th>
              <th>Official Email</th>
              <th>Personal Email</th>
              <th>10th %</th>
              <th>12th %</th>
              <th>Graduation Stream</th>
              <th>Graduation Degree</th>
              <th>University</th>
              <th>Grad CGPA</th>
              <th>MBA CGPA</th>
              <th>Specialization</th>
              <th>Prep Sessions</th>
              <th>Aptitude Tests</th>
              <th>Companies Appeared</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id}>
                <td>{student.rollNo}</td>
                <td>{student.fullName}</td>
                <td>{student.contactNo}</td>
                <td>{student.officialEmail}</td>
                <td>{student.personalEmail}</td>
                <td>{student.academics.tenthPercentage}%</td>
                <td>{student.academics.twelfthPercentage}%</td>
                <td>{student.academics.graduationDegree}</td>
                <td> {student.academics.graduationStream}</td>
                <td>{student.academics.university}</td>
                <td>{student.academics.graduationCGPA}</td>
                <td>{student.academics.mbaFirstYearCGPA}</td>
                <td>{student.academics.mbaSpecialization}</td>
                <td>{student.prepSessionsAttended || 0}</td>
                <td>{student.aptitudeTestsAttended || 0}</td>
                <td>
                  <div className="companies-count">
                    <span className="count-badge">
                      {student.companiesAppeared?.length || 0}
                    </span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${getStatusBadgeClass(student.status)}`}>
                    {student.status}
                  </span>
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