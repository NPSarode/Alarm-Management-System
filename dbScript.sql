PGDMP  ;    8                 |            expense_tracker    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16493    expense_tracker    DATABASE     �   CREATE DATABASE expense_tracker WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE expense_tracker;
                postgres    false            �            1255    16526    get_expense_balances()    FUNCTION     d  CREATE FUNCTION public.get_expense_balances() RETURNS TABLE(incoming_balance bigint, outgoing_balance bigint)
    LANGUAGE plpgsql
    AS $$
BEGIN
  RETURN QUERY
  SELECT 
    SUM(CASE WHEN incoming = true THEN amount ELSE 0 END) AS incoming_balance,
    SUM(CASE WHEN incoming = false THEN amount ELSE 0 END) AS outgoing_balance
  FROM expenses;
END;
$$;
 -   DROP FUNCTION public.get_expense_balances();
       public          postgres    false            �            1259    16516    expenses    TABLE     �   CREATE TABLE public.expenses (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    amount integer NOT NULL,
    datetime timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    incoming boolean DEFAULT false
);
    DROP TABLE public.expenses;
       public         heap    postgres    false            �            1259    16515    expenses_id_seq    SEQUENCE     �   CREATE SEQUENCE public.expenses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.expenses_id_seq;
       public          postgres    false    216            �           0    0    expenses_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.expenses_id_seq OWNED BY public.expenses.id;
          public          postgres    false    215            Q           2604    16519    expenses id    DEFAULT     j   ALTER TABLE ONLY public.expenses ALTER COLUMN id SET DEFAULT nextval('public.expenses_id_seq'::regclass);
 :   ALTER TABLE public.expenses ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16516    expenses 
   TABLE DATA           H   COPY public.expenses (id, name, amount, datetime, incoming) FROM stdin;
    public          postgres    false    216   G       �           0    0    expenses_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.expenses_id_seq', 9, true);
          public          postgres    false    215            U           2606    16522    expenses expenses_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expenses_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.expenses DROP CONSTRAINT expenses_pkey;
       public            postgres    false    216            �   �   x�}�1
�0��>E.#ɒ�h���n]��B����ҡ����|	�u}m�� ��xQ�&d,�+�,�s��K[��pYZ��9A`<Y.��
eOp���(?�2 ���&aU&�ҧT�S�Ӭ�
M�ɥG��W3ON돢��[6�D��{�z�b��4&A��c� RZL�     