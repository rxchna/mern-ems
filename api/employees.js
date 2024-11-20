const { getDb } = require('./db');
const { ObjectId } = require('mongodb');

// Method to get all employees
async function employeesList(_, { employee_type }) {
    const db = getDb();
    const filter = {};

    if (employee_type) filter.employee_type = employee_type;

    // Get list of employees from employees collection
    const employees = await db.collection('employees').find(filter).toArray();

    return employees;
}

// Method to insert new employee
async function createEmployee(_, {employee: employee}) {
    const db = getDb();

    // Insert employee into collection
    const result = await db.collection('employees').insertOne({
        ...employee,
        current_status: 1, // Set default value of status (working)
    });

    // Retrieve inserted employee using insertedId
    const savedEmployee = await db.collection('employees').findOne({ _id: result.insertedId });

    // Return saved employee
    return savedEmployee;
}

// Method to get a single employee by ID
async function getEmployee(_, { id }) {
    const db = getDb();

    // Retrieve employee data
    const employee = await db.collection('employees').findOne({ _id: new ObjectId(id) });
    return employee;
}

// Method to update an employee
async function updateEmployee(_, { id, employee }) {
    const db = getDb();

    // Remove the _id field from the employee object, since it is not needed for update
    const { _id, ...updateFields } = employee;
    // Update employee record
    const result = await db.collection('employees').updateOne(
        { _id: new ObjectId(id) },
        {
            $set: updateFields
        }
    );

    // Return updated employee data
    const updatedEmployee = await db.collection('employees').findOne({ _id: new ObjectId(id) });
    return updatedEmployee;
}

// Method to delete employee
async function deleteEmployee(_, { id }) {
    const db = getDb();

    const result = await db.collection('employees').deleteOne({ _id: new ObjectId(id) });

    // If `result.deletedCount` = 1 -> deletion successful
    return result.deletedCount === 1;
}


module.exports = { createEmployee, employeesList, getEmployee, updateEmployee, deleteEmployee };
