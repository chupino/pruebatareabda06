conn = new Mongo();
db = conn.getDB("bd06_empleados");

db.empleados.insert([
{
    _id : 1,
    nombre :  "Julio",
    departamento : "Sistemas",
    sueldo : 3500,
},
{
    _id : 2,
    nombre :  "Romina",
    departamento : "Contabilidad",
    sueldo : 2800,
},
{
    _id : 3,
    nombre :  "Kassandra",
    departamento : "Sistemas",
    sueldo : 3800,
},
{
    _id : 4,
    nombre :  "Pedro",
    departamento : "Contabilidad",
    sueldo : 1600,
},
{
    _id : 5,
    nombre :  "Miguel",
    departamento : "Logistica",
    sueldo : 3000,
},
{
    _id : 6,
    nombre :  "Felipe",
    departamento : "Sistemas",
    sueldo : 2600,
}
]);