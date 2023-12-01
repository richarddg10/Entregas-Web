import React, { useRef, useState } from "react";
import { appFireBase } from '../../config/firebase'

import dropIcon from '../../assets/dropIcon.png'
import plusIcon2 from '../../assets/plusIcon2.png'

import '../AddProjectScreen/AddProjectScreen.css'


import { Header, Buttons, Inputs } from '../../components'

export function AddProjectScreen() {
    const behanceProject = useRef(null);
    const projectTitle = useRef(null);

    const [imgUrl, setImgUrl] = useState()
    const [fileUploaded, setFileUploaded] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleFilePdf = async (e) => {
        e.preventDefault()
        const filePdf = e.target.files[0]
        const storageRef = appFireBase.storage().ref()
        const filePath = storageRef.child(filePdf.name)
        await filePath.put(filePdf)
        console.log('archivo cargado:', filePdf.name);
        const getUrl = await filePath.getDownloadURL()
        setImgUrl(getUrl)
        setFileUploaded(true)
    }

    const handleUploadFiles = async (e) => {
        e.preventDefault()
        const fileName = projectTitle.current.value
        const behanceURL = behanceProject.current.value

        const collectionRef = appFireBase.firestore().collection("projectsFiles")
        const docu = await collectionRef.doc(fileName, behanceURL).set({url: imgUrl, name: fileName, behance: behanceURL})
        console.log('archivo cargado:', fileName, 'behance:', behanceURL, 'url:', imgUrl);

        setFormSubmitted(true)
        projectTitle.current.value = ''
        behanceProject.current.value = ''
    }

    return (
        <>
            <Header />
            <div className='add-screen-div'>
                <h1 className='addScreenTittle'>Upload Proyect</h1>
                <div className='upload-div'>
                    <img className='dropIcon' src={dropIcon} />
                    <div className="btn-input-file">
                        <img src={plusIcon2} />
                        <h1>Add files</h1>
                        <Inputs inputClass='input-add-files' inputType='file' inputName='Add files' onChange={handleFilePdf} />
                        {fileUploaded && alert('Archivo cargado correctamente. Recuerda asegurarte de llenar los campos de texto y enviarlos.')}
                    </div>
                </div>
                <div className='addProjectForm'>
                    <h2 className='descriptionTittle'>Description</h2>
                    <Inputs inputClass='input-project-title' inputRef={projectTitle} inputName='Project Title' />
                    <Inputs inputClass='input-project-behance' inputRef={behanceProject} inputName='URL Behance' />
                    <Buttons onClick={handleUploadFiles} btnType='btn-upload-files' btnTittle='Upload Files' />
                    {formSubmitted && alert('Información cargada correctamente en firebase.')}
                </div>
            </div>
        </>
    )
}
