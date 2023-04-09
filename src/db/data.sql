-- database: smoothify


create table users (
    user_id UUID uuid_generate_v4(),
    username varchar(40) not null,
    gmail varchar not null,
    password varchar(50) not null,
    subs int default 0
);

create table posts (
    post_id UUID uuid_generate_v4(),
    post_title varchar(245) not null,
    user_id uuid references users(user_id)
);

create table subscribers (
    user_id uuid references users(user_id) not null,
    person uuid references users(user_id) not null
);

create table news (
    news_id uuid uuid_generate_v4(),
    news_title varchar not null
);