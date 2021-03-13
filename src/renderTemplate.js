import lookup from './lookup'
import parseArray from './parseArray'
export default function renderTemplate(tokens,data){
    
    // 结果DOM字符串
    var resultStr='';
    for(let i=0;i<tokens.length;i++){
        let token=tokens[i];
        if(token[0]==='text'){
            resultStr+=token[1]
        }else if(token[0]==='name'){
            console.log(token[1])
            resultStr+=lookup(data,token[1]);
        }else if(token[0]==='#'){
            resultStr+=parseArray(token,data)
        }
    }
    return resultStr;
}