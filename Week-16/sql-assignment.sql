create database warehouse;
use warehouse;

-- table CITIES--------------------------
CREATE TABLE cities  
(  
city varchar(20)NOT NULL,  
state varchar(20),
PRIMARY KEY (city)
) 
select * from cities;

-- table WAREHOUSES----------------------------
CREATE TABLE warehouses  
(  
w_id int NOT NULL,  
w_name varchar(20),
location varchar(20),
foreign key (location) REFERENCES cities(city)
)
select * from warehouses;
drop table warehouses;
-- table STORES------------
CREATE TABLE stores  
(  
s_id int NOT NULL,  
s_name varchar(20),
location varchar(20),
foreign key (location) REFERENCES cities(city)
)

select * from stores;
drop table stores;

-- table CUSTOMERS ----------
create table customers  
(  
c_id int NOT NULL,  
c_name varchar(20),
address varchar(50),
c_city varchar(20),
foreign key (c_city) REFERENCES cities(city),
primary key (c_id)
)

select * from customers;
drop table customers;


-- table ITEMS ----------------
CREATE TABLE items  
(  
i_id int NOT NULL,  
description varchar(20),
weight decimal(5,2),
cost decimal(5,2),
primary key (i_id)
)

select * from items;
drop table items;

-- table OREDERS ----------
create table orders  
(  
o_id int NOT NULL,  
o_date varchar(20),
i_id int,
c_id int,
foreign key (i_id) REFERENCES items(i_id),
foreign key (c_id) REFERENCES customers(c_id)
)

select * from orders;

-- INSERTION ---------
insert into cities
VALUES ("Pune", "Maharashtra"), ("Mumbai", "Maharashtra"), ("Banglore", "Mysore"); 
insert into cities
VALUES ("Delhi", "Delhi"); 
insert into warehouses
VALUES (1, "warehouse-1","Pune"), (2,"warehouse-2", "Mumbai"), (3,"warehouse-3", "Banglore");
insert into warehouses
VALUES (4, "warehouse-4","Pune"), (5,"warehouse-5", "Banglore"), (6,"warehouse-6", "Pune");  
select * from warehouses;

insert into stores
VALUES (3, "store-3","Pune"), (4,"store-4", "Mumbai"), (5,"store-5", "Banglore");
insert into stores
VALUES (6, "store-6","Delhi");  
select * from stores;

insert into customers
VALUES (10, "Rachel","lane-1","Pune"), (11,"Joey","lane-2","Mumbai"), (12,"Ross","lane-3","Banglore");
select * from customers;


insert into items
VALUES (20, "Mango","2.0","500"), (21,"Kiwi","0.25","100"), (22,"Apple","1.0","150");
select * from items;

insert into orders
VALUES (30, "1 Jan",20,10), (31,"2 Jan",21,11), (32,"3 Jan",20,12),
		(33,"4 Jan",22,10);
select * from orders;

--   Queries
/* Find the item that has minimum weight. */
select * from items;
select i_id, min(weight) from items; 

/* Find the different warehouses in “Pune”. */
select * from warehouses;
select * from warehouses where location='Pune';

/* Find the details of items ordered by a customer “Mr. Patil” */
insert into customers
VALUES (13, "Mr.Patil","lane-4","Mumbai");
select * from customers;
insert into orders
VALUES (34, "6 Jan",20,13), (35,"2 Jan",22,13);
select * from orders;

/* Find a Warehouse which has maximum stores. */
select max(select count(location) from stores) from warehouses where w_location = stores.location;

/* Find an item which is ordered for a minimum number of times. */
select min(count(i_id)) from orders;

/* Find the detailed orders given by each customer. */
SELECT customers.c_name, customers.address, customers.c_city, orders.o_date, orders.o_id
FROM Orders
INNER JOIN Customers ON Orders.c_id = Customers.c_id; 

select * from warehouses;
select * from stores;
select * from customers;
select * from orders;
select * from items;

