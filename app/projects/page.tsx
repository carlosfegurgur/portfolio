import { Gallery } from "../components/gallery/Gallery";
import  { projectList }  from './projectList'

export default function Projects() {
    return(
        <>
            <Gallery projects={projectList} />
        </>
    )
}