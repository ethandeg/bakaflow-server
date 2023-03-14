class ReportedError {
    private code: string;
    private desc: string;

    constructor(code: string, desc: string) {
        this.setCode(code);
        this.setDesc(desc);
    }

    getCode():string{
        return this.code;
    }
    getDesc():string{
        return this.desc;
    }
    setCode(code:string){
        if(code.length >30) throw new Error("Code length needs to be 30 characters or less");
        this.code=code;
    }
    setDesc(desc:string){
        if(desc.length>100) throw new Error("Desc length needs to be 100 characters or less");
        this.desc=desc;
    }

    get(){
        const query = "SELECT * FROM reported_error WHERE code=$1";
    }
}