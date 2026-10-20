// mudar.js -- o aviso que fica no endereco antigo (GitHub Pages, branch "aviso"; fonte: cozinha/produtos/galeria/aviso-github/).
// Leva quem chega por um link antigo para o MESMO caminho no endereco novo e, se houver progresso de jogo salvo
// AQUI (origem vitorsaboya.github.io), leva o progresso junto pela pagina /mudanca do endereco novo.
// O pacote vai no #fragmento, que nao sai do aparelho. So as chaves conhecidas dos jogos do lab.
var MUDAR = {
  NOVO: 'https://datart-genlab.pages.dev',
  CHAVES: ['joguinho-aprender-ler-v1', 'brigada-da-familia-v1', 'benjogos_v2_jogadores', 'benjogos_v2_sessao', 'matematica-benjamin-v1'],
  caminho: function () {
    return (location.pathname.replace(/^\/Datart-GenLab(?=\/|$)/, '') || '/') + location.search + location.hash;
  },
  ir: function (caminho) {
    var salvo = {}, n = 0;
    try {
      MUDAR.CHAVES.forEach(function (k) { var v = localStorage.getItem(k); if (v !== null) { salvo[k] = v; n++; } });
    } catch (e) { /* sem armazenamento: vai sem progresso */ }
    if (n) location.replace(MUDAR.NOVO + '/mudanca#' + encodeURIComponent(JSON.stringify({ d: caminho, s: salvo })));
    else location.replace(MUDAR.NOVO + caminho);
  }
};
