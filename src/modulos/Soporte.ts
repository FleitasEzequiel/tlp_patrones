export class Soporte {
  private id: number = Math.floor(Math.random() * 1000);
    actualizar(nombre: string, estado: string): void {
        console.log(`Soporte notificado. ${nombre} ha cambiado su estado a ${estado}`);
    }
}