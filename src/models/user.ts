class User {
    private seq : number;
    private email : string;
    private nickname : string;
    private token : string;
    private social : string;
    private file : string;
    private login_time : string;
    private edit_time : string;
    private join_time : string;
    private deleted : Boolean;

    constructor(
        seq: number, 
        email: string, 
        nickname: string, 
        token: string, 
        social: string, 
        file: string, 
        login_time: string, 
        edit_time: string, 
        join_time: string, 
        deleted: Boolean
    )
    {
        this.seq = seq
        this.email = email
        this.nickname = nickname
        this.token = token
        this.social = social
        this.file = file
        this.login_time = login_time
        this.edit_time = edit_time
        this.join_time = join_time
        this.deleted = deleted
    }

    public getSeq(): number {
        return this.seq;
    }

    public setSeq(seq: number): void {
        this.seq = seq;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getNickname(): string {
        return this.nickname;
    }

    public setNickname(nickname: string): void {
        this.nickname = nickname;
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): void {
        this.token = token;
    }

    public getSocial(): string {
        return this.social;
    }

    public setSocial(social: string): void {
        this.social = social;
    }

    public getFile(): string {
        return this.file;
    }

    public setFile(file: string): void {
        this.file = file;
    }

    public getLogin_time(): string {
        return this.login_time;
    }

    public setLogin_time(login_time: string): void {
        this.login_time = login_time;
    }

    public getEdit_time(): string {
        return this.edit_time;
    }

    public setEdit_time(edit_time: string): void {
        this.edit_time = edit_time;
    }

    public getJoin_time(): string {
        return this.join_time;
    }

    public setJoin_time(join_time: string): void {
        this.join_time = join_time;
    }

    public isDeleted(): Boolean {
        return this.deleted;
    }

    public setDeleted(deleted: Boolean): void {
        this.deleted = deleted;
    }

    printInfoUser = (): void => {
        console.log({
            user_seq : this.seq,
            user_email : this.email,
            user_nickname : this.nickname,
            user_token : this.token,
            user_social : this.social,
            user_file : this.file,
            user_login_time : this.login_time,
            user_edit_time : this.edit_time,
            user_join_time : this.join_time,
            user_deleted : this.deleted
        });
    }
}