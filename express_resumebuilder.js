var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/resume", function (req, res) {
  res.sendFile(__dirname + "/resumebuilder.html");
});
app.get('/process_get', function (req, res) {
  var firstName = req.query.first_name || "";
  var lastName = req.query.last_name || "";
  var address = req.query.address || "";
  var phone = req.query.phone || "";
  var email = req.query.email || "";
  var university = req.query.university || "";
  var degree = req.query.degree || "";
  var graduationYear = req.query.graduation_year || "";
  var jobTitle = req.query.job_title || "";
  var company = req.query.company || "";
  var workStartDate = req.query.work_start_date || "";
  var workEndDate = req.query.work_end_date || "";
  var skills = req.query.skills || "";

  var responseHTML = `
    <h1>Resume Information</h1>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <h2>Education</h2>
    <p><strong>University/College:</strong> ${university}</p>
    <p><strong>Degree:</strong> ${degree}</p>
    <p><strong>Graduation Year:</strong> ${graduationYear}</p>
    <h2>Work Experience</h2>
    <p><strong>Job Title:</strong> ${jobTitle}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Start Date:</strong> ${workStartDate}</p>
    <p><strong>End Date:</strong> ${workEndDate}</p>
    <h2>Additional Skills</h2>
    <p><strong>Skills:</strong> ${skills}</p>
  `;

  res.send(responseHTML);
});

var server = app.listen(8081, function () { });
