import logger from '../../config/logger';
class GroupLike {
    private seq : number;
    private user_seq : number;
    private group_seq : number;

    constructor(seq: number, user_seq: number, group_seq: number) {
        this.seq = seq
        this.user_seq = user_seq
        this.group_seq = group_seq
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

    public getGroup_seq(): number {
        return this.group_seq;
    }

    public setGroup_seq(group_seq: number): void {
        this.group_seq = group_seq;
    }

    printInfoGroup = (): void => {
        logger.info({
            group_liked_seq : this.seq,
            user_seq : this.user_seq,
            group_seq : this.group_seq
        });
    }
}