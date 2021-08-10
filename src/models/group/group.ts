class Group{
    private seq : number;
    private user_seq : number;
    private name : string;
    private kind : string;
    private status : Boolean;
    private liked : number;
    private start_date : string;
    private place : string;
    private chat_link : string;
    private total_user : number;
    private join_user : number;
    private about : string;
    private hashtag : Object;
    private edit_time : string;
    private create_time : string;
    private deleted : Boolean;

    constructor(
        seq: number, 
        user_seq: number, 
        name: string, 
        kind: string, 
        status: Boolean, 
        liked: number, 
        start_date: string, 
        place: string, 
        chat_link: string, 
        total_user: number, 
        join_user: number, 
        about: string, 
        hashtag: Object, 
        edit_time: string, 
        create_time: string, 
        deleted: Boolean
    )   
    {
        this.seq = seq
        this.user_seq = user_seq
        this.name = name
        this.kind = kind
        this.status = status
        this.liked = liked
        this.start_date = start_date
        this.place = place
        this.chat_link = chat_link
        this.total_user = total_user
        this.join_user = join_user
        this.about = about
        this.hashtag = hashtag
        this.edit_time = edit_time
        this.create_time = create_time
        this.deleted = deleted
    }

    public getSeq(): number {
        return this.seq;
    }

    public setSeq(seq: number): void {
        this.seq = seq;
    }

    public getUser_seq(): number {
        return this.user_seq;
    }

    public setUser_seq(user_seq: number): void {
        this.user_seq = user_seq;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getKind(): string {
        return this.kind;
    }

    public setKind(kind: string): void {
        this.kind = kind;
    }

    public isStatus(): Boolean {
        return this.status;
    }

    public setStatus(status: Boolean): void {
        this.status = status;
    }

    public getLiked(): number {
        return this.liked;
    }

    public setLiked(liked: number): void {
        this.liked = liked;
    }

    public getStart_date(): string {
        return this.start_date;
    }

    public setStart_date(start_date: string): void {
        this.start_date = start_date;
    }

    public getPlace(): string {
        return this.place;
    }

    public setPlace(place: string): void {
        this.place = place;
    }

    public getChat_link(): string {
        return this.chat_link;
    }

    public setChat_link(chat_link: string): void {
        this.chat_link = chat_link;
    }

    public getTotal_user(): number {
        return this.total_user;
    }

    public setTotal_user(total_user: number): void {
        this.total_user = total_user;
    }

    public getJoin_user(): number {
        return this.join_user;
    }

    public setJoin_user(join_user: number): void {
        this.join_user = join_user;
    }

    public getAbout(): string {
        return this.about;
    }

    public setAbout(about: string): void {
        this.about = about;
    }

    public getHashtag(): Object {
        return this.hashtag;
    }

    public setHashtag(hashtag: Object): void {
        this.hashtag = hashtag;
    }

    public getEdit_time(): string {
        return this.edit_time;
    }

    public setEdit_time(edit_time: string): void {
        this.edit_time = edit_time;
    }

    public getCreate_time(): string {
        return this.create_time;
    }

    public setCreate_time(create_time: string): void {
        this.create_time = create_time;
    }

    public isDeleted(): Boolean {
        return this.deleted;
    }

    public setDeleted(deleted: Boolean): void {
        this.deleted = deleted;
    }

    printInfoGroup = (): void => {
        console.log({
            group_seq : this.seq,
            user_seq : this.user_seq,
            group_name : this.name,
            group_kind : this.kind,
            group_status : this.status,
            group_liked : this.liked,
            group_start_date : this.start_date,
            group_place : this.place,
            group_chat_link : this.chat_link,
            group_total_user : this.total_user,
            group_join_user : this.join_user,
            group_about : this.about,
            group_hashtag : this.hashtag,
            group_edit_time : this.edit_time,
            group_create_time : this.create_time
        });
    }
}