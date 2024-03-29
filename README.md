# ComIT-NodeJS Project
A sample teaching and tutoring responsive website
## Features
* It comes with 6 HTML pages including Home (as landing page), Programs, Teachers. Courses, Links and Contact
* Programs: main category of the tutoring service, e.g. "Applied Science"
* Courses: are defined under each program; e.g. "Physics 20" or "Physics 30" under "Applied Science" program
* Teachers: are defined separately and then, can be allocated to 0 to many courses (not functional in this version yet)
* Applicants: are users that can apply for one or more courses 
* Applications: a transaction in which an applicant (user) can apply for a specific course 
## Platform
### Frontend
* HTML: Structure is based on html and html templates
* JavaScript: used both on the client-side and server-side to make web pages interactive
* Bootstrap: for styling the html I used bootstrap and 
* CSS: a little bit CSS wherever bootstrap does not have desired facilities 

### Backend
* Nodejs: used as server-side platform
* JavaScript: used both on the client-side and server-side to make web pages interactive
* Express: to provide methods, call HTTP verb ( GET , POST , SET , etc.) and URL pattern ("Route")
* ejs: for rendering htmls 
#### DB model
* MongoDB: used for db model and design of data
* Mongoose:  The data are modeled based on normalised db model, i.e. dividing the data into multiple collections with references between those collections and using populate methods and queries accordingly


## Future Expansion
* To add more CRUD features to programs, courses, applicants and applications
* Add a teacher CRUD form (currently teacher's data are static)
* Add various reports using Mongoos's aggregate and populate methods and features
