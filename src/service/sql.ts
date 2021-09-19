export const search_user_SQL = 'select * from d_user where user_email = $1 and user_token = $2 and user_social = $3 and user_deleted = false'

export const add_user_SQL = 'insert into d_user (user_email, user_nickname, user_token, user_social, user_file)\
                            values ($1, $2, $3, $4, $5)'

export const update_user_profile_SQL = 'update'