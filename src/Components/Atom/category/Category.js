import React from 'react'
import classes from './category.module.css'
function Category() {
  return (
    <React.Fragment>
    <div>
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
<a href='/'  className='mx-2 skill_link mt-3'>Multiplications</a>
</div>
<div className='mt-3'>
<span class="skill-tree-skill-number" >E.2</span>
<a href='/' className=' skill_link mx-2'>Plot Grpahs</a>
</div> 
<div className='mt-3'>
<span class="skill-tree-skill-number" >E.3</span>
<a href='/' className=' skill_link mx-2'>Gradient / Intersection </a>
</div>
<div className='mt-3'>
<span class="skill-tree-skill-number" >E.3</span>
<a href='/' className=' skill_link mx-2'>Equations </a>
</div>
</li>
</ol>
</div>
  </div>
  </React.Fragment>
  )
}

export default Category