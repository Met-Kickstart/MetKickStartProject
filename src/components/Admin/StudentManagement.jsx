import React, { useState } from 'react';
import { FaSearch, FaUserGraduate, FaEdit, FaFileExcel, FaFileDownload } from 'react-icons/fa';
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

  const handleExport = () => {
    // Create worksheet from students data
    const worksheet = XLSX.utils.json_to_sheet(students.map(student => ({
      'Roll No': student.rollNo,
      'Full Name': student.fullName,
      'Contact No': student.contactNo,
      'Official Email ID': student.officialEmail,
      'Personal Email ID': student.personalEmail,
      '10th Percentage': student.academics.tenthPercentage,
      '12th Percentage': student.academics.twelfthPercentage,
      'Graduation Stream': student.academics.graduationStream,
      'Graduation Degree': student.academics.graduationDegree,
      'University': student.academics.university,
      'Graduation CGPA': student.academics.graduationCGPA,
      'MBA First Year CGPA': student.academics.mbaFirstYearCGPA,
      'MBA Specialization': student.academics.mbaSpecialization,
      'Prep Sessions Attended': student.prepSessionsAttended,
      'Aptitude Tests Attended': student.aptitudeTestsAttended,
      'Companies Appeared': student.companiesAppeared?.length || 0,
      'Status': student.status
    })));

    // Create workbook and append worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students Data');

    // Generate file name with current date
    const date = new Date().toISOString().split('T')[0];
    const fileName = `students_data_${date}.xlsx`;

    // Export workbook
    XLSX.writeFile(workbook, fileName);
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
          <button onClick={handleExport} className="import-btn">
            <FaFileDownload /> Export Excel
          </button>
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