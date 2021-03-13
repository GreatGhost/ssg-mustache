
/* 
* 功能 : dataObj 对象中，用连续点符号的属性，返回属性值
*比例dataObj:
* {
    a:{
        b:{
            c:100
        }
    }
}
 keyName: 'a.b.c'
 * 返回 100
*
*/
export default function lookup(dataObj,keyName){
    if(keyName.indexOf('.')!=-1 && keyName!='.'){
        var temp=dataObj;
        var keys=keyName.split('.');
        for(let i=0;i<keys.length;i++){
            let key=keys[i];
            temp=temp[key];
        }
        return temp;
    }
    return dataObj[keyName];
}