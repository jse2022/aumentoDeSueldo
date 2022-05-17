import "./styles.css";
let sueldoConAumento: number = 0;
let empleadoSueldo: number = Number(prompt("Ingrese sueldo"));
console.log(`Sueldo Actual: ${empleadoSueldo}`);

if (empleadoSueldo > 0 && empleadoSueldo <= 15000) {
  sueldoConAumento = empleadoSueldo * 1.2;
  console.log(`Sueldo con 20% de aumento es: ${sueldoConAumento}`);
} else if (empleadoSueldo >= 15001 && empleadoSueldo <= 20000) {
  sueldoConAumento = empleadoSueldo * 1.1;
  console.log(`Sueldo con 10% de aumento es: ${sueldoConAumento}`);
} else if (empleadoSueldo >= 20001 && empleadoSueldo <= 25000) {
  sueldoConAumento = empleadoSueldo * 1.05;
  console.log(`Sueldo con 5% de aumento es: ${sueldoConAumento}`);
} else {
  console.log(`Sueldo sin aumento`);
}
