import { useState } from 'react';
import './App.css'
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/newGoal/NewGoal';
function App() {

  const [courseGoals, setCourseGoal]=useState([
    {id:'cg1', text:'Finish to the course'},
    {id:'cg2', text:'Learn all about the main course'},
    {id:'cg3', text:'Help other student in the main course'},
  ])
const addNewGoalHandler = (newGoal) =>{
  // setCourseGoal(courseGoals.concat(newGoal))
  setCourseGoal((previousCourseGoal)=>{
      return previousCourseGoal.concat(newGoal)
  })
}
  return (
   <div className='course-goals'>
    <h2 >Course Goals </h2>
    <NewGoal addNewGoalHandler={addNewGoalHandler}/>
    <GoalList goals ={courseGoals}/>
   </div>
  );
}

export default App;
