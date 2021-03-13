export default class Scanner{
    constructor(templateStr){
        this.pos=0;
        this.tail=templateStr;
        this.templateStr=templateStr;
    }

    scan(tag){
        if(this.tail.indexOf(tag)===0){
            // tag有多长，指针往后移多少位
            this.pos+=tag.length;
            // 尾巴也要改变
            this.tail=this.templateStr.substring(this.pos);
        }
    }
    // 让指针进行扫描，知道找到
    scanUtil(tag){
        const pos_backup=this.pos;

        // 写&& 的必要,当寻找到最后的时候，要停下来
        while(this.eos() && this.tail.indexOf(tag)!=0){
            this.pos++;
            this.tail=this.templateStr.substring(this.pos);
        }
        // 截取一段
        return this.templateStr.substring(pos_backup,this.pos);
    }
    // 指针是否到头，返回布尔值
    eos(){
        return this.pos<this.templateStr.length;
    }
}