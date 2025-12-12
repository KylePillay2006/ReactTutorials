// Student Component


// propTypes = a mechanism that ensures that the passed value
//             is of the correct datatype.
//             age: PropTypes.number

// defaultProps = default values for props in case they are not
//                passed from the parent component
//                name: "Guest"

import PropTypes from 'prop-types';

function Student({ name = "Guest", age = 0, isStudent = false }) {
    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

export default Student;

