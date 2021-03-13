import Scanner from './Scanner'
import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate'
import lookup from './lookup'
console.log('打印日志')
window.SSG_TemplateEngine={
    render(templateStr,data){

    // 调用parseTemplateToTokens 将模板字符串变为tokens数组
       var tokens=parseTemplateToTokens(templateStr);
        console.log(tokens);
        var domStr=renderTemplate(tokens,data)
        console.log(domStr)
        return domStr;
    }
}
