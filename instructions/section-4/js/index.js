const today = new Date() ;
console.log(today);

const thisYear = today.getFullYear();
console.log(thisYear);

const footer = document.querySelector('footer') ;

const copyRight = document.createElement('p') ;
copyRight.innerHTML = 'Jesus Nava ' + thisYear ;

footer.appendChild(copyRight) ;

const skills = ['Fast Learner', 'Problem Solving', 'Time Management', 'Adaptability'] ;
const skillsSection = document.getElementById('skills');

 //const skillsList = document.querySelector(skillsSection)
 //Didn't work with line 16.

for (i = 0; i < skills.length; i++) {
    let skillsElement = document.createElement('li');
    let mySkills = skills[i];
    skillsElement.innerText = mySkills;
    skillsSection.appendChild(skillsElement);
}

