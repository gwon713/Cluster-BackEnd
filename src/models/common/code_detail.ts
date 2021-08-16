import logger from '../../config/logger';
class Code_detail{
    private code_id : string;
    private code_detail_id : string;
    private code_detail_name : string;
    private code_detail_etc : string;
    private use_at : Boolean;

    constructor(
        code_id: string, 
        code_detail_id: string, 
        code_detail_name: string, 
        code_detail_etc: string, 
        use_at: Boolean
    ) 
    {
        this.code_id = code_id
        this.code_detail_id = code_detail_id
        this.code_detail_name = code_detail_name
        this.code_detail_etc = code_detail_etc
        this.use_at = use_at
    }
   
    public getCode_id(): string {
        return this.code_id;
    }

    public setCode_id(code_id: string): void {
        this.code_id = code_id;
    }

    public getCode_detail_id(): string {
        return this.code_detail_id;
    }

    public setCode_detail_id(code_detail_id: string): void {
        this.code_detail_id = code_detail_id;
    }

    public getCode_detail_name(): string {
        return this.code_detail_name;
    }

    public setCode_detail_name(code_detail_name: string): void {
        this.code_detail_name = code_detail_name;
    }

    public getCode_detail_etc(): string {
        return this.code_detail_etc;
    }

    public setCode_detail_etc(code_detail_etc: string): void {
        this.code_detail_etc = code_detail_etc;
    }

    public isUse_at(): Boolean {
        return this.use_at;
    }

    public setUse_at(use_at: Boolean): void {
        this.use_at = use_at;
    }

    printInfoCode_detail = () : void => {
        logger.info({
            code_id : this.code_id,
            code_detail_id : this.code_detail_id,
            code_detail_name : this.code_detail_name,
            code_detail_etc : this.code_detail_etc,
            use_at : this.use_at
        });
    }
};