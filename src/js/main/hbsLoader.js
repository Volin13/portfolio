import useSkillsListItem from '../../templates/usedSkillsListItem.hbs';
import newSkillsListItem from '../../templates/newSkillsListItem.hbs';
import usedSkills from '../../data/skillsUsed.json';
import newSkills from '../../data/skillesNew.json';
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.skills__list-used').innerHTML =
    useSkillsListItem(usedSkills);
  document.querySelector('.skills__list-new').innerHTML =
    newSkillsListItem(newSkills);
});
