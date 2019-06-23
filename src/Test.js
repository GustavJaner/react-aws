import React from 'react';

const user = {
  fname: "Master",
  lname: "Coder",
};
const element = <h1>Hello, {formatName(user)}!</h1>

function formatName(user) {
  return user.fname + " " + user.lname;
}

// *** EXPORT Component ***    (function component)
function Greeting(props) {
  return (
    <div>
      {element}
      <h3>{props.lol}</h3>
    </div>
  );
}

export default Greeting;


// Props are READ only
// Props is just a parameter/argument to a function/componene
// State is just an attribute variable of the func/componenet
// --> but it is private and fully controlled by the component.
