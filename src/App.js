import React,{useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
//functinal components
const App = () => {
  // return <h1 title='this is title'>A React App!</h1>; // React.createElement('h1',{}, A React App)
  const [courseGoals,setCourseGoals]=useState([
    {id:'cg1',text:'finish the course'},
    {id:'cg2',text:'learn mern well'},
    {id:'cg3',text:'rock your skills'},
  ]);

  const addNewGoalHandler = (newGoal) =>{
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals)=>prevCourseGoals.concat(newGoal));
  }
  return <div className='course-goals'>
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals}/>
  </div>
};

export default App;
