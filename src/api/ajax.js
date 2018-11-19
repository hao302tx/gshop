import axios from 'axios'
export default function ajax (url, data= {}, type = 'GET') {
    return new Promise(function (resolve,reject) {
        //执行异步ajax请求
        //成功了调用resolve
        let promise;
        if(type === 'GET') {
            let dataStr = '';
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr != '') {
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
            }
            promise = axios.get(url);
        } else {
            promise = axios.post(url,data)
        }
        promise.then(function(response) {
            resolve(response.data);
            //成功了调用resolve
        }).catch(function(error) {
            reject(error);
            //失败了调用reject
        })
        })
    
}