import { Produto } from "./Produto";

export class Medicamento extends Produto{
    //Atributos
    private _tarja: number;
    private _quantidade: number;
    private _usoPediatrico: boolean;

    //Construtor
	constructor(id: number, nome: string, tipo: number, preco: number, tarja: number, quantidade: number, usoPediatrico: boolean) {
        super(id, nome, tipo, preco);
		this._tarja = tarja;
		this._quantidade = quantidade;
		this._usoPediatrico = usoPediatrico;
	}

    //Get e set
	public get tarja(): number {
		return this._tarja;
	}

	public get quantidade(): number {
		return this._quantidade;
	}

	public get usoPediatrico(): boolean {
		return this._usoPediatrico;
	}

	public set tarja(value: number) {
		this._tarja = value;
	}

	public set quantidade(value: number) {
		this._quantidade = value;
	}

	public set usoPediatrico(value: boolean) {
		this._usoPediatrico = value;
	}

    //Visualizar
    public visualizar(): void {
		let tarja: string = "";
        switch(this._tarja){
            case 1:
                tarja = "Sem tarja"
                break;
            
            case 2:
                tarja = "Amarela"
                break;

            case 3:
                tarja = "vermelha"
                break;

			case 4:
				tarja = "Preta"
				break;
        }

        super.visualizar();
        console.log(`Tarja do Medicamento: ${tarja}`);
        console.log(`Quantidade do Medicamento: ${this.quantidade}(ml/g)`);
        console.log(`Uso Pediatrico: ${this._usoPediatrico}`);
    }
}
