import React from "react";

// Function to format date (used in EmployeeDirectory and EmployeeView)
export default function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(',', '');
}