import Login from "../components/Auth/Login";

const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "employee1@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for the upcoming client meeting.",
        taskDate: "2025-01-12",
        category: "Management"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Database",
        taskDescription: "Ensure all employee records are accurate.",
        taskDate: "2025-01-15",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Finish Testing Module",
        taskDescription: "Run final tests on the application module.",
        taskDate: "2025-01-08",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Anjali",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Financial Report",
        taskDescription: "Compile Q4 financial data.",
        taskDate: "2025-01-18",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Organize Workshop",
        taskDescription: "Plan and schedule a skill development workshop.",
        taskDate: "2025-01-05",
        category: "Education"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Analyze trends in the industry.",
        taskDate: "2025-01-20",
        category: "Marketing"
      }
    ]
  },
  {
    id: 3,
    firstName: "Vikram",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Inventory Check",
        taskDescription: "Perform a stock audit of all assets.",
        taskDate: "2025-01-17",
        category: "Logistics"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Submit Budget Proposal",
        taskDescription: "Draft and submit the annual budget proposal.",
        taskDate: "2025-01-10",
        category: "Finance"
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Software Update",
        taskDescription: "Install and test the latest software update.",
        taskDate: "2025-01-16",
        category: "IT"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Employee Training",
        taskDescription: "Prepare material for new employee orientation.",
        taskDate: "2025-01-22",
        category: "HR"
      }
    ]
  },
  {
    id: 5,
    firstName: "Ravi",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Customer Feedback Analysis",
        taskDescription: "Review and analyze customer survey responses.",
        taskDate: "2025-01-09",
        category: "Customer Support"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Plan Marketing Campaign",
        taskDescription: "Create a plan for the next advertising campaign.",
        taskDate: "2025-01-19",
        category: "Marketing"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Arjun",
    email: "admin@example.com",
    password: "123"
  }
];

  
export const setLocalStorage=()=>{
    localStorage.setItem("employee",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employee=JSON.parse(localStorage.getItem("employee"))
    const admin=JSON.parse(localStorage.getItem("admin"))
    
    return{employees,admin}
}
  