import React, { Component } from 'react'
import axios from 'axios';
import XLSX from 'xlsx';
import Listall from '../api/Listall'

export default class Upload2 extends Component {
    constructor(prop) {
        super(prop);
        this.state = { uploadMessage: '', num: 0, maxlen: 0, curlen: 0, data: [] }
        //   this.myRef=React.createRef();
    }
    callback1 = (p) => {
        console.log(p)
        var tt = 100 * (p.loaded / p.total);

        this.setState({ num: tt })

    }

    importExcel = (e) => {

        var files = e.target.files;
        //    var name = files.name;
        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_csv(ws, { header: 2 });
            console.log("Data>>>" + data);
        };
        reader.readAsBinaryString(files[0]);
    }

    onImportExcel = file => {
        // 获取上传的文件对象
        const { files } = file.target;
        // 通过FileReader对象读取文件
        const fileReader = new FileReader();
        fileReader.onload = event => {
            try {
                const { result } = event.target;
                // 以二进制流方式读取得到整份excel表格对象
                const workbook = XLSX.read(result, { type: 'binary' });
                // 存储获取到的数据
                let data = [];
                // 遍历每张工作表进行读取（这里默认只读取第一张表）
                for (const sheet in workbook.Sheets) {
                    // esline-disable-next-line
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // 利用 sheet_to_json 方法将 excel 转成 json 数据
                        data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet], { header: 2 }));
                        // break; // 如果只取第一张表，就取消注释这行
                    }
                }
                // 最终获取到并且格式化后的 json 数据
                //           message.success('上传成功！')
                // console.log(data[0]);



                var len = data.length
                this.setState({ maxlen: len, data: data })
                var j = 0;
                this.saveAllRecords(j, len);
                //   this.saveRecord(data[0]);

            } catch (e) {
                // 这里可以抛出文件类型错误不正确的相关提示
                //           message.error('文件类型不正确！');
            }
        };
        // 以二进制方式打开文件  const term3 = term1 + `,a10:"` + data.a10 + `"`
        fileReader.readAsBinaryString(files[0]);
    }
    saveAllRecords = (j, length) => {
        this.saveRecord(this.state.data[j]).then(() => {
            if (++j < length) {
                this.saveAllRecords(j, length);
            }
        })
    }

    saveRecord = async (data) => {
        const term1 = `mutation{createX(input:{x:{a1:"` + data.a1 + `", a2:"` + data.a2 + `",a3:"` + data.a3 + `",a4:"` + data.a4 + `",a5:"` + data.a5 + `",a6:"` + data.a6 + `", a7:"` + data.a7 + `",a8:"` + data.a8 + `",a35:"` + data.a35 + `"`
        const term3 = term1 + `,a10:"` + data.a10 + `",a12:"` + data.a12 + `"`
        const term2 = `}}){x {a1,a2,a3,a4,a5,a6,a7,a8,a35,a10} } }`
        const term = term3 + term2
        //    term = `query{wgryByLxfs(lxfs:"18221698859") {lxfs,dwry,  ds  }}`
        console.log("zzzzzzzzzzzzzzzzzz", term)
        //const response = 
        await Listall.post('/graphql', term).then((response) => {

            if (response.status === 200) {
                console.log("One Record Saved!");
                this.setState({ curlen: this.state.curlen + 1 });
            }


        })

        //  console.log(response)
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
            onUploadProgress: function (progressEvent) { //原生获取上传进度的事件
                if (progressEvent.lengthComputable) {
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
                <input type="file" id="excel-file" onChange={this.onImportExcel} />

                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: 100 * (this.state.curlen / this.state.maxlen) + '%' }} aria-valuenow={this.state.curlen} aria-valuemin="0" aria-valuemax={this.state.maxlen}></div>
                </div>
                <div>{this.state.curlen}</div>
            </div>
        )
    }
}

