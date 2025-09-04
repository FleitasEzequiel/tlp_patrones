interface Equipo {
    detalles(): string;
}

class TNotebook implements Equipo {
    private nombre: string;
    private ram: string;
    private procesador: string;

    constructor(nombre: string,ram: string, procesador:string) {
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }
    detalles():string {
      return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class TDesktop implements Equipo {
    private nombre: string ;
    private marca: string;
    private vendedor: string;

    constructor(nombre: string, marca: string,vendedor: string) {
        this.marca = marca;
        this.vendedor = vendedor;
        this.nombre = nombre;
    }

    detalles(): string {
      return `Tipo: Desktop, Nombre: ${this.nombre} - Marca: ${this.marca} - Vendedor: ${this.vendedor}`;
    }
}

class TServer implements Equipo {
    private nombre: string ;
    private modelo: string
    private mother: string;
    constructor(nombre: string, modelo: string,mother: string) {
        this.modelo = modelo;
        this.mother = mother;
        this.nombre = nombre;
    }
    detalles(): string{
      return `Tipo: Server, Nombre: ${this.nombre} - Modelo: ${this.modelo} - Motherboard: ${this.mother}`;
    }
}

export class EquipoFactory {
    public crearEquipo(tipo: string,param1:string, param2:string, param3: string): Equipo {
        if (tipo === 'Notebook') {
            return new TNotebook(param1, param2, param3);
        } else if (tipo === 'Desktop') {
            return new TDesktop(param1, param2, param3);
        } else if (tipo === 'Server'){
          return new TServer(param1, param2, param3)
        }
        throw new Error('Tipo de producto no reconocido');
    }
}

