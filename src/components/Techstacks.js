import Techstack from "./Techstack";

const techstacks = [{
    title:"TECH STACKS 1",
    description:"Project one and Description"
},
{
    title:"TECH STACKS 2",
    description:"Project twoo and Description"
},
{
    title:"TECH STACKS 3",
    description:"Project tree and Description"
},
{
    title:"TECH STACKS 4",
    description:"Project four and Description"
}]


const Techstacks = () => {
  return (
    <div className="techstacks">
        {techstacks.map(techstack => <Techstack key={techstack.title} title={techstack.title} description={techstack.description }/>)}
    </div>
  );
};

export default Techstacks;















// const Techstacks = () => {
//     return (
//         <div className="techstacks">
//                 <ul>
//                      <p>TECH STACKS 1 </p>
//                      <p>Project one and Description </p>
//                      <p>TECH STACKS 1 </p>
//                      <p>Project one and Description </p>
//                      <p>TECH STACKS 1 </p>
//                      <p>Project one and Description </p>
//                      <p>TECH STACKS 1 </p>
//                      <p>Project one and Description </p>

//                 </ul>
           
//         </div>
//     )
// }


// export default Techstacks