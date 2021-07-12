const coursesData = [
  {
    courseImage: "quantum-screen-assets/images/imageMask-1.svg",
    courseTitle: "Acceleration",
    favourite: true,
    subject: "Physics",
    grade: "Grade 7",
    gradePlus: "+2",
    units: 4,
    lessons: 18,
    topics: 24,
    optionsClass: "Mr. Frank's Class B",
    totalStudents: 50,
    timeline: "21-Jan-2020 - 21-Aug-2020",
    preview: true,
    manageCourse: true,
    gradeSubmission: true,
    reports: true,
  },
  {
    courseImage: "quantum-screen-assets/images/imageMask-2.svg",
    courseTitle: "Displacement, Velocity and Speed",
    favourite: true,
    subject: "Physics 2",
    grade: "Grade 6",
    gradePlus: "+3",
    units: 2,
    lessons: 15,
    topics: 20,
    optionsClass: "No Classes",
    preview: true,
    manageCourse: false,
    gradeSubmission: false,
    reports: true,
  },
  {
    courseImage: "quantum-screen-assets/images/imageMask.svg",
    courseTitle:
      "Introduction to Biology: Micro Organisms and how they affec...",
    favourite: true,
    subject: "Biology",
    grade: "Grade 4",
    gradePlus: "+1",
    units: 5,
    lessons: 16,
    topics: 22,
    optionsClass: "All Classes",
    totalStudents: 300,
    preview: true,
    manageCourse: false,
    gradeSubmission: false,
    reports: true,
  },
  {
    courseImage: "quantum-screen-assets/images/imageMask-3.svg",
    courseTitle: "Introduction to High School Mathematics",
    favourite: false,
    subject: "Mathematics",
    grade: "Grade 8",
    gradePlus: "+3",
    optionsClass: "Mr. Frank's Class A",
    totalStudents: 44,
    timeline: "14-Oct-2019 - 20-Oct-2020",
    preview: true,
    manageCourse: true,
    gradeSubmission: true,
    reports: true,
    expired: true,
  },
];

const courseTemplate = function (course) {
  return `
          <div class="course-card">
            <div class="course-details">
              <div class="course-image">
                <img src="${course.courseImage}" alt="${course.courseTitle}" />
              </div>
                <div class="course-card-info">
                  <div class="course-title-line
                  ${course.courseTitle.length > 25 ? "extended" : ""}
                  ">
                    <span class="course-title">${course.courseTitle}
                    </span>
                    <span class="favourite">
                    <img 
                    src="quantum-screen-assets/icons/favourite${
                      course.favourite ? "" : "-greyed"
                    }.svg" alt="" />
                    </span>
                  </div>
                  <div class="subject-line">
                    <span class="subject">${course.subject}</span
                    ><span class="grade"
                    >Grade 7<span class="grade-plus">${
                      course.gradePlus
                    }</span></span
                    >
                  </div>
                  <div class="course-chapters-line">
                    <span class="course-chapters-line-span"
                    ><span class="course-chapters-number">
                    ${
                      course.units
                        ? `${course.units}</span> Units</span
                    >`
                        : ""
                    }
                      
                    <span class="course-chapters-line-span"
                    ><span class="course-chapters-number">${
                      course.lessons
                        ? `${course.lessons}</span> Lessons</span
                    >`
                        : ""
                    }
                    <span class="course-chapters-line-span"
                    ><span class="course-chapters-number">${
                      course.topics
                        ? `${course.topics}</span> Topics</span
                    >`
                        : ""
                    }
                    </div>
                  <div class="course-class">
                    <select name="course-class" ${
                      course.optionsClass == "No Classes" ? "disabled" : ""
                    }>
                    <option value="">${course.optionsClass}</option>
                    </select>
                  </div>
                  <div class="students-time-line">
                    <span class="students">${
                      course.totalStudents
                        ? course.totalStudents + " Students"
                        : ""
                    }</span>
                    <span class="duration">${
                      course.timeline ? course.timeline : ""
                    }</span>
                  </div>
                </div>
              </div>
              <div class="course-bottom-panel">
                <div class="preview">
                  <a href="#"
                  ><img ${
                    course.preview ? "" : 'class="bottom-panel-disabled"'
                  } src="quantum-screen-assets/icons/preview.svg" alt=""
                  /></a>
                </div>
                <div class="manage-course">
                  <a href="#"
                    ><img
                    ${
                      course.manageCourse ? "" : 'class="bottom-panel-disabled"'
                    }
                    src="quantum-screen-assets/icons/manage course.svg"
                    alt=""
                  /></a>
                </div>
                <div class="grade-submission">
                  <a href="#"
                    ><img ${
                      course.gradeSubmission
                        ? ""
                        : 'class="bottom-panel-disabled"'
                    }
                    src="quantum-screen-assets/icons/grade submissions.svg"
                    alt=""
                  /></a>
                </div>
                <div class="reports">
                  <a href="#"
                    ><img
                    ${course.reports ? "" : 'class="bottom-panel-disabled"'}
                    src="quantum-screen-assets/icons/reports.svg" alt=""
                  /></a>
                </div>
              </div>
              ${course.expired ? '<div class="expired">Expired</div>' : ""}
              
            </div>
          `;
};

document.getElementById("course-container").innerHTML = `
${coursesData.map(courseTemplate).join("")}
`;
