// var form = document.getElementById("programForm");

// //Add a "listener" to the action "submit" in the object "form"
// //the arrow function receives the "event" object when the "submit happens"
// form.addEventListener("submit", async (event) => {
//   event.preventDefault(); //prevent refreshing the page when the form is submitted in the "submit event"

// Add program
//=========================================
const func1 = async function () {
  // console.log("submit activated in form-submit");

  let title = document.getElementById("title");
  let desc = document.getElementById("desc");

  if (title.value && desc.value) {
    const url = "http://localhost:3000/addProgram"; //location of the endpoint
    //object that holds the data to send
    let data = {
      title: title.value,
      desc: desc.value,
      imageURL: imageURL.value
    };

    var request = new Request(url, {
      method: "POST",
      body: JSON.stringify(data), //convert the object with the data into a "JSON string"
      headers: { "Content-type": "application/json; charset=UTF-8" }, //add headers with the data type and encoding format
    });
    let response = await fetch(request); //call the endpoint (backend) using Javascript function "fetch" and "await" for the response
    if (response.ok) {
      //check if "ok" attribute of object "response" is true. If it is true, it means that the response was successful
      // let id = await response.json(); //get the "id" returned by the endpoint

      window.alert(`New program: ${data.title} created successfully`);
    } else {
      window.alert(`There is an error .....`);
    }
  } else {
    window.alert("Please complete the form");
  }
};

// Add Course to a program
//=========================================
const func2 = async function () {
  const programId = document.getElementById("programId").value;
  const courseTitle = document.getElementById("courseTitle").value; // course title
  const date1 = document.getElementById("date1").value;
  const date2 = document.getElementById("date2").value;
  const status = document.getElementById("status").value;
  const teacher = document.getElementById("teacher").value;

  if (programId && title && date1 && date2 && status && teacher) {
    const url = "http://localhost:3000/addCourse"; //location of the endpoint

    let data = {
      programId: programId,
      title: courseTitle, // course title
      date1: date1,
      date2: date2,
      teacher: teacher,
      status: status
    };

    var request = new Request(url, {
      method: "POST",
      body: JSON.stringify(data), //convert the object with the data into a "JSON string"
      headers: { "Content-type": "application/json; charset=UTF-8" }, //add headers with the data type and encoding format
    });

    let response = await fetch(request); //call the endpoint (backend) using Javascript function "fetch" and "await" for the response

    if (response.ok) {
      //check if "ok" attribute of object "response" is true. If it is true, it means that the response was successful
      // let id = await response.json(); //get the "id" returned by the endpoint

      window.alert(`New course: ${data.title} created successfully`);
    } else {
      window.alert(`There is an error .....`);
    }
  } else {
    window.alert("Please complete all data in the form");
  }
};

//Add Applicant
//=========================================
const func3 = async () => {

  const course_id = document.getElementById("course_id").value,
    _program = document.getElementById("_program").value,
    _course = document.getElementById("_course").value,
    name = document.getElementById("name").value,
    age = document.getElementById("age").value,
    email = document.getElementById("email").value,
    phone = document.getElementById("phone").value,
    comment = document.getElementById("comment").value,
    requestDate = document.getElementById("requestDate");

  if (name && age && email && phone && comment) {
    let confirmSubmit = window.confirm("Are you sure to send yor request for this course?");
    if (confirmSubmit) {
      const url = "http://localhost:3000/addApplication"; //location of the endpoint
      //object that holds the data to send
      let data = {
        course_id: course_id,
        name: name,
        age: age,
        email: email,
        phone: phone,
        comment: comment,
        // requestDate: requestDate,
      };

      var request = new Request(url, {
        method: "POST",
        body: JSON.stringify(data), //convert the object with the data into a "JSON string"
        headers: { "Content-type": "application/json; charset=UTF-8" }, //add headers with the data type and encoding format
      });

      const response = await fetch(request); //call the endpoint (backend) using Javascript function "fetch" and "await" for the response

      if (response.ok) {
        const message =
          `Thanks for your request!\n
          Your Email:${data.email} \n
          Program: ${_program}, Course: ${_course}\n
          We will contact you within 2-3 business days`;
        alert(message);
        //check if "ok" attribute of object "response" is true. If it is true, it means that the response was successful
        // let id = await response.json(); //get the "id" returned by the endpoint

      } else {
        window.alert(`Ther is an error .....`);
      }
    }
  } else {
    window.alert("Please complete the form");
  }
};

// Create json Reports
//=========================================
async function jsonReports(value) {
  // clear table content
  var wrapper = document.getElementById("wrapper");
  wrapper.innerHTML = "";
  var url
  switch (value) {
    case "1":
      url = "http://localhost:3000/allPrograms";
      break;

    case "2":
      url = "http://localhost:3000/allCourses";
      break;

    case "4":
      url = "http://localhost:3000/allApplicants";
      break;

    case "5":
      url = "http://localhost:3000/allApplications";
      break;

    default:
      break;
  }
  await fetch(url)
    .then(res => res.json())
    .then(res => jsonData = res);
  if (jsonData.length == 0) {
    // return "<h3>No Data yet..............</h3>"
    document.getElementById("wrapper").innerHTML = "<h3>No Data yet..............</h3>";
  }
  else {
    try {
      var jsonData = JSON.parse(dataStr);
    } catch (e) { }
    var tree = jsonTree.create(jsonData, wrapper);

    tree.expand(function (node) {
      return node.childNodes.length < 20
      return node.label === 'report';
    });
  }
}
