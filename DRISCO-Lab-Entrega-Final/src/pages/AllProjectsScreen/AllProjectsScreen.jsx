import React, { useRef, useState, useEffect } from "react";
import { appFireBase } from "../../config/firebase";
import './AllProjectsScreen.css'

import { Header, Projects } from '../../components'

export function AllProjectsScreen() {

    const [projectsUploads, setProjectsUploads] = useState([])

    useEffect(() => {
        async function fetchData() {
            const projectsList = await appFireBase.firestore().collection("projectsFiles").get()
            setProjectsUploads(projectsList.docs.map((doc) => doc.data()))
        }
        fetchData()
    }, [])
    

    return (
        <>
            <Header />
            <div className='projects-screen-div'>
                <h1 className='projectsScreenTittle'>All our projects</h1>
                <div className='projects-div'>
                    {
                       projectsUploads.map((doc, id) => 
                            <div key={id}>
                                <Projects imgRut={doc.url} projectRut={doc.behance} caption={doc.name} />
                            </div>
                       ) 
                    }
                </div>
            </div>
        </>
    )
}