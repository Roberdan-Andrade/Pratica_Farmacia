import { Produto } from "./Produto";

export class Cosmetico extends Produto{
    //Atributos
    private _fragancia: string;

    //Construtor
	constructor(id: number, nome: string, tipo: number, preco: number, fragancia: string) {
        super(id, nome, tipo, preco);
		this._fragancia = fragancia;
	}

    //Get e set
	public get fragancia(): string {
		return this._fragancia;
	}

	public set fragancia(value: string) {
		this._fragancia = value;
	}

	//Visualizar
	public visualizar(): void {
        super.visualizar();
        console.log(`Fragancia do Produto: ${this._fragancia}`);
	}
}
