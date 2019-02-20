CREATE TABLE public.users
(
    id uuid NOT NULL,
    firstname character varying(128) COLLATE pg_catalog."default" NOT NULL,
    lastname character varying(128) COLLATE pg_catalog."default" NOT NULL,
    email character varying(128) COLLATE pg_catalog."default" NOT NULL,
    phonenumber character varying(128) COLLATE pg_catalog."default",
    passporturl character varying(128) COLLATE pg_catalog."default",
    password character varying(128) COLLATE pg_catalog."default" NOT NULL,
    created_date timestamp without time zone,
    modified_date timestamp without time zone,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email)

)