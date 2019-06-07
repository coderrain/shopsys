const fs = require('fs');

//{u:1,v:2}
const fetch = (url, arg)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(url, (err,data)=>{
            if(err){
                reject({code:0, msg: '读取fsStore失败'})
            }
            let result = JSON.parse(data.toString())
            if(typeof arg != 'undefined'){
	            result = result.filter(item=>{
	                let num = 0;
                    let key = Object.keys(arg)
	                for(let i=0;i<key.length;i++){
	                    if(item[key[i]] == arg[key[i]]){
	                        num++;
	                    }
	                }
	                return num == key.length;

	            })
            }
            /*if(typeof arg != 'undefined'){
                //{key:shopId,val:1}
                console.log(arg)
                result = result.filter(item=>{
                       return item[arg['key']] == arg['val']
                })

            }*/
            resolve({
                code: 1,
                data: result
            })

        })
    })
}
const add = (url, obj) => {
    return new Promise((resolve, reject)=>{
        fetch(url).then(data=>{
            let result = data.data;
            obj['id'] = result.length+1;
            result.push(obj)
            fs.writeFile(url,JSON.stringify(result),(err)=>{
                if(err){
                    return reject({
                        code:0
                    })
                }
                resolve({
                    code:1,
                    data: result
                })

            })
        })
    })
}

/*del(url, {key:'name',val:1})
[{name:1,age:24}]*/
const del = (url, obj) =>{
    return new Promise((resolve, reject)=>{
        fetch(url).then(data=>{
            let result = data.data;
            result =  result.filter(item=>{
                return item[obj['key']] != obj['val']
            })
            fs.writeFile(url, JSON.stringify(result), err=>{
                if(err){
                    return reject({
                        code: 0
                    })
                }
                resolve({
                    code:1,
                    data: result
                })
            })
        })
    })
}

// update(url, {key:'name',val:1},{age:24})
const update = (url, term, updateData)=>{
    return new Promise((resolve, reject)=>{
        fetch(url).then(data=>{
            data = data.data; // {code:1,data:[]}
            let result = data.map((item,index)=>{
                if(item[term.key] == term.val){
                    for(let key in updateData){
                        item[key] = updateData[key]
                    }
                }
                return item;
            })
            fs.writeFile(url, JSON.stringify(result), err=>{
                if(err){
                    return reject({code:0})
                }
                resolve({code:1,data: result})
            })

        })
    })
}


module.exports = {
    fetch,
    update,
    del,
    add
}