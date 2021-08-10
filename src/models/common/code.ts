class Code{
    private code_id : string;
    private code_name : string;
    private code_etc : string;
    private use_at : Boolean;

    constructor(
        code_id: string, 
        code_name: string, 
        code_etc: string, 
        use_at: Boolean
    ) 
    {
        this.code_id = code_id
        this.code_name = code_name
        this.code_etc = code_etc
        this.use_at = use_at
    }

    public getCode_id(): string {
        return this.code_id;
    }

    public setCode_id(code_id: string): void {
        this.code_id = code_id;
    }

    public getCode_name(): string {
        return this.code_name;
    }

    public setCode_name(code_name: string): void {
        this.code_name = code_name;
    }

    public getCode_etc(): string {
        return this.code_etc;
    }

    public setCode_etc(code_etc: string): void {
        this.code_etc = code_etc;
    }

    public isUse_at(): Boolean {
        return this.use_at;
    }

    public setUse_at(use_at: Boolean): void {
        this.use_at = use_at;
    }

    printInfoCode = () : void => {
        console.log({
            code_id : this.code_id,
            code_name : this.code_name,
            code_etc : this.code_etc,
            use_at : this.use_at
        });
    }
};