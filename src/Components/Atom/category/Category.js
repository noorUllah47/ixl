import React from 'react'
import { Link } from 'react-router-dom'
import LayOut from '../../../Pages/LayOut'
import classes from './category.module.css'
function Category() {
  return (
    <>
    <div>
      <LayOut/>
        <header class="skill-tree-header" >
    <h1 class={`crisp-splash-header topic-graphs ${classes.green2_text} mx-4`}>
Excercises    </h1>
    <p class={`${classes.description} mx-4`} >
    Here is a list of all of the skills that cover graphs! To start practising, just click on any link.   </p>
    {/* <p class="description mobile-only">
      Here is a list of all of the skills that cover graphs! To start practising, just click on any link.
    </p> */}
  </header></div>
  <div className={`${classes.skill_tree_body}`}>
<div className={`${classes.skills_list}`}>
<ol className={`${classes.skill_ol}`}>
<li className={`${classes.skill_tree_skill_node}`}>
<div className='mt-3'>
<span class="skill-tree-skill-number" >E.1</span>
<Link to={{ pathname:`Multiply`,state: { name: "Ali" }}} className=' skill_link mx-2' >Multiplications</Link>

</div>
<div className='mt-3'>
<span class="skill-tree-skill-number" >E.2</span>
<Link to={{ pathname:`/questions/${1}`,state: { name: "Ali" }}} className=' skill_link mx-2' >Plot Grpahs </Link>

</div> 
<div className='mt-3'>
<span class="skill-tree-skill-number" >E.3</span>
<Link to={{ pathname:`/questions/${2}`,state: { name: "Ali" }}} className=' skill_link mx-2' >Gradient / Intersection </Link>

</div>
<div className='mt-3'>
<span class="skill-tree-skill-number" >E.4</span>
<Link to={{ pathname:`/questions/${4}`,state: { name: "Ali" }}} className=' skill_link mx-2' >Equations </Link>
</div>
</li>
</ol>
</div>
  </div>
  </>
  )
}

export default Category