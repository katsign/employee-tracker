  
USE employee_db;

INSERT INTO department (name) VALUES ("Product Design");
INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Visual Art");
INSERT INTO department (name) VALUES ("Animation");

INSERT INTO role (title, salary, department_id) VALUES ("Engineer", 80, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Designer", 70, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Intern", 40, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Director", 100, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Illustrator", 70, 4);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Kat", "Ruth", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Bat", "Snuth", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Lat", "Truth", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Nat", "Bluth", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Gat", "Youth", 1);