import { Soporte } from "./Soporte.ts";
export class Equipo {
    private observadores: Soporte[] = [];
    private nombre: string;
    private tipo: string;
    private estado: string;
    constructor(nombre: string,tipo: string,estado: string) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.estado = estado;
    }
    agregarObservador(observador: Soporte): void {
        this.observadores.push(observador);
    }

    eliminarObservador(observador: Soporte): void {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this.nombre, this.estado));
    }
}

