import Scanner from './Scanner'
import nestTokens from './nestTokens'
/* 
    将模板字符串变为tokens数组
*/
export default function parseTemplateToTokens(templateStr){
    var tokens=[];
    var scanner=new Scanner(templateStr);
    var words;
    while(scanner.eos()){
        // 收集开始标记出现之前的文字
        words=scanner.scanUtil('{{')

        // 收集
        if(words){
            tokens.push(['text',words.replace(/\s/g,'')]);
        }
        
        // 跳过双大括号
        scanner.scan("{{")

        // 收集变量
        words=scanner.scanUtil('}}')
        if(words){
            if(words.indexOf('#')>-1){
                tokens.push(['#',words.substring(1)]);
            }else if(words.indexOf('/')>-1){
                tokens.push(['/',words.substring(1)]);
            }else{
                tokens.push(['name',words]);
            }
        }

        //跳过大括号
        scanner.scan('}}');
    }
    console.log(tokens)
    return nestTokens(tokens);
}