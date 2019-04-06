import React, { Component } from 'react'
import axios from 'axios';

export default class Upload2 extends Component {
    uploadFile = async () => {
        const formData = new FormData()
        formData.append('fileToUpload', document.getElementById('fileToUpload').files[0])
//       onUploadProgress: p => { return 100 * ( p.loaded / p.total ) },
//       onDownloadProgress: p => { return 100 * ( p.loaded / p.total ) }
        var instance = axios.create({
            baseURL: 'http://222.44.10.140/gc2',
            timeout: 3000,
            headers: { 'Content-Type': 'multipart/form-data' },
  
        })

        instance.post('/myupload.php',formData,{
            onUploadProgress (a){
                console.log(a.loaded)
            }
        }).then(()=>{})
    }

    fileSelected = () => {
        var file = document.getElementById('fileToUpload').files[0];
        if (file) {
            var fileSize = 0;
            if (file.size > 1024 * 1024)
                fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
            else
                fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
            document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
            document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
            document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
        }
    }

    render() {
        return (
            <form id="form1" encType="multipart/form-data" method="post">
                <div >
                    <label htmlFor="fileToUpload">Select a File to Upload</label><br />
                    <input type="file" name="fileToUpload" id="fileToUpload" onChange={this.fileSelected} />
                </div>
                <div id="fileName"></div>
                <div id="fileSize"></div>
                <div id="fileType"></div>
                <div >
                    <input type="button" onClick={this.uploadFile} value="Upload" />
                </div>
                <div id="progressNumber"></div>
            </form>
        )
    }
}

