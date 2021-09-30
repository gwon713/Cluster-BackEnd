export const search_user_SQL = 'select * from d_user where user_email = $1 and user_token = $2 and user_social = $3 and user_deleted = false'

export const add_user_SQL = 'insert into d_user (user_email, user_nickname, user_token, user_social) values ($1, $2, $3, $4)'

export const update_user_profile_SQL = 'update d_user set user_nickname = $1 where user_email = $2 and user_token = $3 and user_social = $4'