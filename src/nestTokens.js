export default function nestTokens(tokens){
    // 结果数组
    var nestedTokens=[];

    // 栈数组，存放小数组
    var sections=[];

    // 收集器
    var collector=nestedTokens;

    // 折叠tokens
    // 将# / 
    // 
    for(let i=0;i<tokens.length;i++){
        let token=tokens[i];
        switch(token[0]){
            case '#':
                // token[2]=[];
                // sections.push(token);
                // console.log(token,'入栈')
                // // nestedTokens.push(token);
                // 收集器放入token                
                collector.push(token);
                // 入栈
                sections.push(token);

                // 收集器换人,给token添加一个下标为2的[]

                collector=token[2]=[];
                
                break;
            case '/':
                // let pop_section=sections.pop();
                // console.log(pop_section,'出栈');
                // nestedTokens.push(pop_section);
                sections.pop();
                //collector=sections.length>0?sections[sections.length-1][2]:nestedTokens;
                collector=sections.length>0?sections[sections.length-1][2]:nestedTokens;
                break;
            default:
                // if(sections.length==0){
                //     nestedTokens.push(token)
                // }else{
                //     sections[sections.length-1][2].push(token)
                // }
                collector.push(token)

        }
    }
    return nestedTokens;
}