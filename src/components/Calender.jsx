import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, User, Calendar, Stethoscope, UserCheck } from 'lucide-react';

const DialysisClinicSchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  // Props for external doctor management
  const addDoctor = (date, doctorData) => {
    const dateKey = formatDate(date);
    const newDoctor = {
      id: Date.now(), // Simple ID generation
      ...doctorData
    };
    
    setDoctorSchedules(prev => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), newDoctor]
    }));
  };

  const removeDoctor = (date, doctorId) => {
    const dateKey = formatDate(date);
    setDoctorSchedules(prev => ({
      ...prev,
      [dateKey]: (prev[dateKey] || []).filter(doctor => doctor.id !== doctorId)
    }));
  };

  const updateDoctor = (date, doctorId, updatedData) => {
    const dateKey = formatDate(date);
    setDoctorSchedules(prev => ({
      ...prev,
      [dateKey]: (prev[dateKey] || []).map(doctor => 
        doctor.id === doctorId ? { ...doctor, ...updatedData } : doctor
      )
    }));
  };

  // Doctor schedule data
  const [doctorSchedules, setDoctorSchedules] = useState({

  });

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const getDoctorsForDate = (date) => {
    if (!date) return [];
    const dateKey = formatDate(date);
    return doctorSchedules[dateKey] || [];
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const getShiftColor = (shift) => {
    switch (shift) {
      case 'Morning': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Afternoon': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'On-Call': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'bg-green-100 text-green-800';
      case 'on-call': return 'bg-yellow-100 text-yellow-800';
      case 'unavailable': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const today = new Date();
  const days = getDaysInMonth(currentDate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-t-4 border-blue-400">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Central Dialysis And Daignostic Centre</h1>
                <p className="text-gray-600">Doctors' Schedule</p>
              </div>
            </div>
            {/* <div className="text-sm text-gray-600 bg-blue-50 px-4 py-2 rounded-lg">
              Use addDoctor(), removeDoctor(), updateDoctor() methods to manage schedules
            </div> */}
          </div>

          {/* Month Navigation */}
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <h2 className="text-2xl font-semibold text-gray-800">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button 
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {daysOfWeek.map(day => (
                  <div key={day} className="p-2 text-center font-semibold text-blue-700 bg-blue-50 rounded-lg">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {days.map((date, index) => {
                  if (!date) {
                    return <div key={index} className="h-20"></div>;
                  }
                  
                  const doctors = getDoctorsForDate(date);
                  const isToday = date.toDateString() === today.toDateString();
                  const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                  
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedDate(date)}
                      className={`h-20 p-2 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        isToday ? 'bg-blue-100 border-blue-400' : 
                        isSelected ? 'bg-blue-50 border-blue-300' : 
                        'bg-white border-gray-200 hover:bg-blue-25'
                      }`}
                    >
                      <div className="text-sm font-medium text-gray-800 mb-1">
                        {date.getDate()}
                      </div>
                      <div className="space-y-1">
                        {doctors.slice(0, 2).map(doctor => (
                          <div key={doctor.id} className="text-xs bg-blue-100 text-blue-800 px-1 py-0.5 rounded truncate">
                            Dr. {doctor.doctor.split(' ')[1]}
                          </div>
                        ))}
                        {doctors.length > 2 && (
                          <div className="text-xs text-gray-500">+{doctors.length - 2} more</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Doctor Details Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Doctors on Duty</span>
                  <span className="font-semibold text-blue-600">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Patients</span>
                  <span className="font-semibold text-green-600">22</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">On-Call Doctors</span>
                  <span className="font-semibold text-purple-600">1</span>
                </div>
              </div>
            </div>

            {/* Selected Date Details */}
            {selectedDate && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h3>
                
                <div className="space-y-4">
                  {getDoctorsForDate(selectedDate).map(doctor => (
                    <div key={doctor.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-800">{doctor.doctor}</h4>
                          <p className="text-sm text-gray-600">{doctor.specialty}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(doctor.status)}`}>
                          {doctor.status}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className={`px-3 py-1 rounded-lg border text-sm ${getShiftColor(doctor.shift)}`}>
                          {doctor.shift}: {doctor.time}
                        </div>
                        
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <UserCheck className="h-4 w-4" />
                          <span>{doctor.patients} patients scheduled</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {getDoctorsForDate(selectedDate).length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>No doctors scheduled for this date</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialysisClinicSchedule;