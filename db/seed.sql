INSERT INTO department(department_name)
VALUES("Engineering"), ("Design"), ("Production"), ("Media"), ("Marketing");

INSERT INTO role(title, salary, department_id)
VALUES("Designer", 80000, 2), ("Senior Designer", 120000, 2), ("President", 220000, 1), ("Intern", 30000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Kat', 'Ruth', 1, 2), ('Bat', 'Snuth', 1, null), ('Gat', 'Proof', 1, 2), ('Sat', 'Truth', 2, 2), ('Lat', 'Couth', 4, null);