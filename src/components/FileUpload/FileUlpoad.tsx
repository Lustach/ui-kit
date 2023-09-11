import React, { useState, useRef } from 'react'
import * as F from './FileUpload.styled';
export const DragDropFile = ({ accept, multiple }: { accept?: string, multiple:boolean }) => {

    const [dragActive, setDragActive] = useState(false);
    const [imgSrc, setImgSrc] = useState('')
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleDrag = function (e: React.DragEvent) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function (e: React.DragEvent) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0])
        }
    };
    const handleFile = (files: File) => {
        const fr = new FileReader();
        fr.onload = (event) => {
            if (event.target) {
                const result = event.target.result as string;
                setImgSrc(result)
            }
        };
        fr.readAsDataURL(files)
    }
    const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0])
        }
    };

    const onButtonClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    return (
        <F.Form onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <F.Input ref={inputRef} type="file" id="input-file-upload" onChange={handleChange} accept={accept || ''} multiple={multiple}/>
            <F.Label htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                {imgSrc && <F.Thumbnail src={imgSrc}></F.Thumbnail>}
                <div>
                    <F.Title>Перетащите файл сюда или</F.Title>
                    <F.FormButton buttonType='text' onClick={onButtonClick}><span>Загрузите</span></F.FormButton>
                </div>
            </F.Label>
            {dragActive && <F.DragFileElement onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} />}
        </F.Form>
    );
};