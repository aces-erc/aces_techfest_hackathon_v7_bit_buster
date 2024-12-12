import React, { useState } from 'react'

const ImageUpload = () => {
    const [text, setText] = useState("");
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("text", text);
        formData.append("file1", file1);
        formData.append("file2", file2);

        const res = await fetch("http://localhost:8000/upload", {
            method: "POST",
            body: formData
        });
    }
    return (
        <div className='h-screen w-screen bg-red-400 absolute left-0 right-0'>
            <input onChange={(e) => setText(e.target.value)} value={text} type="text" />
            <input onChange={(e) => setFile1(e.target.files[0])} type="file" />
            <input onChange={(e) => setFile2(e.target.files[0])} type="file" />
            <button onClick={handleSubmit} >Upload</button>
        </div>
    )
}

export default ImageUpload