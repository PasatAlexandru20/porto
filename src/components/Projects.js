import Project from "./Project";

const projects = [{
    title:"Project title 1",
    description:"Project one /  Description"
},
{
    title:"Project title 2",
    description:"Project two /  Description"
},
{
    title:"Project title 3",
    description:"Project tree /  Description"
},
{
    title:"Project title 4",
    description:"Project four /  Description"
}]


const Projects = () => {
  return (
    <div className="projects">
        {projects.map(project => <Project title={project.title} description={project.description}/>)}
    </div>
  );
};

export default Projects;
