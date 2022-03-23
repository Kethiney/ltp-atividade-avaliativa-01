class Noticia{
  constructor(titulo, data_publicacao, resumo, txt){
    this.titulo = titulo;
    this.data_publicacao = data_publicacao;
    this.resumo = resumo;
    this. txt = txt;
  }
  mostrarNoticia(){
    return this.titulo + "\n" + "\n" + this.data_publicacao + "\n" + "\n" + this.resumo + "\n" + this.txt +"\n"
  }
}

var minhaNoticia = new Noticia("Projeto de tatuadora brasileira transforma cicatrizes em arte","17/03/2022 13h19","Mulheres que sofreram violência doméstica, acidentes de carro ou doenças são foco do projeto de SP. 'Voltei a viver (depois dessa tatuagem)', diz uma delas.","Mulheres brasileiras feridas por queimaduras e outros traumas físicos agora podem buscar alívio por meio de uma tatuadora em uma missão para cobrir as cicatrizes, transformando lembranças persistentes de dor em lindos animais e flores. O estúdio da tatuadora de São Paulo Karlla Mendes já aplicou sua habilidade em mais de 150 mulheres da capital paulista com o projeto -  We Are Diamonds")
console.log(minhaNoticia.mostrarNoticia())