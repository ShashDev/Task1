import logo from './logo.svg';
import './App.css';

function App() {
  const LeaveTypesList=[

{

"LeaveTypeID": 6813,

"ObjectName": "Casual Leave (CL)",

"Color":"Green"

},

{

"LeaveTypeID": 6809,

"ObjectName": "Comp Off (CO)",

"Color":"Blue"

},

{

"LeaveTypeID": 6812,

"ObjectName": "Elective (EL)",

"Color":"orange"

},

{

"LeaveTypeID": 6811,

"ObjectName": "Privilege Leave (PL)",

"Color":"yellow"

},

{

"LeaveTypeID": 6814,

"ObjectName": "Sick Leave (SL)",

"Color":"purple"

}

];

 

const LeaveStatusList=[

{

"LeaveStatusID": 1526,

"ObjectName": "Approve"

},

{

"LeaveStatusID": 1530,

"ObjectName": "Applied"

},

{

"LeaveStatusID": 1535,

"ObjectName": "Reject"

}

]

 

const userLeaveHistory = {

"EmployeeName": "Vikas",

"EmpCode": 101,

"LeaveHistoryList": [

{

"FromDate": "2023-02-15",

"FromDateDay": "2023-02-15 (Wed)",

"ToDate": "2023-02-15",

"ToDateDay": "2023-02-15 (Wed)",

"Days": 1,

"LeaveTypeID": 6811,

"LeaveStatusID": 1526,

"AppliedByName": "Nikunj Prajapati",

"AppliedOn": "2023-02-21T18:49:31.41",

},

{

"FromDate": "2023-02-06",

"FromDateDay": "2023-02-06 (Mon)",

"ToDate": "2023-02-06",

"ToDateDay": "2023-02-06 (Mon)",

"Days": 1,

"LeaveTypeID": 6812,

"AppliedByName": "Nikunj Prajapati",

"AppliedOn": "2023-02-09T18:42:47.937",

"LeaveStatusID": 1526,

},

{

"FromDate": "2023-02-03",

"FromDateDay": "2023-02-03 (Fri)",

"ToDate": "2023-02-03",

"ToDateDay": "2023-02-03 (Fri)",

"Days": 0.5,

"LeaveTypeID": 6809,

"AppliedByName": "Nikunj Prajapati",

"AppliedOn": "2023-02-03T00:00:00",

"LeaveStatusID": 1535,

},

{

"FromDate": "2023-02-03",

"FromDateDay": "2023-04-03 (Fri)",

"ToDate": "2023-02-03",

"ToDateDay": "2023-04-03 (Fri)",

"Days": 0.5,

"LeaveTypeID": 6814,

"AppliedByName": "Nikunj Prajapati",

"AppliedOn": "2023-02-03T00:00:00",

"LeaveStatusID": 1530,

}

]
}
  return ( 

    <div className="App">
      
    {

LeaveTypesList.map((i)=>(
  (<div key={i.LeaveTypeID}>
    <h1>{i.ObjectName}</h1>
    <h2>{i.Color}</h2>
    </div>)
))
  }

    
    </div>
  );
}

export default App;
