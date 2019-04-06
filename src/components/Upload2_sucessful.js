import React, { Component } from 'react'
import axios from 'axios';

export default class Upload2 extends Component {
    constructor(prop){
        super(prop);
        this.state={ uploadMessage: '', num: 0 }
     //   this.myRef=React.createRef();
    }
    callback1=(p)=>{
        console.log(p)
        var tt=100 * ( p.loaded / p.total );
       
       this.setState({num: tt })

    }

    uploadFile = async () => {
        const formData = new FormData()
        formData.append('fileToUpload', document.getElementById('fileToUpload').files[0])
        //       onUploadProgress: p => { return 100 * ( p.loaded / p.total ) },
        //       onDownloadProgress: p => { return 100 * ( p.loaded / p.total ) }
        var instance = axios.create({
            baseURL: 'http://222.44.10.140/gc2',
            timeout: 3000,
            headers: { 'Content-Type': 'multipart/form-data' },
            onUploadProgress:function(progressEvent){ //原生获取上传进度的事件
                if(progressEvent.lengthComputable){
                  //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                  //如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
                  this.callback1(progressEvent);
                  //console.log(this)
                }
              }.bind(this)
        })
        console.log(this)
        instance.post('/myupload.php', formData
/*         ,{
            onUploadProgress(p) {
                // var pp=100 * ( p.loaded / p.total );
                //  this.setState({num: ()=>{return 100 * ( p.loaded / p.total ) } })
                console.log(this)
            }

        } */
        ).then((response) => {
            if (response.status === 200) {
                this.setState({ uploadMessage: 'OK' });
            }
        })
    }

    fileSelected = () => {
        /*         var file = document.getElementById('fileToUpload').files[0];
                if (file) {
                    var fileSize = 0;
                    if (file.size > 1024 * 1024)
                        fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
                    else
                        fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
                    document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
                    document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
                    document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
                } */
    }

    render() {
        return (
            <div>
                <form id="form1" className="form-inline" encType="multipart/form-data" method="post">
                    <div className="form-group mb-2">
                        <input type="file" className="form-control-file " name="fileToUpload" id="fileToUpload" onChange={this.fileSelected} />
                    </div>
                    <input type="button" className="btn btn-primary mb-2" onClick={this.uploadFile} value="Upload" />
                    {/*                     <span id="progressNumber"></span>  <span >{this.state.uploadMessage}</span> */}
                </form>

                <div className="progress">
                    <div   className="progress-bar" role="progressbar" style={{width: this.state.num+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
}

