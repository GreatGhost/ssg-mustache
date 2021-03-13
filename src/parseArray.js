/* 
  *处理数组，结合renderTemplate实现递归
  *这个函数收的是token，不是tokens
  * 例子
  * token: ['#','students',[]]
  * 
  * 
*/
import './lookup'
import lookup from './lookup';
import './renderTemplate'
import renderTemplate from './renderTemplate';

export default function parseArray(token,data){
    console.log(token);
    console.log(data);
    var v=lookup(data,token[1]);
    console.log(v)
    var resultStr='';
    for(let i=0;i<v.length;i++){
        resultStr+=renderTemplate(token[2],{
            ...v[i],
            '.':v[i]
        })
    }
    return resultStr
}