import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';

import { ProdutoController } from "./src/controller/ProdutoController";
import { Produto } from "./src/model/Produto";
import { Medicamento } from "./src/model/Medicamento";
import { Cosmetico } from "./src/model/Cosmetico";

export function main() {

    //Variaveis padrão
    let opcao: number;
	let ID: number;

    let tipo, preco: number;
    let nome: string;

    //Variaveis especificas
    let fragancia: string;
    let tarja, quantidade: number;

    let usoPediatrico: number;
    let usoPediatricoConvertido: boolean;

    //Tipos e tarjas disponiveis
    const tipoProdutos = ["Medicamento", "Cosmetico"];
    const tipoTarjas = ["Sem tarja", "Amarela", "vermelha", "Preta"];
    const tipoPediatrico = ["Sim", "Nao"];

    //Trazendo CRUD
    const produtos: ProdutoController = new ProdutoController();

    //Iniciando loop do menu
    while (true) {
        console.log(colors.fg.whitestrong,
                    "*****************************************************");
        console.log("                                                     ");
        console.log(colors.fg.green,
                    "              FARMACIA THE OLDEST HOUSE              ");
        console.log(colors.fg.blue,
                    "                  (THE HEALING PAD)                  ");
        console.log("                                                     ");
        console.log(colors.fg.whitestrong,
                    "*****************************************************");
        console.log(colors.reset,
                    "                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar Todos os Produtos             ");
        console.log("            3 - Consultar Produto por ID             ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log(colors.fg.whitestrong,
                    "*****************************************************");
        console.log(colors.reset,
                    "                                                     ");

        console.log(colors.fg.whitestrong,"Entre com a opção desejada: ",colors.reset);
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.green,
                        "\nFarmacia The Oldest House - Bem-vindo ao departamento!",
                        colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.green,"\n\nCriar Produto\n\n",colors.reset);

                //Perguntas padrão
				console.log(`Digite o Tipo do Produto: `);
                tipo = readlinesync.keyInSelect(tipoProdutos, "", {cancel: false}) + 1;

                console.log(`Digite o Nome do Produto: `);
                nome = readlinesync.question("");

                console.log(`Digite o Preço do Produto: `);
                preco = readlinesync.questionFloat("");

                //Perguntas especificas
                switch(tipo){
                    case 1:
                        console.log(`Digite a Tarja do Medicamento: `);
                        tarja = readlinesync.keyInSelect(tipoTarjas, "", {cancel: false}) + 1;

                        console.log(`Digite a Quantidade de g/ml do Medicamento: `)
                        quantidade = readlinesync.questionInt("");

                        console.log(`Esse medicamento pode ser usado por crianças: `);
                        usoPediatrico = readlinesync.keyInSelect(tipoPediatrico, "", {cancel: false}) + 1;
                        if(usoPediatrico == 1){
                            usoPediatricoConvertido = true;
                        } else {
                            usoPediatricoConvertido = false;
                        }

                        produtos.criar(new Medicamento(produtos.gerarID(), nome, tipo, preco, tarja, quantidade, usoPediatricoConvertido));
                        break;

                    case 2:
                        console.log(`Digite a Fragancia do cosmetico: `);
                        fragancia = readlinesync.question("");
                        
                        produtos.criar(new Cosmetico(produtos.gerarID(), nome, tipo, preco, fragancia));
                        break;
                }
                keyPress()

                break;

            case 2:
                console.log(colors.fg.green,"\n\nListar Todos os Produtos\n\n",colors.reset);
				produtos.listar();

                keyPress()

                break;

            case 3:
                console.log(colors.fg.green,"\n\nConsultar Produto por ID\n\n",colors.reset);
				console.log("Digite o ID do Produto: ");
                ID = readlinesync.questionInt("");

				produtos.consultarPorID(ID);

                keyPress()

                break;

            case 4:
                console.log(colors.fg.green,"\n\nAtualizar Produto\n\n",colors.reset);
                keyPress()

                break;

            case 5:
                console.log(colors.fg.green,"\n\nApagar Produto\n\n",colors.reset);
                keyPress()

                break;

            default:
                console.log(colors.fg.green,"\nOpção Inválida!\n",colors.reset);
                keyPress()

                break;
        }
    }

}

//Função com os dados da pessoa desenvolvedora 
export function sobre(): void {
    console.log(colors.fg.whitestrong,
                "\n*****************************************************");
    console.log(colors.reset,
                "Projeto Desenvolvido por: Roberdan Andrade");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log(colors.fg.whitestrong,
                "*****************************************************"
                ,colors.reset);
}

//Função para pausar o codigo a cada execução do menu
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
