// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

import Student from "./Student.jsx"

function App() {
    return (
      <>
      <Student name="Kyle Pillay" age={19} isStudent={true}></Student>
      <Student name="Caylem Moodley" age={13} isStudent={false}></Student>
      <Student name="Jordan Govender" age={9} isStudent={true}></Student>
      <Student name="Tristen Roy" age={20} isStudent={false}></Student>
      <Student/>
      </>
    )
}

export default App
