const PRODUCTS = [ {
  "id":"p0001","name":"Varão 8#","category":"Ferros","spec":"Varão 8#","price":125,"unit":"un.","code":"MGVARAO08","image":"images/produtos/varao.jpg","page":1
}
, {
  "id":"p0002","name":"Varão 10#","category":"Ferros","spec":"Varão 10#","price":185,"unit":"un.","code":"MGVARAO10","image":"images/produtos/varao.jpg","page":1
}
, {
  "id":"p0003","name":"30*30-5.0mm","category":"Materiais e acessórios","spec":"30*30-5.0mm","price":650.0,"unit":"un.","code":"A definir","image":null,"page":1
}
, {
  "id":"p0004","name":"Cantoneira 40*40-3.0mm","category":"Ferros","spec":"Cantoneira 40*40-3.0mm","price":510.0,"unit":"un.","code":"A definir","image":"images/produtos/cantoneira.jpg","page":1
}
, {
  "id":"p0005","name":"Cantoneira 30*30-3.0mm","category":"Ferros","spec":"Cantoneira 30*30-3.0mm","price":350.0,"unit":"un.","code":"A definir","image":"images/produtos/cantoneira.jpg","page":1
}
, {
  "id":"p0006","name":"Cantoneira 25*25-3.0mm","category":"Ferros","spec":"Cantoneira 25*25-3.0mm","price":310.0,"unit":"un.","code":"A definir","image":"images/produtos/cantoneira.jpg","page":1
}
, {
  "id":"p0007","name":"3.2#","category":"Materiais e acessórios","spec":"3.2#","price":430.0,"unit":"un.","code":"A definir","image":null,"page":1
}
, {
  "id":"p0008","name":"Electrode 2.5#","category":"Eletrodos","spec":"Electrode 2.5#","price":220,"unit":"un.","code":"MGELECTRODE25","image":"images/produtos/eletrodo.jpg","page":1
}
, {
  "id":"p0009","name":"IBR 0.5mm*0.85*3.6","category":"Chapas IBR","spec":"IBR 0.5mm*0.85*3.6","price":895,"unit":"un.","code":"MGIBR050","image":"images/produtos/ibr.jpg","page":1
}
, {
  "id":"p0010","name":"IBR 0.4mm*0.85*3.6","category":"Chapas IBR","spec":"IBR 0.4mm*0.85*3.6","price":770,"unit":"un.","code":"MGIBR040","image":"images/produtos/ibr.jpg","page":1
}
, {
  "id":"p0011","name":"IBR 0.3mm*0.85*3.6","category":"Chapas IBR","spec":"IBR 0.3mm*0.85*3.6","price":540,"unit":"un.","code":"MGIBR030","image":"images/produtos/ibr.jpg","page":1
}
, {
  "id":"p0012","name":"IBR 0.25mm*0.85*3.6","category":"Chapas IBR","spec":"IBR 0.25mm*0.85*3.6","price":465,"unit":"un.","code":"MGIBR025","image":"images/produtos/ibr.jpg","page":1
}
, {
  "id":"p0013","name":"Chapa de aço 1mm","category":"Ferros","spec":"Chapa de aço 1mm","price":1600.0,"unit":"un.","code":"A definir","image":"images/produtos/chapa-aco.jpg","page":1
}
, {
  "id":"p0014","name":"Chapa de aço 1.2mm","category":"Ferros","spec":"Chapa de aço 1.2mm","price":1800.0,"unit":"un.","code":"A definir","image":"images/produtos/chapa-aco.jpg","page":1
}
, {
  "id":"p0015","name":"Tubos de 1.0mm*20*30","category":"Tubos","spec":"Tubos de 1.0mm*20*30","price":355.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":1
}
, {
  "id":"p0016","name":"Tubos de 1.0mm*40*40","category":"Tubos","spec":"Tubos de 1.0mm*40*40","price":440.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":1
}
, {
  "id":"p0017","name":"Tubos de 1.0mm*25*25","category":"Tubos","spec":"Tubos de 1.0mm*25*25","price":290.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":1
}
, {
  "id":"p0018","name":"42.5","category":"Materiais e acessórios","spec":"42.5","price":510.0,"unit":"un.","code":"A definir","image":null,"page":2
}
, {
  "id":"p0019","name":"CIMENTO DUGONGO 32.5","category":"Cimentos","spec":"CIMENTO DUGONGO 32.5","price":480,"unit":"un.","code":"A definir","image":"images/produtos/cimento.jpg","page":2
}
, {
  "id":"p0020","name":"Corda de remo azul de","category":"Materiais e acessórios","spec":"Corda de remo azul de","price":4250.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":2
}
, {
  "id":"p0021","name":"800m x 10kg Corda PE azul de 20 mm x","category":"Materiais e acessórios","spec":"800m x 10kg Corda PE azul de 20 mm x","price":2350.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":2
}
, {
  "id":"p0022","name":"Corda PE azul de 12 mm x","category":"Materiais e acessórios","spec":"Corda PE azul de 12 mm x","price":1600.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":2
}
, {
  "id":"p0023","name":"Corda PE azul de 10 mm x","category":"Materiais e acessórios","spec":"Corda PE azul de 10 mm x","price":1050.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":2
}
, {
  "id":"p0024","name":"Corda PE azul de 16 mm x","category":"Materiais e acessórios","spec":"Corda PE azul de 16 mm x","price":860.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":2
}
, {
  "id":"p0025","name":"Corda PE azul de 10 mm x","category":"Materiais e acessórios","spec":"Corda PE azul de 10 mm x","price":300.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":2
}
, {
  "id":"p0026","name":"Corda PE azul de 8 mm x","category":"Materiais e acessórios","spec":"Corda PE azul de 8 mm x","price":280.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":2
}
, {
  "id":"p0027","name":"Corda PE 6M-10M","category":"Materiais e acessórios","spec":"Corda PE 6M-10M","price":45.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":2
}
, {
  "id":"p0028","name":"Tubos de 1.0mm*30*30","category":"Tubos","spec":"Tubos de 1.0mm*30*30","price":355.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":2
}
, {
  "id":"p0029","name":"Tubos de 1.0mm*20*20","category":"Tubos","spec":"Tubos de 1.0mm*20*20","price":205.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":2
}
, {
  "id":"p0030","name":"Tubos de 1.0mm*20*40","category":"Tubos","spec":"Tubos de 1.0mm*20*40","price":355.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":2
}
, {
  "id":"p0031","name":"Tubos de 0.8mm*20*40","category":"Tubos","spec":"Tubos de 0.8mm*20*40","price":285.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":2
}
, {
  "id":"p0032","name":"Tubos de 0.8mm*30*30","category":"Tubos","spec":"Tubos de 0.8mm*30*30","price":270.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":2
}
, {
  "id":"p0033","name":"Tubos de 0.8mm*25*25","category":"Tubos","spec":"Tubos de 0.8mm*25*25","price":215.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":2
}
, {
  "id":"p0034","name":"Tubos de 0.8mm*20*20","category":"Tubos","spec":"Tubos de 0.8mm*20*20","price":185.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":2
}
, {
  "id":"p0035","name":"Precos para telhado com","category":"Pregos","spec":"Precos para telhado com","price":110.0,"unit":"kg","code":"A definir","image":null,"page":2
}
, {
  "id":"p0036","name":"prastico Precos para telhado sem","category":"Pregos","spec":"prastico Precos para telhado sem","price":90.0,"unit":"kg","code":"A definir","image":null,"page":2
}
, {
  "id":"p0037","name":"prastico Preco de 6#","category":"Pregos","spec":"prastico Preco de 6#","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":2
}
, {
  "id":"p0038","name":"Preco de 5#","category":"Pregos","spec":"Preco de 5#","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":2
}
, {
  "id":"p0039","name":"Corda PE 8M-10M","category":"Materiais e acessórios","spec":"Corda PE 8M-10M","price":90.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":3
}
, {
  "id":"p0040","name":"Corda entrançada 10M","category":"Materiais e acessórios","spec":"Corda entrançada 10M","price":20.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":3
}
, {
  "id":"p0041","name":"Corda entrançada 15M","category":"Materiais e acessórios","spec":"Corda entrançada 15M","price":25.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":3
}
, {
  "id":"p0042","name":"Corda entrançada 20M","category":"Materiais e acessórios","spec":"Corda entrançada 20M","price":30.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":3
}
, {
  "id":"p0043","name":"Corda PE 8MM-100Y","category":"Materiais e acessórios","spec":"Corda PE 8MM-100Y","price":625.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":3
}
, {
  "id":"p0044","name":"Corda PE 10MM-100Y","category":"Materiais e acessórios","spec":"Corda PE 10MM-100Y","price":1070.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":3
}
, {
  "id":"p0045","name":"Corda PE 12MM-100Y","category":"Materiais e acessórios","spec":"Corda PE 12MM-100Y","price":1520.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":3
}
, {
  "id":"p0046","name":"Corda PE 14MM-100Y","category":"Materiais e acessórios","spec":"Corda PE 14MM-100Y","price":1990.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":3
}
, {
  "id":"p0047","name":"Corda PE 16mm - 100","category":"Materiais e acessórios","spec":"Corda PE 16mm - 100","price":2910.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":3
}
, {
  "id":"p0048","name":"Corda de construção","category":"Materiais e acessórios","spec":"Corda de construção","price":45.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":3
}
, {
  "id":"p0049","name":"Corda de construção","category":"Materiais e acessórios","spec":"Corda de construção","price":35.0,"unit":"un.","code":"A definir","image":"images/produtos/corda.jpg","page":3
}
, {
  "id":"p0050","name":"Preco de 4#","category":"Pregos","spec":"Preco de 4#","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":3
}
, {
  "id":"p0051","name":"Preco de 3.5#","category":"Pregos","spec":"Preco de 3.5#","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":3
}
, {
  "id":"p0052","name":"Preco de 3#","category":"Pregos","spec":"Preco de 3#","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":3
}
, {
  "id":"p0053","name":"Preco de 2#","category":"Pregos","spec":"Preco de 2#","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":3
}
, {
  "id":"p0054","name":"Preco de 1#","category":"Pregos","spec":"Preco de 1#","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":3
}
, {
  "id":"p0055","name":"Amarrador de 9 m","category":"Materiais e acessórios","spec":"Amarrador de 9 m","price":140.0,"unit":"un.","code":"A definir","image":null,"page":3
}
, {
  "id":"p0056","name":"Amarrador de 15 m","category":"Materiais e acessórios","spec":"Amarrador de 15 m","price":185.0,"unit":"un.","code":"A definir","image":null,"page":3
}
, {
  "id":"p0057","name":"Amarrador de 20 m","category":"Materiais e acessórios","spec":"Amarrador de 20 m","price":230.0,"unit":"un.","code":"A definir","image":null,"page":3
}
, {
  "id":"p0058","name":"Torniquete de 10 m","category":"Materiais e acessórios","spec":"Torniquete de 10 m","price":255.0,"unit":"un.","code":"A definir","image":null,"page":3
}
, {
  "id":"p0059","name":"1600m x 2kg de fio de","category":"Materiais e acessórios","spec":"1600m x 2kg de fio de","price":600.0,"unit":"un.","code":"A definir","image":null,"page":3
}
, {
  "id":"p0060","name":"Pistola de rebites JM-1004","category":"Materiais e acessórios","spec":"Pistola de rebites JM-1004","price":400.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0061","name":"Pistola de Pregos com Acabamento Espelhado","category":"Pregos","spec":"Pistola de Pregos com Acabamento Espelhado","price":280.0,"unit":"un.","code":"A definir","image":"images/produtos/prego.jpg","page":4
}
, {
  "id":"p0062","name":"1008F U-nail 1008#","category":"Materiais e acessórios","spec":"1008F U-nail 1008#","price":40.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0063","name":"Presilhas quadradas de aço para cabos Quadrado","category":"Materiais e acessórios","spec":"Presilhas quadradas de aço para cabos Quadrado","price":20.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0064","name":"6mm Presilhas quadradas de aço para cabos Quadrado","category":"Materiais e acessórios","spec":"6mm Presilhas quadradas de aço para cabos Quadrado","price":20.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0065","name":"8mm Presilhas quadradas de aço para cabos Quadrado","category":"Materiais e acessórios","spec":"8mm Presilhas quadradas de aço para cabos Quadrado","price":25.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0066","name":"10mm Presilhas quadradas de aço para cabos Quadrado","category":"Materiais e acessórios","spec":"10mm Presilhas quadradas de aço para cabos Quadrado","price":30.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0067","name":"12mm Presilhas quadradas de aço para cabos Quadrado","category":"Materiais e acessórios","spec":"12mm Presilhas quadradas de aço para cabos Quadrado","price":35.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0068","name":"14mm Presilhas quadradas de aço para cabos Redondo","category":"Materiais e acessórios","spec":"14mm Presilhas quadradas de aço para cabos Redondo","price":20.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0069","name":"6mm Presilhas redondas em aço","category":"Materiais e acessórios","spec":"6mm Presilhas redondas em aço","price":20.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0070","name":"para cabos Redondo 8mm Presilhas redondas em aço para cabos Redondo","category":"Materiais e acessórios","spec":"para cabos Redondo 8mm Presilhas redondas em aço para cabos Redondo","price":30.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0071","name":"800m x 2kg de fio de","category":"Materiais e acessórios","spec":"800m x 2kg de fio de","price":600.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0072","name":"800m x 1kg de fio de","category":"Materiais e acessórios","spec":"800m x 1kg de fio de","price":330.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0073","name":"400m x 1kg de fio de","category":"Materiais e acessórios","spec":"400m x 1kg de fio de","price":310.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0074","name":"Película de malha aberta","category":"Materiais e acessórios","spec":"Película de malha aberta","price":475.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0075","name":"preta de 2 mm x 2 kg Película de malha aberta","category":"Materiais e acessórios","spec":"preta de 2 mm x 2 kg Película de malha aberta","price":245.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0076","name":"Abraçadeira de mangueira","category":"Materiais e acessórios","spec":"Abraçadeira de mangueira","price":185.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0077","name":"5/8\" (100 unidades) Abraçadeira de mangueira","category":"Materiais e acessórios","spec":"5/8\" (100 unidades) Abraçadeira de mangueira","price":180.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0078","name":"1/2\" (100 unidades) Abraçadeira de mangueira","category":"Materiais e acessórios","spec":"1/2\" (100 unidades) Abraçadeira de mangueira","price":185.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0079","name":"3/4\" (100 unidades) Abraçadeira de mangueira","category":"Materiais e acessórios","spec":"3/4\" (100 unidades) Abraçadeira de mangueira","price":205.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0080","name":"1\" (100 unidades) Abraçadeira de mangueira","category":"Materiais e acessórios","spec":"1\" (100 unidades) Abraçadeira de mangueira","price":265.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0081","name":"1 1/2\" (100 unidades) Abraçadeira de mangueira","category":"Materiais e acessórios","spec":"1 1/2\" (100 unidades) Abraçadeira de mangueira","price":380.0,"unit":"un.","code":"A definir","image":null,"page":4
}
, {
  "id":"p0082","name":"Presilhas redondas em aço para cabos Redondo","category":"Materiais e acessórios","spec":"Presilhas redondas em aço para cabos Redondo","price":35.0,"unit":"un.","code":"A definir","image":null,"page":5
}
, {
  "id":"p0083","name":"12mm Abraçadeira em nylon","category":"Materiais e acessórios","spec":"12mm Abraçadeira em nylon","price":65.0,"unit":"un.","code":"A definir","image":null,"page":5
}
, {
  "id":"p0084","name":"5*300mm preto Abraçadeira em nylon","category":"Materiais e acessórios","spec":"5*300mm preto Abraçadeira em nylon","price":65.0,"unit":"un.","code":"A definir","image":null,"page":5
}
, {
  "id":"p0085","name":"5*300mm branco Abraçadeira em nylon","category":"Materiais e acessórios","spec":"5*300mm branco Abraçadeira em nylon","price":90.0,"unit":"un.","code":"A definir","image":null,"page":5
}
, {
  "id":"p0086","name":"5*400mm preto Abraçadeira em nylon","category":"Materiais e acessórios","spec":"5*400mm preto Abraçadeira em nylon","price":90.0,"unit":"un.","code":"A definir","image":null,"page":5
}
, {
  "id":"p0087","name":"5*400mm branco Abraçadeira em nylon","category":"Materiais e acessórios","spec":"5*400mm branco Abraçadeira em nylon","price":115.0,"unit":"un.","code":"A definir","image":null,"page":5
}
, {
  "id":"p0088","name":"5*500mm preto Abraçadeira em nylon","category":"Materiais e acessórios","spec":"5*500mm preto Abraçadeira em nylon","price":115.0,"unit":"un.","code":"A definir","image":null,"page":5
}
, {
  "id":"p0089","name":"5*500mm branco Abraçadeira em nylon","category":"Materiais e acessórios","spec":"5*500mm branco Abraçadeira em nylon","price":35.0,"unit":"un.","code":"A definir","image":null,"page":5
}
, {
  "id":"p0090","name":"5*200mm preto Abraçadeira em nylon","category":"Materiais e acessórios","spec":"5*200mm preto Abraçadeira em nylon","price":35.0,"unit":"un.","code":"A definir","image":null,"page":5
}
, {
  "id":"p0091","name":"Pesador 216","category":"Materiais e acessórios","spec":"Pesador 216","price":1450.0,"unit":"un.","code":"A definir","image":null,"page":5
}
, {
  "id":"p0092","name":"Pesador 217","category":"Materiais e acessórios","spec":"Pesador 217","price":1335.0,"unit":"un.","code":"A definir","image":null,"page":5
}
, {
  "id":"p0093","name":"Abraçadeira de mangueira","category":"Materiais e acessórios","spec":"Abraçadeira de mangueira","price":415.0,"unit":"un.","code":"A definir","image":null,"page":5
}
, {
  "id":"p0094","name":"Corrente de 4 mm","category":"Materiais e acessórios","spec":"Corrente de 4 mm","price":125.0,"unit":"kg","code":"A definir","image":null,"page":5
}
, {
  "id":"p0095","name":"Corrente de 6 mm","category":"Materiais e acessórios","spec":"Corrente de 6 mm","price":115.0,"unit":"kg","code":"A definir","image":null,"page":5
}
, {
  "id":"p0096","name":"Corrente de 8 mm","category":"Materiais e acessórios","spec":"Corrente de 8 mm","price":115.0,"unit":"kg","code":"A definir","image":null,"page":5
}
, {
  "id":"p0097","name":"Corrente de 10 mm","category":"Materiais e acessórios","spec":"Corrente de 10 mm","price":115.0,"unit":"kg","code":"A definir","image":null,"page":5
}
, {
  "id":"p0098","name":"Corrente de 12 mm","category":"Materiais e acessórios","spec":"Corrente de 12 mm","price":115.0,"unit":"kg","code":"A definir","image":null,"page":5
}
, {
  "id":"p0099","name":"Corrente de 4 mm","category":"Materiais e acessórios","spec":"Corrente de 4 mm","price":115.0,"unit":"kg","code":"A definir","image":null,"page":5
}
, {
  "id":"p0100","name":"Pesador 218","category":"Ferramentas","spec":"Pesador 218","price":1430.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0101","name":"Pesador 219","category":"Ferramentas","spec":"Pesador 219","price":1725.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0102","name":"Pesador 220","category":"Ferramentas","spec":"Pesador 220","price":1660.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0103","name":"Pesador 221","category":"Ferramentas","spec":"Pesador 221","price":1795.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0104","name":"Pesador 222","category":"Ferramentas","spec":"Pesador 222","price":2280.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0105","name":"Pesador 223","category":"Ferramentas","spec":"Pesador 223","price":3220.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0106","name":"Pesador 224","category":"Ferramentas","spec":"Pesador 224","price":130.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0107","name":"Eletrodomésticos Secador de cabelo de","category":"Eletrodos","spec":"Eletrodomésticos Secador de cabelo de","price":1100.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0108","name":"assento branco Secador de cabelo de","category":"Ferramentas","spec":"assento branco Secador de cabelo de","price":1100.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0109","name":"assento preto Secador de mãos pequeno","category":"Ferramentas","spec":"assento preto Secador de mãos pequeno","price":1050.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0110","name":"Secador de mãos","category":"Ferramentas","spec":"Secador de mãos","price":1930.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0111","name":"Pesador 225","category":"Ferramentas","spec":"Pesador 225","price":210.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0112","name":"Pesador 226","category":"Ferramentas","spec":"Pesador 226","price":165.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0113","name":"Pesador 227","category":"Ferramentas","spec":"Pesador 227","price":280.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0114","name":"Pesador 228","category":"Ferramentas","spec":"Pesador 228","price":280.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0115","name":"Pesador 229","category":"Ferramentas","spec":"Pesador 229","price":185.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0116","name":"Pesador 230","category":"Ferramentas","spec":"Pesador 230","price":280.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0117","name":"Pesador 231","category":"Ferramentas","spec":"Pesador 231","price":510.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0118","name":"Pesador 232","category":"Ferramentas","spec":"Pesador 232","price":115.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0119","name":"Pesador 233","category":"Ferramentas","spec":"Pesador 233","price":180.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0120","name":"Máquina de soldar","category":"Ferramentas","spec":"Máquina de soldar","price":6695.0,"unit":"un.","code":"A definir","image":null,"page":6
}
, {
  "id":"p0121","name":"elétricas Berbequim pequeno","category":"Ferramentas","spec":"elétricas Berbequim pequeno","price":1475.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0122","name":"500W 10B# Berbequim de impacto","category":"Ferramentas","spec":"500W 10B# Berbequim de impacto","price":1955.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0123","name":"800W MD-13B Serra de esquadria","category":"Ferramentas","spec":"800W MD-13B Serra de esquadria","price":8510.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0124","name":"Berbequim pequeno","category":"Ferramentas","spec":"Berbequim pequeno","price":1840.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0125","name":"Cola Cola PVC 250g","category":"Ferramentas","spec":"Cola Cola PVC 250g","price":85.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0126","name":"F1 HGQ 650ML Espuma","category":"Ferramentas","spec":"F1 HGQ 650ML Espuma","price":85.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0127","name":"Universal F1 650ML pneu","category":"Ferramentas","spec":"Universal F1 650ML pneu","price":115.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0128","name":"VIRA 500ml","category":"Ferramentas","spec":"VIRA 500ml","price":125.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0129","name":"VIRA 750ml 600g","category":"Ferramentas","spec":"VIRA 750ml 600g","price":165.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0130","name":"PVC 125ml azul","category":"Ferramentas","spec":"PVC 125ml azul","price":55.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0131","name":"Máquina de soldar","category":"Ferramentas","spec":"Máquina de soldar","price":7315.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0132","name":"Meakida 400S Motosserra Makeada MD","category":"Ferramentas","spec":"Meakida 400S Motosserra Makeada MD","price":6095.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0133","name":"52CC Berbequim grande Grander","category":"Ferramentas","spec":"52CC Berbequim grande Grander","price":5360.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0134","name":"MD-72303 Conjunto de berbequim","category":"Ferramentas","spec":"MD-72303 Conjunto de berbequim","price":2185.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0135","name":"sem fio Makeada 21V Lâmina de motosserra","category":"Ferramentas","spec":"sem fio Makeada 21V Lâmina de motosserra","price":395.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0136","name":"Makeada Escova de carvão para","category":"Ferramentas","spec":"Makeada Escova de carvão para","price":150.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0137","name":"berbequim pequeno Berbequim para serviço","category":"Ferramentas","spec":"berbequim pequeno Berbequim para serviço","price":2670.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0138","name":"pesado 850W MD-13G Serra circular Makeada","category":"Ferramentas","spec":"pesado 850W MD-13G Serra circular Makeada","price":3910.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0139","name":"Fita de Malha TOPPOWER, Cartão Amarelo, Fita de Malha de Fibra de Vidro","category":"Chapas IBR","spec":"Fita de Malha TOPPOWER, Cartão Amarelo, Fita de Malha de Fibra de Vidro","price":55.0,"unit":"un.","code":"A definir","image":"images/produtos/ibr.jpg","page":7
}
, {
  "id":"p0140","name":"50mm x 45m 50mm Fita de elevação de","category":"Ferramentas","spec":"50mm x 45m 50mm Fita de elevação de","price":105.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0141","name":"90 m Fita Asfáltica, Novo Estilo, Impermeável","category":"Ferramentas","spec":"90 m Fita Asfáltica, Novo Estilo, Impermeável","price":65.0,"unit":"un.","code":"A definir","image":null,"page":7
}
, {
  "id":"p0142","name":"Fita Asfáltica Nova PVC 250ML 80 IMPERMEÁVEL 75 mm x","category":"Ferramentas","spec":"Fita Asfáltica Nova PVC 250ML 80 IMPERMEÁVEL 75 mm x","price":100.0,"unit":"un.","code":"A definir","image":null,"page":8
}
, {
  "id":"p0143","name":"2,5 m Fita Asfáltica Nova PVC 500ML 140 IMPERMEÁVEL 100 mm x","category":"Ferramentas","spec":"2,5 m Fita Asfáltica Nova PVC 500ML 140 IMPERMEÁVEL 100 mm x","price":130.0,"unit":"un.","code":"A definir","image":null,"page":8
}
, {
  "id":"p0144","name":"2,5 m Fita Impermeável Colorida RCK-40 400ml 300g 75 Crocodilo FLASHBAND 50","category":"Ferramentas","spec":"2,5 m Fita Impermeável Colorida RCK-40 400ml 300g 75 Crocodilo FLASHBAND 50","price":175.0,"unit":"un.","code":"A definir","image":null,"page":8
}
, {
  "id":"p0145","name":"mm x 10 m Fita Impermeável Colorida RCK-40 200ml 180g 80 Crocodilo FLASHBAND 75","category":"Ferramentas","spec":"mm x 10 m Fita Impermeável Colorida RCK-40 200ml 180g 80 Crocodilo FLASHBAND 75","price":255.0,"unit":"un.","code":"A definir","image":null,"page":8
}
, {
  "id":"p0146","name":"mm x 10 m Fita Impermeável Colorida ELEPHANT KIT ELE828 170 Crocodilo FLASHBAND 100","category":"Ferramentas","spec":"mm x 10 m Fita Impermeável Colorida ELEPHANT KIT ELE828 170 Crocodilo FLASHBAND 100","price":345.0,"unit":"un.","code":"A definir","image":null,"page":8
}
, {
  "id":"p0147","name":"750ML mm x 10 m Fita Dupla Face em ELEPHANT KIT 828250ML 75 Espuma (Cartão Vermelho,","category":"Ferramentas","spec":"750ML mm x 10 m Fita Dupla Face em ELEPHANT KIT 828250ML 75 Espuma (Cartão Vermelho,","price":20.0,"unit":"un.","code":"A definir","image":null,"page":8
}
, {
  "id":"p0148","name":"Estilo HP) 18 mm x 2 m Fita Dupla Face em ELEPHANT KIT 828125ML 50 Espuma (Cartão Vermelho,","category":"Ferramentas","spec":"Estilo HP) 18 mm x 2 m Fita Dupla Face em ELEPHANT KIT 828125ML 50 Espuma (Cartão Vermelho,","price":25.0,"unit":"un.","code":"A definir","image":null,"page":8
}
, {
  "id":"p0149","name":"Estilo HP) 18 mm x 3 m Fita adesiva amarela STEELBOND 70ML Cola transparente para 40","category":"Ferramentas","spec":"Estilo HP) 18 mm x 3 m Fita adesiva amarela STEELBOND 70ML Cola transparente para 40","price":25.0,"unit":"un.","code":"A definir","image":null,"page":8
}
, {
  "id":"p0150","name":"MONNAL 9905 cola AB","category":"Ferramentas","spec":"MONNAL 9905 cola AB","price":85.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0151","name":"MONNAL 9904 cola AB","category":"Ferramentas","spec":"MONNAL 9904 cola AB","price":85.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0152","name":"ROCKIYA 4pcs 100 g de","category":"Ferramentas","spec":"ROCKIYA 4pcs 100 g de","price":100.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0153","name":"adesivo para fundição ARALDITE A Cola AB Red","category":"Ferramentas","spec":"adesivo para fundição ARALDITE A Cola AB Red","price":50.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0154","name":"Card PUR 250g","category":"Ferramentas","spec":"Card PUR 250g","price":395.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0155","name":"rockiya 85 gramas de","category":"Ferramentas","spec":"rockiya 85 gramas de","price":50.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0156","name":"qualidade cinzento rockiya preto","category":"Ferramentas","spec":"qualidade cinzento rockiya preto","price":50.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0157","name":"rockiya vermelho","category":"Ferramentas","spec":"rockiya vermelho","price":50.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0158","name":"rockiya Azul 85G","category":"Ferramentas","spec":"rockiya Azul 85G","price":50.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0159","name":"PAY HONG 100ML","category":"Ferramentas","spec":"PAY HONG 100ML","price":140.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0160","name":"Purificador Núcleo de PP de corte","category":"Ferramentas","spec":"Purificador Núcleo de PP de corte","price":50.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0161","name":"Fita reflectora comum em","category":"Ferramentas","spec":"Fita reflectora comum em","price":130.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0162","name":"PVC, vermelha, 5 cm x 5 m Fita reflectora comum em","category":"Ferramentas","spec":"PVC, vermelha, 5 cm x 5 m Fita reflectora comum em","price":130.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0163","name":"PVC, branca, 5 cm x 5 m Fita reflectora comum em","category":"Ferramentas","spec":"PVC, branca, 5 cm x 5 m Fita reflectora comum em","price":130.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0164","name":"PVC, amarela, 5 cm x 5 m Fita adesiva branca para embalagem individual","category":"Ferramentas","spec":"PVC, amarela, 5 cm x 5 m Fita adesiva branca para embalagem individual","price":25.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0165","name":"blister, 18 mm x 20 m Fita adesiva branca para embalagem individual","category":"Ferramentas","spec":"blister, 18 mm x 20 m Fita adesiva branca para embalagem individual","price":30.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0166","name":"blister, 24 mm x 20 m Fita adesiva branca para embalagem individual de","category":"Ferramentas","spec":"blister, 24 mm x 20 m Fita adesiva branca para embalagem individual de","price":45.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0167","name":"blister 48 mm x 20 m Fita branca 36 mm x 20 m","category":"Ferramentas","spec":"blister 48 mm x 20 m Fita branca 36 mm x 20 m","price":55.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0168","name":"Selante de Silicone","category":"Ferramentas","spec":"Selante de Silicone","price":115.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0169","name":"Transparente 300 ml Selante de Silicone Preto","category":"Ferramentas","spec":"Transparente 300 ml Selante de Silicone Preto","price":115.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0170","name":"300 ml Selante de Silicone Branco","category":"Ferramentas","spec":"300 ml Selante de Silicone Branco","price":115.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0171","name":"Espuma de PU Selante","category":"Ferramentas","spec":"Espuma de PU Selante","price":165.0,"unit":"un.","code":"A definir","image":null,"page":9
}
, {
  "id":"p0172","name":"Elemento filtrante PP para","category":"Ferramentas","spec":"Elemento filtrante PP para","price":45.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0173","name":"purificador de água Núcleo do purificador de","category":"Ferramentas","spec":"purificador de água Núcleo do purificador de","price":75.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0174","name":"água de 150g Cartucho de filtro CTO","category":"Ferramentas","spec":"água de 150g Cartucho de filtro CTO","price":80.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0175","name":"Fita adesiva, amarelo","category":"Ferramentas","spec":"Fita adesiva, amarelo","price":55.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0176","name":"claro, 4,8 x 25 m Fita adesiva, amarelo","category":"Ferramentas","spec":"claro, 4,8 x 25 m Fita adesiva, amarelo","price":27.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0177","name":"claro, 2.4 x 25 m Folha adesiva de 10 cm (4","category":"Ferramentas","spec":"claro, 2.4 x 25 m Folha adesiva de 10 cm (4","price":5.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0178","name":"polegadas) - 60 unidades Folha adesiva de 10 cm (4","category":"Ferramentas","spec":"polegadas) - 60 unidades Folha adesiva de 10 cm (4","price":5.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0179","name":"polegadas) 80 unidades Folha adesiva de 4","category":"Ferramentas","spec":"polegadas) 80 unidades Folha adesiva de 4","price":5.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0180","name":"Disco Disco de corte de","category":"Ferramentas","spec":"Disco Disco de corte de","price":170.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0181","name":"mármore de 7 pol. Conjunto de 4 escovas de","category":"Ferramentas","spec":"mármore de 7 pol. Conjunto de 4 escovas de","price":115.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0182","name":"Purificador de água 3 em 1","category":"Ferramentas","spec":"Purificador de água 3 em 1","price":1950.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0183","name":"Purificador de água duplo","category":"Ferramentas","spec":"Purificador de água duplo","price":1280.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0184","name":"Purificador de água","category":"Ferramentas","spec":"Purificador de água","price":520.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0185","name":"Tubo de exaustão de","category":"Tubos","spec":"Tubo de exaustão de","price":150.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":10
}
, {
  "id":"p0186","name":"Broca ajustável para","category":"Ferramentas","spec":"Broca ajustável para","price":200.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0187","name":"madeira 13*400 mm Broca para ferro de 6 mm","category":"Ferramentas","spec":"madeira 13*400 mm Broca para ferro de 6 mm","price":15.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0188","name":"Broca para ferro de 12 mm","category":"Ferramentas","spec":"Broca para ferro de 12 mm","price":70.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0189","name":"Broca para ferro de 10 mm","category":"Ferramentas","spec":"Broca para ferro de 10 mm","price":50.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0190","name":"Broca para ferro de 8 mm","category":"Ferramentas","spec":"Broca para ferro de 8 mm","price":35.0,"unit":"un.","code":"A definir","image":null,"page":10
}
, {
  "id":"p0191","name":"Fatia vermelha de 4,5 polegadas 0,0291 kg por","category":"Ferramentas","spec":"Fatia vermelha de 4,5 polegadas 0,0291 kg por","price":20.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0192","name":"fatia Fatia de mármore de 23 cm, 230 metros cortados,","category":"Ferramentas","spec":"fatia Fatia de mármore de 23 cm, 230 metros cortados,","price":300.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0193","name":"0,557 kg por fatia Mó de moinho amarelo de","category":"Ferramentas","spec":"0,557 kg por fatia Mó de moinho amarelo de","price":25.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0194","name":"4 polegadas M14 Disco de corte de madeira de 7 polegadas (tipo 180,","category":"Ferramentas","spec":"4 polegadas M14 Disco de corte de madeira de 7 polegadas (tipo 180,","price":150.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0195","name":"40 dentes) Disco de polimento de","category":"Ferramentas","spec":"40 dentes) Disco de polimento de","price":90.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0196","name":"Malha quadrada de 1/2’","category":"Ferramentas","spec":"Malha quadrada de 1/2’","price":1500.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0197","name":"1.2m x 25 m Malha quadrada de 1/2’","category":"Ferramentas","spec":"1.2m x 25 m Malha quadrada de 1/2’","price":1250.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0198","name":"1m x 25 m Tela de sombreamento","category":"Ferramentas","spec":"1m x 25 m Tela de sombreamento","price":3270.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0199","name":"Tela de sombreado verde","category":"Ferramentas","spec":"Tela de sombreado verde","price":3270.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0200","name":"Tela hexagonal 11 x 30I","category":"Ferramentas","spec":"Tela hexagonal 11 x 30I","price":1085.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0201","name":"(1/2\") Arame Iesh 1,8I (1/2\")","category":"Arames","spec":"(1/2\") Arame Iesh 1,8I (1/2\")","price":1430.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0202","name":"Broca fixa para madeira","category":"Ferramentas","spec":"Broca fixa para madeira","price":195.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0203","name":"13*400 mm 8 brocas para madeira","category":"Ferramentas","spec":"13*400 mm 8 brocas para madeira","price":100.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0204","name":"Conjunto de 6 brocas para","category":"Ferramentas","spec":"Conjunto de 6 brocas para","price":115.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0205","name":"Lâmina para pedra de 115","category":"Ferramentas","spec":"Lâmina para pedra de 115","price":35.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0206","name":"mm Disco de corte de pedra de","category":"Ferramentas","spec":"mm Disco de corte de pedra de","price":90.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0207","name":"4,5 pol. Disco de desenho B 115*6","category":"Ferramentas","spec":"4,5 pol. Disco de desenho B 115*6","price":30.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0208","name":"Disco de desenho B 230*6","category":"Ferramentas","spec":"Disco de desenho B 230*6","price":105.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0209","name":"Tela hexagonal 1,2 x 30I","category":"Ferramentas","spec":"Tela hexagonal 1,2 x 30I","price":1265.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0210","name":"(1/2\") Tela hexagonal 1,5 x 30I","category":"Ferramentas","spec":"(1/2\") Tela hexagonal 1,5 x 30I","price":1590.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0211","name":"(1/2\") Tela hexagonal 1,8 x 30I","category":"Ferramentas","spec":"(1/2\") Tela hexagonal 1,8 x 30I","price":1865.0,"unit":"un.","code":"A definir","image":null,"page":11
}
, {
  "id":"p0212","name":"Barbo Craw Barbo Craw 18","category":"Ferramentas","spec":"Barbo Craw Barbo Craw 18","price":155.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0213","name":"Foice Foice com cabo de","category":"Ferramentas","spec":"Foice Foice com cabo de","price":50.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0214","name":"madeira, 14\" Foice com cabo de","category":"Ferramentas","spec":"madeira, 14\" Foice com cabo de","price":55.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0215","name":"Picareta Picareta P402 3kg","category":"Ferramentas","spec":"Picareta Picareta P402 3kg","price":295.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0216","name":"Picareta P402 2kg","category":"Ferramentas","spec":"Picareta P402 2kg","price":200.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0217","name":"Pá Pá pontiaguda","category":"Ferramentas","spec":"Pá Pá pontiaguda","price":240.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0218","name":"Faca de lenha Faca de cana-de-açúcar com cabo de madeira","category":"Ferramentas","spec":"Faca de lenha Faca de cana-de-açúcar com cabo de madeira","price":90.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0219","name":"Arame Iesh 1,1 (1/2\")","category":"Arames","spec":"Arame Iesh 1,1 (1/2\")","price":795.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0220","name":"Arame Iesh 1,21 (1/2\")","category":"Arames","spec":"Arame Iesh 1,21 (1/2\")","price":970.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0221","name":"Martelo Martelo de concha FIB","category":"Ferramentas","spec":"Martelo Martelo de concha FIB","price":85.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0222","name":"250g Martelo de concha FIB","category":"Ferramentas","spec":"250g Martelo de concha FIB","price":125.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0223","name":"500g Martelo de concha FIB","category":"Ferramentas","spec":"500g Martelo de concha FIB","price":160.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0224","name":"750g Martelo com cabo de aço","category":"Ferramentas","spec":"750g Martelo com cabo de aço","price":85.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0225","name":"250g Martelo com cabo de aço","category":"Ferramentas","spec":"250g Martelo com cabo de aço","price":100.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0226","name":"500g Martelo com cabo de aço","category":"Ferramentas","spec":"500g Martelo com cabo de aço","price":100.0,"unit":"un.","code":"A definir","image":null,"page":12
}
, {
  "id":"p0227","name":"Marreta Marreta 10 Libras","category":"Chapas IBR","spec":"Marreta Marreta 10 Libras","price":750.0,"unit":"un.","code":"A definir","image":"images/produtos/ibr.jpg","page":12
}
, {
  "id":"p0228","name":"Marreta 14 Libras","category":"Chapas IBR","spec":"Marreta 14 Libras","price":950.0,"unit":"un.","code":"A definir","image":"images/produtos/ibr.jpg","page":12
}
, {
  "id":"p0229","name":"Faca de cana-de-açúcar com cabo de plástico","category":"Ferramentas","spec":"Faca de cana-de-açúcar com cabo de plástico","price":85.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0230","name":"M212P Facão M204 com cabo em","category":"Ferramentas","spec":"M212P Facão M204 com cabo em","price":95.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0231","name":"madeira Facão M204P com cabo","category":"Ferramentas","spec":"madeira Facão M204P com cabo","price":90.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0232","name":"plástico Cadanha com cabo de","category":"Ferramentas","spec":"plástico Cadanha com cabo de","price":95.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0233","name":"madeira M214 Cadanha com cabo de","category":"Ferramentas","spec":"madeira M214 Cadanha com cabo de","price":90.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0234","name":"Ancinho Ancinho de cabo longo","category":"Ferramentas","spec":"Ancinho Ancinho de cabo longo","price":175.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0235","name":"Machado Machado 1250g","category":"Ferramentas","spec":"Machado Machado 1250g","price":730.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0236","name":"Machatdo 800g","category":"Ferramentas","spec":"Machatdo 800g","price":350.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0237","name":"janelas Janela deslizante","category":"Ferramentas","spec":"janelas Janela deslizante","price":60.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0238","name":"Martelo de 6 libras","category":"Chapas IBR","spec":"Martelo de 6 libras","price":530.0,"unit":"un.","code":"A definir","image":"images/produtos/ibr.jpg","page":13
}
, {
  "id":"p0239","name":"Martelo de 8 libras","category":"Chapas IBR","spec":"Martelo de 8 libras","price":600.0,"unit":"un.","code":"A definir","image":"images/produtos/ibr.jpg","page":13
}
, {
  "id":"p0240","name":"Cabeça de martelo 10LB","category":"Ferramentas","spec":"Cabeça de martelo 10LB","price":500.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0241","name":"Cabeça de martelo 6LB","category":"Ferramentas","spec":"Cabeça de martelo 6LB","price":300.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0242","name":"Cabeça de martelo 4LB","category":"Ferramentas","spec":"Cabeça de martelo 4LB","price":210.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0243","name":"borracha Martelo de borracha 300g","category":"Ferramentas","spec":"borracha Martelo de borracha 300g","price":100.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0244","name":"Martelo de borracha 500g","category":"Ferramentas","spec":"Martelo de borracha 500g","price":135.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0245","name":"Martelo de borracha 750g","category":"Ferramentas","spec":"Martelo de borracha 750g","price":175.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0246","name":"Pulverizador Pulverizador","category":"Ferramentas","spec":"Pulverizador Pulverizador","price":600.0,"unit":"un.","code":"A definir","image":null,"page":13
}
, {
  "id":"p0247","name":"Mão da janela L","category":"Ferramentas","spec":"Mão da janela L","price":40.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0248","name":"mão da janela R","category":"Ferramentas","spec":"mão da janela R","price":40.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0249","name":"Pino da janela","category":"Ferramentas","spec":"Pino da janela","price":40.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0250","name":"cortina Varão para cortina 1000","category":"Ferros","spec":"cortina Varão para cortina 1000","price":360.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":14
}
, {
  "id":"p0251","name":"Varão para cortina 1001","category":"Ferros","spec":"Varão para cortina 1001","price":360.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":14
}
, {
  "id":"p0252","name":"Varão para cortina 1002","category":"Ferros","spec":"Varão para cortina 1002","price":360.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":14
}
, {
  "id":"p0253","name":"Varão para cortina 1003","category":"Ferros","spec":"Varão para cortina 1003","price":360.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":14
}
, {
  "id":"p0254","name":"Varão para cortina 1004","category":"Ferros","spec":"Varão para cortina 1004","price":335.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":14
}
, {
  "id":"p0255","name":"Varão para cortina 1005","category":"Ferros","spec":"Varão para cortina 1005","price":635.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":14
}
, {
  "id":"p0256","name":"Varão para cortina 1006","category":"Ferros","spec":"Varão para cortina 1006","price":635.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":14
}
, {
  "id":"p0257","name":"Varão para cortina 1007","category":"Ferros","spec":"Varão para cortina 1007","price":635.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":14
}
, {
  "id":"p0258","name":"Tecido para cortina 1030","category":"Ferramentas","spec":"Tecido para cortina 1030","price":430.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0259","name":"Tecido para cortina 1031","category":"Ferramentas","spec":"Tecido para cortina 1031","price":530.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0260","name":"Tecido para cortina 1032","category":"Ferramentas","spec":"Tecido para cortina 1032","price":660.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0261","name":"Tecido para cortina 1033","category":"Ferramentas","spec":"Tecido para cortina 1033","price":750.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0262","name":"Tecido para cortina 1034","category":"Ferramentas","spec":"Tecido para cortina 1034","price":805.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0263","name":"Tecido para cortina 1035","category":"Ferramentas","spec":"Tecido para cortina 1035","price":855.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0264","name":"Tecido para cortina 1036","category":"Ferramentas","spec":"Tecido para cortina 1036","price":955.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0265","name":"Tecido para cortina 1037","category":"Ferramentas","spec":"Tecido para cortina 1037","price":1060.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0266","name":"Tecido para cortina 1038","category":"Ferramentas","spec":"Tecido para cortina 1038","price":430.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0267","name":"Tecido para cortina 1039","category":"Ferramentas","spec":"Tecido para cortina 1039","price":530.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0268","name":"Tecido para cortina 1040","category":"Ferramentas","spec":"Tecido para cortina 1040","price":660.0,"unit":"un.","code":"A definir","image":null,"page":14
}
, {
  "id":"p0269","name":"Varão para cortina 1008 Tecido para cortina 1041","category":"Ferros","spec":"Varão para cortina 1008 Tecido para cortina 1041","price":635.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":15
}
, {
  "id":"p0270","name":"Varão para cortina 1009 Tecido para cortina 1042","category":"Ferros","spec":"Varão para cortina 1009 Tecido para cortina 1042","price":565.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":15
}
, {
  "id":"p0271","name":"Varão para cortina 1010 Tecido para cortina 1043","category":"Ferros","spec":"Varão para cortina 1010 Tecido para cortina 1043","price":460.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":15
}
, {
  "id":"p0272","name":"Varão para cortina 1011 Tecido para cortina 1044","category":"Ferros","spec":"Varão para cortina 1011 Tecido para cortina 1044","price":460.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":15
}
, {
  "id":"p0273","name":"Varão para cortina 1012 Tecido para cortina 1045","category":"Ferros","spec":"Varão para cortina 1012 Tecido para cortina 1045","price":460.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":15
}
, {
  "id":"p0274","name":"Varão para cortina 1013 Tecido para cortina 1046","category":"Ferros","spec":"Varão para cortina 1013 Tecido para cortina 1046","price":460.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":15
}
, {
  "id":"p0275","name":"Varão para cortina 1014 Tecido para cortina 1047","category":"Ferros","spec":"Varão para cortina 1014 Tecido para cortina 1047","price":430.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":15
}
, {
  "id":"p0276","name":"Varão para cortina 1015 Tecido para cortina 1048","category":"Ferros","spec":"Varão para cortina 1015 Tecido para cortina 1048","price":850.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":15
}
, {
  "id":"p0277","name":"Varão para cortina 1016 Tecido para cortina 1049","category":"Ferros","spec":"Varão para cortina 1016 Tecido para cortina 1049","price":850.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":15
}
, {
  "id":"p0278","name":"Varão para cortina 1017 Tecido para cortina 1050","category":"Ferros","spec":"Varão para cortina 1017 Tecido para cortina 1050","price":850.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":15
}
, {
  "id":"p0279","name":"Varão para cortina 1018 Tecido para cortina 1051","category":"Ferros","spec":"Varão para cortina 1018 Tecido para cortina 1051","price":850.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":15
}
, {
  "id":"p0280","name":"Varão para cortina 1019 Tecido para cortina 1052","category":"Ferros","spec":"Varão para cortina 1019 Tecido para cortina 1052","price":795.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":15
}
, {
  "id":"p0281","name":"Varão para cortina 1020","category":"Ferros","spec":"Varão para cortina 1020","price":635.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":16
}
, {
  "id":"p0282","name":"Varão para cortina 1021","category":"Ferros","spec":"Varão para cortina 1021","price":635.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":16
}
, {
  "id":"p0283","name":"Varão para cortina 1022","category":"Ferros","spec":"Varão para cortina 1022","price":635.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":16
}
, {
  "id":"p0284","name":"Varão para cortina 1023","category":"Ferros","spec":"Varão para cortina 1023","price":635.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":16
}
, {
  "id":"p0285","name":"Varão para cortina 1024","category":"Ferros","spec":"Varão para cortina 1024","price":575.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":16
}
, {
  "id":"p0286","name":"Varão para cortina 1025","category":"Ferros","spec":"Varão para cortina 1025","price":1105.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":16
}
, {
  "id":"p0287","name":"Varão para cortina 1026","category":"Ferros","spec":"Varão para cortina 1026","price":1105.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":16
}
, {
  "id":"p0288","name":"Varão para cortina 1027","category":"Ferros","spec":"Varão para cortina 1027","price":1105.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":16
}
, {
  "id":"p0289","name":"Varão para cortina 1028","category":"Ferros","spec":"Varão para cortina 1028","price":1105.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":16
}
, {
  "id":"p0290","name":"Varão para cortina 1029","category":"Ferros","spec":"Varão para cortina 1029","price":995.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":16
}
, {
  "id":"p0291","name":"cortina Tecido para cortina 1097","category":"Ferramentas","spec":"cortina Tecido para cortina 1097","price":1375.0,"unit":"un.","code":"A definir","image":null,"page":16
}
, {
  "id":"p0292","name":"Tecido para cortina 1098","category":"Ferramentas","spec":"Tecido para cortina 1098","price":1475.0,"unit":"un.","code":"A definir","image":null,"page":17
}
, {
  "id":"p0293","name":"Tecido para cortina 1099","category":"Ferramentas","spec":"Tecido para cortina 1099","price":1565.0,"unit":"un.","code":"A definir","image":null,"page":17
}
, {
  "id":"p0294","name":"Tecido para cortina 1100","category":"Ferramentas","spec":"Tecido para cortina 1100","price":1760.0,"unit":"un.","code":"A definir","image":null,"page":17
}
, {
  "id":"p0295","name":"Tecido para cortina 1101","category":"Ferramentas","spec":"Tecido para cortina 1101","price":1955.0,"unit":"un.","code":"A definir","image":null,"page":17
}
, {
  "id":"p0296","name":"Persianas venezianas","category":"Ferramentas","spec":"Persianas venezianas","price":785.0,"unit":"un.","code":"A definir","image":null,"page":17
}
, {
  "id":"p0297","name":"80*180 102 Tecido para cortina 1103","category":"Ferramentas","spec":"80*180 102 Tecido para cortina 1103","price":980.0,"unit":"un.","code":"A definir","image":null,"page":17
}
, {
  "id":"p0298","name":"Tecido para cortina 1104","category":"Ferramentas","spec":"Tecido para cortina 1104","price":1175.0,"unit":"un.","code":"A definir","image":null,"page":17
}
, {
  "id":"p0299","name":"Tecido para cortina 1105","category":"Ferramentas","spec":"Tecido para cortina 1105","price":1375.0,"unit":"un.","code":"A definir","image":null,"page":17
}
, {
  "id":"p0300","name":"Tecido para cortina 1106 Tesoura","category":"Ferramentas","spec":"Tecido para cortina 1106 Tesoura","price":1475.0,"unit":"un.","code":"A definir","image":null,"page":17
}
, {
  "id":"p0301","name":"Tecido para cortina 1107","category":"Ferramentas","spec":"Tecido para cortina 1107","price":1565.0,"unit":"un.","code":"A definir","image":null,"page":17
}
, {
  "id":"p0302","name":"Tecido para cortina 1108","category":"Ferramentas","spec":"Tecido para cortina 1108","price":1760.0,"unit":"un.","code":"A definir","image":null,"page":17
}
, {
  "id":"p0303","name":"Tecido para cortina 1109","category":"Ferramentas","spec":"Tecido para cortina 1109","price":1955.0,"unit":"un.","code":"A definir","image":null,"page":17
}
, {
  "id":"p0304","name":"proteção do trabalho Respirador de lata única","category":"Segurança e sinalização","spec":"proteção do trabalho Respirador de lata única","price":110.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0305","name":"MÁSCARA","category":"Segurança e sinalização","spec":"MÁSCARA","price":115.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0306","name":"MÁSCARA","category":"Segurança e sinalização","spec":"MÁSCARA","price":75.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0307","name":"Luvas","category":"Segurança e sinalização","spec":"Luvas","price":15.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0308","name":"Luvas 40cm","category":"Segurança e sinalização","spec":"Luvas 40cm","price":80.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0309","name":"Luvas 35cm","category":"Segurança e sinalização","spec":"Luvas 35cm","price":70.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0310","name":"Luvas 45g","category":"Segurança e sinalização","spec":"Luvas 45g","price":25.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0311","name":"Luvas 32g","category":"Segurança e sinalização","spec":"Luvas 32g","price":25.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0312","name":"Luvas 32g","category":"Segurança e sinalização","spec":"Luvas 32g","price":20.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0313","name":"Luvas em PVC com rosca","category":"Segurança e sinalização","spec":"Luvas em PVC com rosca","price":48.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0314","name":"Protetores auriculares","category":"Segurança e sinalização","spec":"Protetores auriculares","price":76.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0315","name":"tesoura de poda FL-005","category":"Segurança e sinalização","spec":"tesoura de poda FL-005","price":175.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0316","name":"Máscara Máscara azul","category":"Segurança e sinalização","spec":"Máscara Máscara azul","price":1.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0317","name":"Máscara branca em forma","category":"Segurança e sinalização","spec":"Máscara branca em forma","price":23.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0318","name":"taça - K Máscara-K branco em","category":"Segurança e sinalização","spec":"taça - K Máscara-K branco em","price":20.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0319","name":"Botas Sapatos de segurança","category":"Segurança e sinalização","spec":"Botas Sapatos de segurança","price":510.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0320","name":"tamanho mix Botas de chuva CH Tamanhos variados em","category":"Segurança e sinalização","spec":"tamanho mix Botas de chuva CH Tamanhos variados em","price":275.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0321","name":"Capacete Capacete de segurança","category":"Segurança e sinalização","spec":"Capacete Capacete de segurança","price":97.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0322","name":"Capacete de segurança","category":"Segurança e sinalização","spec":"Capacete de segurança","price":100.0,"unit":"un.","code":"A definir","image":null,"page":18
}
, {
  "id":"p0323","name":"Capa de chuva Capa de chuva longa","category":"Segurança e sinalização","spec":"Capa de chuva Capa de chuva longa","price":215.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0324","name":"Capa de chuva","category":"Segurança e sinalização","spec":"Capa de chuva","price":370.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0325","name":"Capa de chuva","category":"Segurança e sinalização","spec":"Capa de chuva","price":255.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0326","name":"Capa de chuva","category":"Segurança e sinalização","spec":"Capa de chuva","price":875.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0327","name":"Sinalização Bastão","category":"Segurança e sinalização","spec":"Sinalização Bastão","price":165.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0328","name":"Sinalização plástica em","category":"Segurança e sinalização","spec":"Sinalização plástica em","price":230.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0329","name":"forma de H Cone de estrada em PVC","category":"Segurança e sinalização","spec":"forma de H Cone de estrada em PVC","price":405.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0330","name":"60 cm Cone de telhado com membrana vermelha e","category":"Segurança e sinalização","spec":"60 cm Cone de telhado com membrana vermelha e","price":405.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0331","name":"Arame farpado Arame farpado com ponta","category":"Arames","spec":"Arame farpado Arame farpado com ponta","price":550.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0332","name":"Cintos amarelos","category":"Segurança e sinalização","spec":"Cintos amarelos","price":70.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0333","name":"Cintos laranja","category":"Segurança e sinalização","spec":"Cintos laranja","price":70.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0334","name":"Cintos amarelo/laranja","category":"Segurança e sinalização","spec":"Cintos amarelo/laranja","price":70.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0335","name":"120g 2 linhas amarelo","category":"Segurança e sinalização","spec":"120g 2 linhas amarelo","price":75.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0336","name":"CASACO COM VÁRIOS BOLSOS","category":"Segurança e sinalização","spec":"CASACO COM VÁRIOS BOLSOS","price":150.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0337","name":"LARANJA/AMARELA Jaqueta","category":"Segurança e sinalização","spec":"LARANJA/AMARELA Jaqueta","price":145.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0338","name":"Fita refletora","category":"Segurança e sinalização","spec":"Fita refletora","price":60.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0339","name":"Fita refletora","category":"Segurança e sinalização","spec":"Fita refletora","price":115.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0340","name":"Fita refletora","category":"Segurança e sinalização","spec":"Fita refletora","price":170.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0341","name":"Fita refletora","category":"Segurança e sinalização","spec":"Fita refletora","price":280.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0342","name":"Fita refletora","category":"Segurança e sinalização","spec":"Fita refletora","price":80.0,"unit":"un.","code":"A definir","image":null,"page":19
}
, {
  "id":"p0343","name":"Arame farpado 50 kg x","category":"Arames","spec":"Arame farpado 50 kg x","price":5570.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0344","name":"800 m Arame farpado 40 kg x","category":"Arames","spec":"800 m Arame farpado 40 kg x","price":4740.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0345","name":"800 m Arame navalha 101 45 cm","category":"Arames","spec":"800 m Arame navalha 101 45 cm","price":690.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0346","name":"Banheira Base de duche 90*90","category":"Segurança e sinalização","spec":"Banheira Base de duche 90*90","price":2070.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0347","name":"Base de duche 80*80","category":"Segurança e sinalização","spec":"Base de duche 80*80","price":1750.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0348","name":"Base de duche 70*70","category":"Segurança e sinalização","spec":"Base de duche 70*70","price":1560.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0349","name":"Banheira em acrílico","category":"Segurança e sinalização","spec":"Banheira em acrílico","price":4020.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0350","name":"170x70 Banheira em acrílico","category":"Segurança e sinalização","spec":"170x70 Banheira em acrílico","price":3900.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0351","name":"Cortina de duche Cortina de duche 107","category":"Segurança e sinalização","spec":"Cortina de duche Cortina de duche 107","price":150.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0352","name":"Cortina de duche 106","category":"Segurança e sinalização","spec":"Cortina de duche 106","price":75.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0353","name":"Fita refletora","category":"Segurança e sinalização","spec":"Fita refletora","price":160.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0354","name":"Fita refletora","category":"Segurança e sinalização","spec":"Fita refletora","price":230.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0355","name":"Fita refletora","category":"Segurança e sinalização","spec":"Fita refletora","price":395.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0356","name":"Acessórios para depósito","category":"Segurança e sinalização","spec":"Acessórios para depósito","price":250.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0357","name":"água Acessórios ELF 1 1/4\"","category":"Segurança e sinalização","spec":"água Acessórios ELF 1 1/4\"","price":360.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0358","name":"Novo desentupidor de","category":"Segurança e sinalização","spec":"Novo desentupidor de","price":200.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0359","name":"sanitas Desentupidor de sanita","category":"Segurança e sinalização","spec":"sanitas Desentupidor de sanita","price":150.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0360","name":"Acessórios para depósito","category":"Segurança e sinalização","spec":"Acessórios para depósito","price":415.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0361","name":"água 116 Caixa de descarga","category":"Segurança e sinalização","spec":"água 116 Caixa de descarga","price":710.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0362","name":"vermelha de 8 litros Caixa de descarga","category":"Segurança e sinalização","spec":"vermelha de 8 litros Caixa de descarga","price":600.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0363","name":"vermelha de 6 litros Conversor de flutuador de","category":"Segurança e sinalização","spec":"vermelha de 6 litros Conversor de flutuador de","price":260.0,"unit":"un.","code":"A definir","image":null,"page":20
}
, {
  "id":"p0364","name":"Cortina de duche 105","category":"Casa e hidráulica","spec":"Cortina de duche 105","price":300.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0365","name":"Lava rabo Lava rabo 134 caixa azul","category":"Casa e hidráulica","spec":"Lava rabo Lava rabo 134 caixa azul","price":460.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0366","name":"Lava rabo com saco azul,","category":"Casa e hidráulica","spec":"Lava rabo com saco azul,","price":110.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0367","name":"tubo branco Lava rabo de tubo de","category":"Tubos","spec":"tubo branco Lava rabo de tubo de","price":135.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":21
}
, {
  "id":"p0368","name":"onda Lava rabo de bolsa","category":"Casa e hidráulica","spec":"onda Lava rabo de bolsa","price":85.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0369","name":"amarela Lava rabo de bolsa preta","category":"Casa e hidráulica","spec":"amarela Lava rabo de bolsa preta","price":110.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0370","name":"Lava rabo caixa branca","category":"Casa e hidráulica","spec":"Lava rabo caixa branca","price":180.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0371","name":"Lava rabo 015","category":"Casa e hidráulica","spec":"Lava rabo 015","price":2800.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0372","name":"TAP Lava Rabo","category":"Casa e hidráulica","spec":"TAP Lava Rabo","price":390.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0373","name":"Lava rabo azul","category":"Casa e hidráulica","spec":"Lava rabo azul","price":180.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0374","name":"Lava rabo caixa prateada","category":"Casa e hidráulica","spec":"Lava rabo caixa prateada","price":180.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0375","name":"Conversor de flutuador de","category":"Casa e hidráulica","spec":"Conversor de flutuador de","price":210.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0376","name":"Tampo de sanita 2003C","category":"Casa e hidráulica","spec":"Tampo de sanita 2003C","price":660.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0377","name":"Tampo de sanita 2003C","category":"Casa e hidráulica","spec":"Tampo de sanita 2003C","price":210.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0378","name":"Assento de sanita com","category":"Casa e hidráulica","spec":"Assento de sanita com","price":380.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0379","name":"fecho suave KJ878 Assento sanitário com","category":"Casa e hidráulica","spec":"fecho suave KJ878 Assento sanitário com","price":470.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0380","name":"Interruptor de chuveiro","category":"Casa e hidráulica","spec":"Interruptor de chuveiro","price":1100.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0381","name":"triplo Caixa de sabão preta","category":"Casa e hidráulica","spec":"triplo Caixa de sabão preta","price":120.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0382","name":"Porta-lenços","category":"Casa e hidráulica","spec":"Porta-lenços","price":90.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0383","name":"Caixa de sabão","category":"Casa e hidráulica","spec":"Caixa de sabão","price":120.0,"unit":"un.","code":"A definir","image":null,"page":21
}
, {
  "id":"p0384","name":"Tubo de chuveiro de 30 cm","category":"Tubos","spec":"Tubo de chuveiro de 30 cm","price":80.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":21
}
, {
  "id":"p0385","name":"Cabeça de pulverização","category":"Casa e hidráulica","spec":"Cabeça de pulverização","price":65.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0386","name":"submersível Bomba submersível CA 3.0","category":"Casa e hidráulica","spec":"submersível Bomba submersível CA 3.0","price":7980.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0387","name":"cv Bomba submersível CA 2.0","category":"Casa e hidráulica","spec":"cv Bomba submersível CA 2.0","price":6990.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0388","name":"cv Bomba submersível CA 1.5","category":"Casa e hidráulica","spec":"cv Bomba submersível CA 1.5","price":6500.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0389","name":"cv Bomba submersível CA 1.0","category":"Casa e hidráulica","spec":"cv Bomba submersível CA 1.0","price":6080.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0390","name":"cv Bomba submersível CA","category":"Casa e hidráulica","spec":"cv Bomba submersível CA","price":5800.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0391","name":"Bomba de poço AC 1.0HP","category":"Casa e hidráulica","spec":"Bomba de poço AC 1.0HP","price":3980.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0392","name":"750W Bomba de poço AC","category":"Casa e hidráulica","spec":"750W Bomba de poço AC","price":3500.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0393","name":"0,75HP - 550W Bomba de poço CA 0,5 HP 370 W","category":"Casa e hidráulica","spec":"0,75HP - 550W Bomba de poço CA 0,5 HP 370 W","price":2600.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0394","name":"Bomba solar grande 48v","category":"Casa e hidráulica","spec":"Bomba solar grande 48v","price":2300.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0395","name":"20M Bomba de poço solar 24V","category":"Casa e hidráulica","spec":"20M Bomba de poço solar 24V","price":2000.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0396","name":"15M preta Bomba de poço solar 12V","category":"Casa e hidráulica","spec":"15M preta Bomba de poço solar 12V","price":2000.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0397","name":"Interruptor da bomba de","category":"Casa e hidráulica","spec":"Interruptor da bomba de","price":1350.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0398","name":"pressão ECP Controlador da bomba de","category":"Casa e hidráulica","spec":"pressão ECP Controlador da bomba de","price":1400.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0399","name":"água 056 Caixa de controlo da bomba de água de 3 hp de","category":"Casa e hidráulica","spec":"água 056 Caixa de controlo da bomba de água de 3 hp de","price":860.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0400","name":"potência Caixa de controlo da bomba de água de 2 hp de","category":"Casa e hidráulica","spec":"potência Caixa de controlo da bomba de água de 2 hp de","price":690.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0401","name":"potência Caixa de controlo de 1,5","category":"Casa e hidráulica","spec":"potência Caixa de controlo de 1,5","price":680.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0402","name":"HP bomba de água Caixa de controlo de 1,0","category":"Casa e hidráulica","spec":"HP bomba de água Caixa de controlo de 1,0","price":670.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0403","name":"HP bomba de água Caixa de controlo de 0,75","category":"Casa e hidráulica","spec":"HP bomba de água Caixa de controlo de 0,75","price":650.0,"unit":"un.","code":"A definir","image":null,"page":22
}
, {
  "id":"p0404","name":"Bomba de pressão CA monofásica Bomba de pressão CA","category":"Casa e hidráulica","spec":"Bomba de pressão CA monofásica Bomba de pressão CA","price":2500.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0405","name":"elétricos t Tomada de teto 2633#","category":"Casa e hidráulica","spec":"elétricos t Tomada de teto 2633#","price":23.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0406","name":"Ficha multifuncional","category":"Casa e hidráulica","spec":"Ficha multifuncional","price":30.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0407","name":"K106# Ficha multifuncional 537#","category":"Casa e hidráulica","spec":"K106# Ficha multifuncional 537#","price":24.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0408","name":"Tomada de teto 265#","category":"Casa e hidráulica","spec":"Tomada de teto 265#","price":18.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0409","name":"Tomada elétrica de parede","category":"Casa e hidráulica","spec":"Tomada elétrica de parede","price":75.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0410","name":"padrão europeu 2506# Tomada elétrica de parede","category":"Casa e hidráulica","spec":"padrão europeu 2506# Tomada elétrica de parede","price":50.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0411","name":"padrão europeu 2505# Tomada elétrica de parede","category":"Casa e hidráulica","spec":"padrão europeu 2505# Tomada elétrica de parede","price":45.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0412","name":"padrão europeu 8006# Tomada elétrica de parede","category":"Casa e hidráulica","spec":"padrão europeu 8006# Tomada elétrica de parede","price":40.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0413","name":"padrão europeu 8005# Caixa de Junção Elétrica","category":"Casa e hidráulica","spec":"padrão europeu 8005# Caixa de Junção Elétrica","price":16.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0414","name":"Interruptor de pressão de","category":"Casa e hidráulica","spec":"Interruptor de pressão de","price":200.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0415","name":"Caixa de Junção","category":"Casa e hidráulica","spec":"Caixa de Junção","price":7.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0416","name":"Elétrica”2301# Caixa de Junção","category":"Casa e hidráulica","spec":"Elétrica”2301# Caixa de Junção","price":10.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0417","name":"Elétrica”2307# Caixa de derivação C3","category":"Casa e hidráulica","spec":"Elétrica”2307# Caixa de derivação C3","price":40.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0418","name":"Caixa de derivação C2","category":"Casa e hidráulica","spec":"Caixa de derivação C2","price":25.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0419","name":"Caixa de derivação C1","category":"Casa e hidráulica","spec":"Caixa de derivação C1","price":20.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0420","name":"Régua de tomadas Euro Power com interruptor de","category":"Casa e hidráulica","spec":"Régua de tomadas Euro Power com interruptor de","price":90.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0421","name":"5 vias (1,5 m) Régua de tomadas Euro Power com interruptor de","category":"Casa e hidráulica","spec":"5 vias (1,5 m) Régua de tomadas Euro Power com interruptor de","price":85.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0422","name":"4 vias (1,5 m) Régua de tomadas Euro Power com interruptor de","category":"Casa e hidráulica","spec":"4 vias (1,5 m) Régua de tomadas Euro Power com interruptor de","price":80.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0423","name":"3 vias (1,5 m) Régua de tomadas Euro Power com interruptor de","category":"Casa e hidráulica","spec":"3 vias (1,5 m) Régua de tomadas Euro Power com interruptor de","price":225.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0424","name":"5 vias Régua de tomadas Euro Power com interruptor de","category":"Casa e hidráulica","spec":"5 vias Régua de tomadas Euro Power com interruptor de","price":190.0,"unit":"un.","code":"A definir","image":null,"page":23
}
, {
  "id":"p0425","name":"Ficha multifuncional","category":"Construção e manutenção","spec":"Ficha multifuncional","price":20.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0426","name":"1238# Ficha multifuncional nº","category":"Construção e manutenção","spec":"1238# Ficha multifuncional nº","price":30.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0427","name":"Ficha multifuncional 882#","category":"Construção e manutenção","spec":"Ficha multifuncional 882#","price":25.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0428","name":"Ficha de alimentação 320#","category":"Construção e manutenção","spec":"Ficha de alimentação 320#","price":30.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0429","name":"Guarda de TV","category":"Construção e manutenção","spec":"Guarda de TV","price":340.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0430","name":"Protetor de frigorífico 184","category":"Construção e manutenção","spec":"Protetor de frigorífico 184","price":340.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0431","name":"gramas Tomada de três posições","category":"Construção e manutenção","spec":"gramas Tomada de três posições","price":160.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0432","name":"Disjuntor t Comutador automático","category":"Construção e manutenção","spec":"Disjuntor t Comutador automático","price":1250.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0433","name":"3P63A Comutador automático","category":"Construção e manutenção","spec":"3P63A Comutador automático","price":1100.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0434","name":"2P63A MC branco DC Double","category":"Construção e manutenção","spec":"2P63A MC branco DC Double","price":140.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0435","name":"100A Disjuntor miniatura CC","category":"Construção e manutenção","spec":"100A Disjuntor miniatura CC","price":125.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0436","name":"Régua de tomadas Euro Power com interruptor de","category":"Construção e manutenção","spec":"Régua de tomadas Euro Power com interruptor de","price":165.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0437","name":"3 vias Régua de tomadas Euro","category":"Construção e manutenção","spec":"3 vias Régua de tomadas Euro","price":135.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0438","name":"destacável de 5 vias Régua de tomadas Euro","category":"Construção e manutenção","spec":"destacável de 5 vias Régua de tomadas Euro","price":110.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0439","name":"destacável de 4 vias Régua de tomadas Euro","category":"Construção e manutenção","spec":"destacável de 4 vias Régua de tomadas Euro","price":85.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0440","name":"destacável de 3 vias Régua de tomadas Euro","category":"Construção e manutenção","spec":"destacável de 3 vias Régua de tomadas Euro","price":100.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0441","name":"Power de 5 vias Régua de tomadas Euro","category":"Construção e manutenção","spec":"Power de 5 vias Régua de tomadas Euro","price":85.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0442","name":"Power de 4 vias Régua de tomadas Euro","category":"Construção e manutenção","spec":"Power de 4 vias Régua de tomadas Euro","price":70.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0443","name":"Interruptor Interruptor de tejadilho de","category":"Construção e manutenção","spec":"Interruptor Interruptor de tejadilho de","price":23.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0444","name":"2 vias 267# Interruptor de tecto de 1","category":"Construção e manutenção","spec":"2 vias 267# Interruptor de tecto de 1","price":17.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0445","name":"módulo 266# Interruptor de luz de","category":"Construção e manutenção","spec":"módulo 266# Interruptor de luz de","price":65.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0446","name":"parede duplo 2504# Interruptor de luz de","category":"Construção e manutenção","spec":"parede duplo 2504# Interruptor de luz de","price":50.0,"unit":"un.","code":"A definir","image":null,"page":24
}
, {
  "id":"p0447","name":"Disjuntor duplo CC branco","category":"Construção e manutenção","spec":"Disjuntor duplo CC branco","price":125.0,"unit":"un.","code":"A definir","image":null,"page":25
}
, {
  "id":"p0448","name":"32A McB branco duplo 25A DC","category":"Construção e manutenção","spec":"32A McB branco duplo 25A DC","price":140.0,"unit":"un.","code":"A definir","image":null,"page":25
}
, {
  "id":"p0449","name":"Big Shape duplo DC-125A Roda","category":"Construção e manutenção","spec":"Big Shape duplo DC-125A Roda","price":350.0,"unit":"un.","code":"A definir","image":null,"page":25
}
, {
  "id":"p0450","name":"Disjuntor miniatura","category":"Construção e manutenção","spec":"Disjuntor miniatura","price":75.0,"unit":"un.","code":"A definir","image":null,"page":25
}
, {
  "id":"p0451","name":"branco DC 1p-10A DC 1p-63A branco McB","category":"Construção e manutenção","spec":"branco DC 1p-10A DC 1p-63A branco McB","price":70.0,"unit":"un.","code":"A definir","image":null,"page":25
}
, {
  "id":"p0452","name":"Disjuntor miniatura","category":"Construção e manutenção","spec":"Disjuntor miniatura","price":70.0,"unit":"un.","code":"A definir","image":null,"page":25
}
, {
  "id":"p0453","name":"branco DC 1p-32A Disjuntor miniatura","category":"Construção e manutenção","spec":"branco DC 1p-32A Disjuntor miniatura","price":70.0,"unit":"un.","code":"A definir","image":null,"page":25
}
, {
  "id":"p0454","name":"branco DC 1p-20A DC 1P-125A branco McB","category":"Construção e manutenção","spec":"branco DC 1p-20A DC 1P-125A branco McB","price":165.0,"unit":"un.","code":"A definir","image":null,"page":25
}
, {
  "id":"p0455","name":"DC 1P-100A branco McB","category":"Construção e manutenção","spec":"DC 1P-100A branco McB","price":70.0,"unit":"un.","code":"A definir","image":null,"page":25
}
, {
  "id":"p0456","name":"Disjuntor branco MCB AC","category":"Construção e manutenção","spec":"Disjuntor branco MCB AC","price":135.0,"unit":"un.","code":"A definir","image":null,"page":25
}
, {
  "id":"p0457","name":"duplo-P-63A MCB branco AC Ip-16A","category":"Construção e manutenção","spec":"duplo-P-63A MCB branco AC Ip-16A","price":70.0,"unit":"un.","code":"A definir","image":null,"page":25
}
, {
  "id":"p0458","name":"MCB branco AC 1p-10A","category":"Construção e manutenção","spec":"MCB branco AC 1p-10A","price":70.0,"unit":"un.","code":"A definir","image":null,"page":25
}
, {
  "id":"p0459","name":"MCB branco AC 1p-63A","category":"Construção e manutenção","spec":"MCB branco AC 1p-63A","price":70.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0460","name":"MCB branco AC 1p-32A","category":"Construção e manutenção","spec":"MCB branco AC 1p-32A","price":70.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0461","name":"Disjuntor branco MCB AC","category":"Construção e manutenção","spec":"Disjuntor branco MCB AC","price":70.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0462","name":"IP-20A MCB branco AC 1p-6A","category":"Construção e manutenção","spec":"IP-20A MCB branco AC 1p-6A","price":70.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0463","name":"Polia t Polia de 40 mm","category":"Construção e manutenção","spec":"Polia t Polia de 40 mm","price":400.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0464","name":"Polia de 60 mm","category":"Construção e manutenção","spec":"Polia de 60 mm","price":510.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0465","name":"Polia de 80 mm","category":"Construção e manutenção","spec":"Polia de 80 mm","price":820.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0466","name":"Lâmpada t Lâmpada Diamond de 30","category":"Construção e manutenção","spec":"Lâmpada t Lâmpada Diamond de 30","price":80.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0467","name":"W com casquilho E27 Lâmpada Diamond de 20","category":"Construção e manutenção","spec":"W com casquilho E27 Lâmpada Diamond de 20","price":55.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0468","name":"W com casquilho E27 Lâmpada Diamond de 15","category":"Construção e manutenção","spec":"W com casquilho E27 Lâmpada Diamond de 15","price":40.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0469","name":"RODA FIXA BRANCA DE 4","category":"Construção e manutenção","spec":"RODA FIXA BRANCA DE 4","price":120.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0470","name":"POLEGADAS RODA GIRATÓRIA BRANCA","category":"Construção e manutenção","spec":"POLEGADAS RODA GIRATÓRIA BRANCA","price":110.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0471","name":"3 POLEGADAS RODA FIXA BRANCA DE 3","category":"Construção e manutenção","spec":"3 POLEGADAS RODA FIXA BRANCA DE 3","price":90.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0472","name":"POLEGADAS Roda de carrinho de 5","category":"Construção e manutenção","spec":"POLEGADAS Roda de carrinho de 5","price":200.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0473","name":"polegadas em TPR Roda de carrinho de 4","category":"Construção e manutenção","spec":"polegadas em TPR Roda de carrinho de 4","price":175.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0474","name":"polegadas em TPR Eixo de roda sólido de 12\"","category":"Construção e manutenção","spec":"polegadas em TPR Eixo de roda sólido de 12\"","price":400.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0475","name":"RODA SÓLIDA DE 12","category":"Construção e manutenção","spec":"RODA SÓLIDA DE 12","price":400.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0476","name":"Conector de fita de lâmpada de 8","category":"Construção e manutenção","spec":"Conector de fita de lâmpada de 8","price":65.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0477","name":"mm(amarelo) Conector de fita de","category":"Construção e manutenção","spec":"mm(amarelo) Conector de fita de","price":65.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0478","name":"lâmpada de 6 mm (Azul) Ligações duplas de 2 pés","category":"Construção e manutenção","spec":"lâmpada de 6 mm (Azul) Ligações duplas de 2 pés","price":55.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0479","name":"Luminárias LED de 60 cm","category":"Construção e manutenção","spec":"Luminárias LED de 60 cm","price":45.0,"unit":"un.","code":"A definir","image":null,"page":26
}
, {
  "id":"p0480","name":"Lâmpada Diamond de 10","category":"Construção e manutenção","spec":"Lâmpada Diamond de 10","price":35.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0481","name":"W com casquilho E27 Lâmpada LED classe A","category":"Construção e manutenção","spec":"W com casquilho E27 Lâmpada LED classe A","price":32.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0482","name":"12W E27 Lâmpada LED classe A 7W","category":"Construção e manutenção","spec":"12W E27 Lâmpada LED classe A 7W","price":28.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0483","name":"E27 Lâmpada LED classe A 9W","category":"Construção e manutenção","spec":"E27 Lâmpada LED classe A 9W","price":27.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0484","name":"E27 Nova luz de cinto LED","category":"Construção e manutenção","spec":"E27 Nova luz de cinto LED","price":45.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0485","name":"(amarela) Fita LED azul de 100 m x 6","category":"Construção e manutenção","spec":"(amarela) Fita LED azul de 100 m x 6","price":50.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0486","name":"mm Tubo LED 4F 1.2m","category":"Tubos","spec":"mm Tubo LED 4F 1.2m","price":65.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":27
}
, {
  "id":"p0487","name":"Tubo LED 2F 0,6m","category":"Tubos","spec":"Tubo LED 2F 0,6m","price":55.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":27
}
, {
  "id":"p0488","name":"Luz de advertência da","category":"Construção e manutenção","spec":"Luz de advertência da","price":395.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0489","name":"coluna Mini luz de advertência","category":"Construção e manutenção","spec":"coluna Mini luz de advertência","price":115.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0490","name":"Plainadora de madeira grande de 345 libras (cor","category":"Chapas IBR","spec":"Plainadora de madeira grande de 345 libras (cor","price":600.0,"unit":"un.","code":"A definir","image":"images/produtos/ibr.jpg","page":27
}
, {
  "id":"p0491","name":"Ligações duplas de 5 pés","category":"Construção e manutenção","spec":"Ligações duplas de 5 pés","price":100.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0492","name":"Ligações duplas de 4 pés","category":"Construção e manutenção","spec":"Ligações duplas de 4 pés","price":70.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0493","name":"Casquilho de lâmpada em","category":"Construção e manutenção","spec":"Casquilho de lâmpada em","price":18.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0494","name":"cerâmica E27 614# Ficha do suporte da","category":"Construção e manutenção","spec":"cerâmica E27 614# Ficha do suporte da","price":20.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0495","name":"lâmpada 086# Cabo GU10 para luminária","category":"Construção e manutenção","spec":"lâmpada 086# Cabo GU10 para luminária","price":7.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0496","name":"embutida Luz frontal","category":"Construção e manutenção","spec":"embutida Luz frontal","price":265.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0497","name":"Luz frontal","category":"Construção e manutenção","spec":"Luz frontal","price":350.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0498","name":"Luz","category":"Construção e manutenção","spec":"Luz","price":450.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0499","name":"Lâmpada de raio","category":"Construção e manutenção","spec":"Lâmpada de raio","price":130.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0500","name":"Ponteira de cinzel para","category":"Construção e manutenção","spec":"Ponteira de cinzel para","price":80.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0501","name":"betão de 10 polegadas Ponteira de cinzel para","category":"Construção e manutenção","spec":"betão de 10 polegadas Ponteira de cinzel para","price":90.0,"unit":"un.","code":"A definir","image":null,"page":27
}
, {
  "id":"p0502","name":"245# small wood planer","category":"Construção e manutenção","spec":"245# small wood planer","price":550.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0503","name":"(wooden color) Plainadora pequena","category":"Construção e manutenção","spec":"(wooden color) Plainadora pequena","price":600.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0504","name":"vermelha de 250 mm Plainadora vermelha","category":"Construção e manutenção","spec":"vermelha de 250 mm Plainadora vermelha","price":620.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0505","name":"grande de 320 mm Conjunto de 3 limas para madeira com bolsa para","category":"Construção e manutenção","spec":"grande de 320 mm Conjunto de 3 limas para madeira com bolsa para","price":210.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0506","name":"pendurar Conjunto de cinzel 4","category":"Construção e manutenção","spec":"pendurar Conjunto de cinzel 4","price":300.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0507","name":"Pistola de massa","category":"Construção e manutenção","spec":"Pistola de massa","price":420.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0508","name":"lubrificante Pistola de silicone amarela","category":"Construção e manutenção","spec":"lubrificante Pistola de silicone amarela","price":110.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0509","name":"Pistola de silicone de","category":"Construção e manutenção","spec":"Pistola de silicone de","price":300.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0510","name":"automotivas Tiras de reparação de","category":"Construção e manutenção","spec":"automotivas Tiras de reparação de","price":600.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0511","name":"pneus Cabo de reboque de 4 m","category":"Construção e manutenção","spec":"pneus Cabo de reboque de 4 m","price":550.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0512","name":"Cinzel para betão de 10","category":"Construção e manutenção","spec":"Cinzel para betão de 10","price":80.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0513","name":"polegadas de largura Cinzel para betão de 12","category":"Construção e manutenção","spec":"polegadas de largura Cinzel para betão de 12","price":90.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0514","name":"polegadas de largura Conjunto de limas de aço/","category":"Construção e manutenção","spec":"polegadas de largura Conjunto de limas de aço/","price":210.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0515","name":"Cortador de vidro","category":"Construção e manutenção","spec":"Cortador de vidro","price":600.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0516","name":"vermelho Cortador de vidro","category":"Construção e manutenção","spec":"vermelho Cortador de vidro","price":550.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0517","name":"Navalha com cola","category":"Construção e manutenção","spec":"Navalha com cola","price":20.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0518","name":"Limpa-para-brisas de","category":"Construção e manutenção","spec":"Limpa-para-brisas de","price":95.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0519","name":"14\"Ferro + Plástico Limpa-para-brisas de","category":"Construção e manutenção","spec":"14\"Ferro + Plástico Limpa-para-brisas de","price":95.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0520","name":"16\"Ferro + Plástico Limpa-para-brisas de","category":"Construção e manutenção","spec":"16\"Ferro + Plástico Limpa-para-brisas de","price":115.0,"unit":"un.","code":"A definir","image":null,"page":28
}
, {
  "id":"p0521","name":"Cabo de reboque de 4 m","category":"Construção e manutenção","spec":"Cabo de reboque de 4 m","price":600.0,"unit":"un.","code":"A definir","image":null,"page":29
}
, {
  "id":"p0522","name":"e 12 mm Cabo de ligação para","category":"Construção e manutenção","spec":"e 12 mm Cabo de ligação para","price":130.0,"unit":"un.","code":"A definir","image":null,"page":29
}
, {
  "id":"p0523","name":"automóvel 600A Cabo de ligação para","category":"Construção e manutenção","spec":"automóvel 600A Cabo de ligação para","price":65.0,"unit":"un.","code":"A definir","image":null,"page":29
}
, {
  "id":"p0524","name":"Macaco Macaco tesoura de 1,0","category":"Construção e manutenção","spec":"Macaco Macaco tesoura de 1,0","price":430.0,"unit":"un.","code":"A definir","image":null,"page":29
}
, {
  "id":"p0525","name":"toneladas Macaco tesoura de 2,0","category":"Construção e manutenção","spec":"toneladas Macaco tesoura de 2,0","price":590.0,"unit":"un.","code":"A definir","image":null,"page":29
}
, {
  "id":"p0526","name":"toneladas Macaco tesoura de 3,0","category":"Construção e manutenção","spec":"toneladas Macaco tesoura de 3,0","price":780.0,"unit":"un.","code":"A definir","image":null,"page":29
}
, {
  "id":"p0527","name":"toneladas Tampa vertical de 2 toneladas, vermelha, 1,9","category":"Construção e manutenção","spec":"toneladas Tampa vertical de 2 toneladas, vermelha, 1,9","price":625.0,"unit":"un.","code":"A definir","image":null,"page":29
}
, {
  "id":"p0528","name":"kg Tampa vertical de 3 toneladas, vermelha, 2,1","category":"Construção e manutenção","spec":"kg Tampa vertical de 3 toneladas, vermelha, 2,1","price":645.0,"unit":"un.","code":"A definir","image":null,"page":29
}
, {
  "id":"p0529","name":"kg Tampa vertical de 4 toneladas, vermelha, 2,2","category":"Construção e manutenção","spec":"kg Tampa vertical de 4 toneladas, vermelha, 2,2","price":690.0,"unit":"un.","code":"A definir","image":null,"page":29
}
, {
  "id":"p0530","name":"kg Tampa vertical de 6 toneladas, vermelha, 2,8","category":"Construção e manutenção","spec":"kg Tampa vertical de 6 toneladas, vermelha, 2,8","price":785.0,"unit":"un.","code":"A definir","image":null,"page":29
}
, {
  "id":"p0531","name":"kg Tampa vertical de 8 toneladas, vermelha, 3,1","category":"Construção e manutenção","spec":"kg Tampa vertical de 8 toneladas, vermelha, 3,1","price":855.0,"unit":"un.","code":"A definir","image":null,"page":29
}
, {
  "id":"p0532","name":"Tampa vertical de 10 toneladas, vermelha, 3,8","category":"Construção e manutenção","spec":"Tampa vertical de 10 toneladas, vermelha, 3,8","price":1015.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0533","name":"kg Tampa vertical de 20","category":"Construção e manutenção","spec":"kg Tampa vertical de 20","price":1840.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0534","name":"toneladas, vermelha, 7 kg Tampa vertical de 30","category":"Construção e manutenção","spec":"toneladas, vermelha, 7 kg Tampa vertical de 30","price":2235.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0535","name":"toneladas, vermelha, 9 kg Tampa vertical de 50 toneladas, vermelha, 13,5","category":"Construção e manutenção","spec":"toneladas, vermelha, 9 kg Tampa vertical de 50 toneladas, vermelha, 13,5","price":3270.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0536","name":"Espátula - 1","category":"Construção e manutenção","spec":"Espátula - 1","price":19.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0537","name":"Espátula - 2\"","category":"Construção e manutenção","spec":"Espátula - 2\"","price":21.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0538","name":"Espátula - 3\"","category":"Construção e manutenção","spec":"Espátula - 3\"","price":24.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0539","name":"Espátula - 4\"","category":"Construção e manutenção","spec":"Espátula - 4\"","price":27.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0540","name":"Espátula - 5\"","category":"Construção e manutenção","spec":"Espátula - 5\"","price":30.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0541","name":"Espátula - 6\"","category":"Construção e manutenção","spec":"Espátula - 6\"","price":32.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0542","name":"Boia de plástico ST","category":"Construção e manutenção","spec":"Boia de plástico ST","price":80.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0543","name":"Desempenadeira com cabo","category":"Construção e manutenção","spec":"Desempenadeira com cabo","price":65.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0544","name":"madeira de 25 cm Desempenadeira com cabo","category":"Construção e manutenção","spec":"madeira de 25 cm Desempenadeira com cabo","price":85.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0545","name":"madeira de 30 cm Desempenadeira com cabo","category":"Construção e manutenção","spec":"madeira de 30 cm Desempenadeira com cabo","price":60.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0546","name":"madeira de 23 cm Desempenadeira com cabo","category":"Construção e manutenção","spec":"madeira de 23 cm Desempenadeira com cabo","price":85.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0547","name":"plástico de 30 cm Desempenadeira com cabo","category":"Construção e manutenção","spec":"plástico de 30 cm Desempenadeira com cabo","price":70.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0548","name":"Escova de arame preta","category":"Arames","spec":"Escova de arame preta","price":25.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0549","name":"Escova de arame amarela","category":"Arames","spec":"Escova de arame amarela","price":35.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0550","name":"Escova de arame para faca","category":"Arames","spec":"Escova de arame para faca","price":35.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0551","name":"Escova de rolo 460 - 9\"","category":"Construção e manutenção","spec":"Escova de rolo 460 - 9\"","price":42.0,"unit":"un.","code":"A definir","image":null,"page":30
}
, {
  "id":"p0552","name":"Espátula 175, cabo em","category":"Construção e manutenção","spec":"Espátula 175, cabo em","price":52.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0553","name":"plástico, 27*18 mm Espátula 175, cabo em","category":"Construção e manutenção","spec":"plástico, 27*18 mm Espátula 175, cabo em","price":85.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0554","name":"plástico, 32*22 mm raspador inclinado de 1.5","category":"Construção e manutenção","spec":"plástico, 32*22 mm raspador inclinado de 1.5","price":295.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0555","name":"metro Raspador inclinado de 1","category":"Construção e manutenção","spec":"metro Raspador inclinado de 1","price":195.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0556","name":"metro raspador inclinado de 2","category":"Construção e manutenção","spec":"metro raspador inclinado de 2","price":390.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0557","name":"metro Colher de ângulo interno","category":"Construção e manutenção","spec":"metro Colher de ângulo interno","price":120.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0558","name":"Colher de canto externo","category":"Construção e manutenção","spec":"Colher de canto externo","price":120.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0559","name":"pavimento Ralo de pavimento 032","category":"Construção e manutenção","spec":"pavimento Ralo de pavimento 032","price":210.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0560","name":"Ralo de pavimento 033","category":"Construção e manutenção","spec":"Ralo de pavimento 033","price":100.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0561","name":"drenagem Bujão de drenagem de","category":"Construção e manutenção","spec":"drenagem Bujão de drenagem de","price":140.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0562","name":"Rolo 922-Orelhas grandes largas amarelo","category":"Construção e manutenção","spec":"Rolo 922-Orelhas grandes largas amarelo","price":57.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0563","name":"acinzentadas-9 Rolo 922 amarelo","category":"Construção e manutenção","spec":"acinzentadas-9 Rolo 922 amarelo","price":64.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0564","name":"acinzentado largo - 25 cm Escova de rolo 738 - 4","category":"Construção e manutenção","spec":"acinzentado largo - 25 cm Escova de rolo 738 - 4","price":21.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0565","name":"Manómetro de 16 bar","category":"Construção e manutenção","spec":"Manómetro de 16 bar","price":120.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0566","name":"Tubo de 11/2 070","category":"Tubos","spec":"Tubo de 11/2 070","price":55.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":31
}
, {
  "id":"p0567","name":"Tubo de 11/4\" 069","category":"Tubos","spec":"Tubo de 11/4\" 069","price":50.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":31
}
, {
  "id":"p0568","name":"tubo de 11/2\"","category":"Tubos","spec":"tubo de 11/2\"","price":55.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":31
}
, {
  "id":"p0569","name":"Tubo de 11/4","category":"Tubos","spec":"Tubo de 11/4","price":50.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":31
}
, {
  "id":"p0570","name":"Ralo de pavimento 062","category":"Construção e manutenção","spec":"Ralo de pavimento 062","price":90.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0571","name":"Ralo da banheira","category":"Construção e manutenção","spec":"Ralo da banheira","price":255.0,"unit":"un.","code":"A definir","image":null,"page":31
}
, {
  "id":"p0572","name":"Bujão de drenagem de","category":"Construção e manutenção","spec":"Bujão de drenagem de","price":160.0,"unit":"un.","code":"A definir","image":null,"page":32
}
, {
  "id":"p0573","name":"11/4 Conjunto de drenagem","category":"Construção e manutenção","spec":"11/4 Conjunto de drenagem","price":200.0,"unit":"un.","code":"A definir","image":null,"page":32
}
, {
  "id":"p0574","name":"COBRA 1 1/4 Conjunto de drenagem","category":"Construção e manutenção","spec":"COBRA 1 1/4 Conjunto de drenagem","price":220.0,"unit":"un.","code":"A definir","image":null,"page":32
}
, {
  "id":"p0575","name":"angulares Válvulas angulares da","category":"Construção e manutenção","spec":"angulares Válvulas angulares da","price":560.0,"unit":"un.","code":"A definir","image":null,"page":32
}
, {
  "id":"p0576","name":"série COBRA Válvula angular 126","category":"Construção e manutenção","spec":"série COBRA Válvula angular 126","price":90.0,"unit":"un.","code":"A definir","image":null,"page":32
}
, {
  "id":"p0577","name":"Válvula angular 125","category":"Construção e manutenção","spec":"Válvula angular 125","price":70.0,"unit":"un.","code":"A definir","image":null,"page":32
}
, {
  "id":"p0578","name":"Válvula angular 124","category":"Construção e manutenção","spec":"Válvula angular 124","price":65.0,"unit":"un.","code":"A definir","image":null,"page":32
}
, {
  "id":"p0579","name":"Válvula angular 123","category":"Construção e manutenção","spec":"Válvula angular 123","price":70.0,"unit":"un.","code":"A definir","image":null,"page":32
}
, {
  "id":"p0580","name":"Válvula angular 122","category":"Construção e manutenção","spec":"Válvula angular 122","price":85.0,"unit":"un.","code":"A definir","image":null,"page":32
}
, {
  "id":"p0581","name":"Válvula angular de dupla","category":"Construção e manutenção","spec":"Válvula angular de dupla","price":97.0,"unit":"un.","code":"A definir","image":null,"page":32
}
, {
  "id":"p0582","name":"função Válvula angular com","category":"Construção e manutenção","spec":"função Válvula angular com","price":67.0,"unit":"un.","code":"A definir","image":null,"page":32
}
, {
  "id":"p0583","name":"Válvula escura 3/4","category":"Construção e manutenção","spec":"Válvula escura 3/4","price":430.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0584","name":"Válvula de esfera em liga","category":"Construção e manutenção","spec":"Válvula de esfera em liga","price":125.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0585","name":"zinco de 3/4\" Série COBRA 3/4\"","category":"Construção e manutenção","spec":"zinco de 3/4\" Série COBRA 3/4\"","price":325.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0586","name":"Ligação de tubo roscada","category":"Tubos","spec":"Ligação de tubo roscada","price":40.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":33
}
, {
  "id":"p0587","name":"cinzenta de 3/4\" Conectores de cobre da","category":"Construção e manutenção","spec":"cinzenta de 3/4\" Conectores de cobre da","price":310.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0588","name":"série COBRA 1/2 Conectores de cobre da","category":"Construção e manutenção","spec":"série COBRA 1/2 Conectores de cobre da","price":330.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0589","name":"Torneira de cobre da série","category":"Construção e manutenção","spec":"Torneira de cobre da série","price":340.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0590","name":"COBRA 3/4 Torneira de cobre da série","category":"Construção e manutenção","spec":"COBRA 3/4 Torneira de cobre da série","price":310.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0591","name":"COBRA 1/2 Torneira única de água fria","category":"Construção e manutenção","spec":"COBRA 1/2 Torneira única de água fria","price":690.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0592","name":"Torneiras de água quente","category":"Construção e manutenção","spec":"Torneiras de água quente","price":930.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0593","name":"e fria Torneira de 3/4\"","category":"Construção e manutenção","spec":"e fria Torneira de 3/4\"","price":250.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0594","name":"Tubo entrançado de 60 cm","category":"Tubos","spec":"Tubo entrançado de 60 cm","price":50.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":33
}
, {
  "id":"p0595","name":"Tubo entrançado de 45 cm","category":"Tubos","spec":"Tubo entrançado de 45 cm","price":45.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":33
}
, {
  "id":"p0596","name":"Torneira 037","category":"Construção e manutenção","spec":"Torneira 037","price":270.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0597","name":"Torneira de tubo fino","category":"Tubos","spec":"Torneira de tubo fino","price":320.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":33
}
, {
  "id":"p0598","name":"Torneira em aço inoxidável","category":"Construção e manutenção","spec":"Torneira em aço inoxidável","price":370.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0599","name":"com tubo grosso Torneira de liga de zinco","category":"Tubos","spec":"com tubo grosso Torneira de liga de zinco","price":140.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":33
}
, {
  "id":"p0600","name":"3/4\" Torneira de plástico de","category":"Construção e manutenção","spec":"3/4\" Torneira de plástico de","price":38.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0601","name":"3/4\" com grande boca Torneira de plástico de","category":"Construção e manutenção","spec":"3/4\" com grande boca Torneira de plástico de","price":23.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0602","name":"3/4\" Torneira de plástico 3/4\"","category":"Construção e manutenção","spec":"3/4\" Torneira de plástico 3/4\"","price":50.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0603","name":"Chuveiro de quadrado 017","category":"Construção e manutenção","spec":"Chuveiro de quadrado 017","price":185.0,"unit":"un.","code":"A definir","image":null,"page":33
}
, {
  "id":"p0604","name":"Torneira 038","category":"Ferragens e ferramentas","spec":"Torneira 038","price":270.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0605","name":"Torneira de plástico 1/2\"","category":"Ferragens e ferramentas","spec":"Torneira de plástico 1/2\"","price":35.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0606","name":"Ducha Chuveiro MILANO Preto","category":"Ferragens e ferramentas","spec":"Ducha Chuveiro MILANO Preto","price":320.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0607","name":"Chuveiro MILANO com","category":"Ferragens e ferramentas","spec":"Chuveiro MILANO com","price":210.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0608","name":"revestimento eletrolítico Chuveiro de 8 polegadas","category":"Ferragens e ferramentas","spec":"revestimento eletrolítico Chuveiro de 8 polegadas","price":170.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0609","name":"Chuveiro de 6 polegadas","category":"Ferragens e ferramentas","spec":"Chuveiro de 6 polegadas","price":125.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0610","name":"Chuveiro preto","category":"Ferragens e ferramentas","spec":"Chuveiro preto","price":220.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0611","name":"Chuveiro 052","category":"Ferragens e ferramentas","spec":"Chuveiro 052","price":280.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0612","name":"Chuveiro de 6 polegadas","category":"Ferragens e ferramentas","spec":"Chuveiro de 6 polegadas","price":130.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0613","name":"(quadrado) Chuveiro de 6 polegadas","category":"Ferragens e ferramentas","spec":"(quadrado) Chuveiro de 6 polegadas","price":140.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0614","name":"Chuveiro 016","category":"Ferragens e ferramentas","spec":"Chuveiro 016","price":185.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0615","name":"Chuveiro","category":"Ferragens e ferramentas","spec":"Chuveiro","price":235.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0616","name":"Conjunto de chuveiro","category":"Ferragens e ferramentas","spec":"Conjunto de chuveiro","price":2600.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0617","name":"eletrogalvanizado Conjunto de chuveiro cinza","category":"Ferragens e ferramentas","spec":"eletrogalvanizado Conjunto de chuveiro cinza","price":2600.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0618","name":"feito em formato quadrado Conjunto de duche preto","category":"Ferragens e ferramentas","spec":"feito em formato quadrado Conjunto de duche preto","price":3000.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0619","name":"Conjunto de chuveiro em","category":"Ferragens e ferramentas","spec":"Conjunto de chuveiro em","price":1900.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0620","name":"Conjunto de 8 chaves de bocas curvas foscas (8-19","category":"Ferragens e ferramentas","spec":"Conjunto de 8 chaves de bocas curvas foscas (8-19","price":800.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0621","name":"mm) Chave sextavada estrela","category":"Ferragens e ferramentas","spec":"mm) Chave sextavada estrela","price":350.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0622","name":"XT-7pcs Chave sextavada plana XT","category":"Ferragens e ferramentas","spec":"XT-7pcs Chave sextavada plana XT","price":300.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0623","name":"7pcs Jogo das 10 chaves (8-22)","category":"Ferragens e ferramentas","spec":"7pcs Jogo das 10 chaves (8-22)","price":500.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0624","name":"Chave inglesa de plástico","category":"Ferragens e ferramentas","spec":"Chave inglesa de plástico","price":500.0,"unit":"un.","code":"A definir","image":null,"page":34
}
, {
  "id":"p0625","name":"Conjunto de 12 chaves de roquete de 1/4 de","category":"Ferragens e ferramentas","spec":"Conjunto de 12 chaves de roquete de 1/4 de","price":650.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0626","name":"polegada Jogo de chaves de caixa com 12 peças/tamanhos","category":"Ferragens e ferramentas","spec":"polegada Jogo de chaves de caixa com 12 peças/tamanhos","price":900.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0627","name":"8-22. Jogo de chaves de caixa","category":"Ferragens e ferramentas","spec":"8-22. Jogo de chaves de caixa","price":1750.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0628","name":"24 peças com caixa Chave de caixa AIWA","category":"Ferragens e ferramentas","spec":"24 peças com caixa Chave de caixa AIWA","price":250.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0629","name":"fenda Jogo de chaves de fendas","category":"Ferragens e ferramentas","spec":"fenda Jogo de chaves de fendas","price":160.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0630","name":"azuis com 6 peças Jogo de chaves de fendas","category":"Ferragens e ferramentas","spec":"azuis com 6 peças Jogo de chaves de fendas","price":25.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0631","name":"com 3 peças Conjunto de 6 chaves de","category":"Ferragens e ferramentas","spec":"com 3 peças Conjunto de 6 chaves de","price":120.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0632","name":"fendas laranja HL - Tabela de chaves de","category":"Ferragens e ferramentas","spec":"fendas laranja HL - Tabela de chaves de","price":180.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0633","name":"fendas de 7 peças Conjunto de 7 chaves de","category":"Ferragens e ferramentas","spec":"fendas de 7 peças Conjunto de 7 chaves de","price":300.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0634","name":"fendas elétricas IMS Conjunto de 8 chaves de","category":"Ferragens e ferramentas","spec":"fendas elétricas IMS Conjunto de 8 chaves de","price":300.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0635","name":"fendas Conjunto de 6 chaves de","category":"Ferragens e ferramentas","spec":"fendas Conjunto de 6 chaves de","price":240.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0636","name":"Conjunto de 20 peças de","category":"Ferragens e ferramentas","spec":"Conjunto de 20 peças de","price":900.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0637","name":"machos e cossinetes Jogo de chaves de caixa de","category":"Ferragens e ferramentas","spec":"machos e cossinetes Jogo de chaves de caixa de","price":4400.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0638","name":"85 peças com caixa Caixa de ferramentas de 53","category":"Ferragens e ferramentas","spec":"85 peças com caixa Caixa de ferramentas de 53","price":900.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0639","name":"Chave sextavada estrela","category":"Ferragens e ferramentas","spec":"Chave sextavada estrela","price":100.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0640","name":"Chave hexagonal esférica","category":"Ferragens e ferramentas","spec":"Chave hexagonal esférica","price":80.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0641","name":"Chave sextavada plana","category":"Ferragens e ferramentas","spec":"Chave sextavada plana","price":75.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0642","name":"Fechadura Atómica","category":"Ferragens e ferramentas","spec":"Fechadura Atómica","price":1000.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0643","name":"Esférica 35-45-55 Cadeado SG amarelo 36","category":"Ferragens e ferramentas","spec":"Esférica 35-45-55 Cadeado SG amarelo 36","price":1450.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0644","name":"45-56 Bloqueio de cores cruzadas de cartão cinzento 35-45","category":"Ferragens e ferramentas","spec":"45-56 Bloqueio de cores cruzadas de cartão cinzento 35-45","price":1000.0,"unit":"un.","code":"A definir","image":null,"page":35
}
, {
  "id":"p0645","name":"Conjunto de 6 chaves de","category":"Ferragens e ferramentas","spec":"Conjunto de 6 chaves de","price":210.0,"unit":"un.","code":"A definir","image":null,"page":36
}
, {
  "id":"p0646","name":"Fechadura Ferrolho de cano 4'","category":"Tubos","spec":"Fechadura Ferrolho de cano 4'","price":50.0,"unit":"un.","code":"A definir","image":null,"page":36
}
, {
  "id":"p0647","name":"Ferrolho de cano 6'","category":"Tubos","spec":"Ferrolho de cano 6'","price":65.0,"unit":"un.","code":"A definir","image":null,"page":36
}
, {
  "id":"p0648","name":"Ferrolho de cano 8'","category":"Tubos","spec":"Ferrolho de cano 8'","price":80.0,"unit":"un.","code":"A definir","image":null,"page":36
}
, {
  "id":"p0649","name":"Acessórios para portas","category":"Ferragens e ferramentas","spec":"Acessórios para portas","price":520.0,"unit":"un.","code":"A definir","image":null,"page":36
}
, {
  "id":"p0650","name":"200KG Fechadura de lingueta reta","category":"Ferragens e ferramentas","spec":"200KG Fechadura de lingueta reta","price":290.0,"unit":"un.","code":"A definir","image":null,"page":36
}
, {
  "id":"p0651","name":"Fechadura de lingueta","category":"Ferragens e ferramentas","spec":"Fechadura de lingueta","price":290.0,"unit":"un.","code":"A definir","image":null,"page":36
}
, {
  "id":"p0652","name":"com gancho 41055 Fechadura da maçaneta","category":"Ferragens e ferramentas","spec":"com gancho 41055 Fechadura da maçaneta","price":185.0,"unit":"un.","code":"A definir","image":null,"page":36
}
, {
  "id":"p0653","name":"porta Fechadura da maçaneta","category":"Ferragens e ferramentas","spec":"porta Fechadura da maçaneta","price":140.0,"unit":"un.","code":"A definir","image":null,"page":36
}
, {
  "id":"p0654","name":"porta 103-30 Puxador redondo em plástico JS, chapa de","category":"Ferragens e ferramentas","spec":"porta 103-30 Puxador redondo em plástico JS, chapa de","price":55.0,"unit":"un.","code":"A definir","image":null,"page":36
}
, {
  "id":"p0655","name":"ferro curvada, embalagem JS, fecho de gaveta Fechadura de Gaveta com Pega de Plástico e Ferro","category":"Ferragens e ferramentas","spec":"ferro curvada, embalagem JS, fecho de gaveta Fechadura de Gaveta com Pega de Plástico e Ferro","price":35.0,"unit":"un.","code":"A definir","image":null,"page":36
}
, {
  "id":"p0656","name":"Cadeado Fechadura redonda de 60","category":"Ferragens e ferramentas","spec":"Cadeado Fechadura redonda de 60","price":150.0,"unit":"un.","code":"A definir","image":null,"page":37
}
, {
  "id":"p0657","name":"mm Fechadura redonda de 70","category":"Ferragens e ferramentas","spec":"mm Fechadura redonda de 70","price":165.0,"unit":"un.","code":"A definir","image":null,"page":37
}
, {
  "id":"p0658","name":"mm Fechadura redonda de 90","category":"Ferragens e ferramentas","spec":"mm Fechadura redonda de 90","price":210.0,"unit":"un.","code":"A definir","image":null,"page":37
}
, {
  "id":"p0659","name":"mm Fechadura redonda de 80","category":"Ferragens e ferramentas","spec":"mm Fechadura redonda de 80","price":185.0,"unit":"un.","code":"A definir","image":null,"page":37
}
, {
  "id":"p0660","name":"mm Cadeado de cano duplo colorido de 63 mm com","category":"Tubos","spec":"mm Cadeado de cano duplo colorido de 63 mm com","price":140.0,"unit":"un.","code":"A definir","image":null,"page":37
}
, {
  "id":"p0661","name":"cores sortidas Cadeado de dupla haste colorido de 63 mm (cores","category":"Ferragens e ferramentas","spec":"cores sortidas Cadeado de dupla haste colorido de 63 mm (cores","price":140.0,"unit":"un.","code":"A definir","image":null,"page":37
}
, {
  "id":"p0662","name":"sortidas) Cadeado de cano duplo colorido de 75 mm com","category":"Tubos","spec":"sortidas) Cadeado de cano duplo colorido de 75 mm com","price":210.0,"unit":"un.","code":"A definir","image":null,"page":37
}
, {
  "id":"p0663","name":"cores sortidas Travão tipo cobra, 40mm","category":"Ferragens e ferramentas","spec":"cores sortidas Travão tipo cobra, 40mm","price":260.0,"unit":"un.","code":"A definir","image":null,"page":37
}
, {
  "id":"p0664","name":"curto Travão tipo cobra, 50mm","category":"Ferragens e ferramentas","spec":"curto Travão tipo cobra, 50mm","price":300.0,"unit":"un.","code":"A definir","image":null,"page":37
}
, {
  "id":"p0665","name":"curto Travão tipo cobra, 60mm","category":"Ferragens e ferramentas","spec":"curto Travão tipo cobra, 60mm","price":350.0,"unit":"un.","code":"A definir","image":null,"page":37
}
, {
  "id":"p0666","name":"curto Bloqueio de feixe curto de","category":"Ferragens e ferramentas","spec":"curto Bloqueio de feixe curto de","price":110.0,"unit":"un.","code":"A definir","image":null,"page":37
}
, {
  "id":"p0667","name":"Fechadura de caixa de 75 Bloqueio de feixe curto de 140 mm com imitação de","category":"Ferragens e ferramentas","spec":"Fechadura de caixa de 75 Bloqueio de feixe curto de 140 mm com imitação de","price":175.0,"unit":"un.","code":"A definir","image":null,"page":38
}
, {
  "id":"p0668","name":"Bloqueio de núcleo de cobre de alta resistência Fita métrica","category":"Ferragens e ferramentas","spec":"Bloqueio de núcleo de cobre de alta resistência Fita métrica","price":280.0,"unit":"un.","code":"A definir","image":null,"page":39
}
, {
  "id":"p0669","name":"atómica curta de 70 mm Fechadura com núcleo de cobre de alta resistência e","category":"Ferragens e ferramentas","spec":"atómica curta de 70 mm Fechadura com núcleo de cobre de alta resistência e","price":245.0,"unit":"un.","code":"A definir","image":null,"page":39
}
, {
  "id":"p0670","name":"comprimento de 50 mm Fechadura com núcleo de cobre de alta resistência e","category":"Ferragens e ferramentas","spec":"comprimento de 50 mm Fechadura com núcleo de cobre de alta resistência e","price":265.0,"unit":"un.","code":"A definir","image":null,"page":39
}
, {
  "id":"p0671","name":"comprimento de 60 mm Fechadura com núcleo de cobre de alta resistência e","category":"Ferragens e ferramentas","spec":"comprimento de 60 mm Fechadura com núcleo de cobre de alta resistência e","price":300.0,"unit":"un.","code":"A definir","image":null,"page":39
}
, {
  "id":"p0672","name":"Fita métrica laranja de 100","category":"Ferragens e ferramentas","spec":"Fita métrica laranja de 100","price":270.0,"unit":"un.","code":"A definir","image":null,"page":39
}
, {
  "id":"p0673","name":"metros Fita métrica laranja de 30","category":"Ferragens e ferramentas","spec":"metros Fita métrica laranja de 30","price":140.0,"unit":"un.","code":"A definir","image":null,"page":39
}
, {
  "id":"p0674","name":"metros Fita métrica laranja de 50","category":"Ferragens e ferramentas","spec":"metros Fita métrica laranja de 50","price":180.0,"unit":"un.","code":"A definir","image":null,"page":39
}
, {
  "id":"p0675","name":"Régua de (12 polegadas) com acabamento lacado","category":"Ferragens e ferramentas","spec":"Régua de (12 polegadas) com acabamento lacado","price":60.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0676","name":"amarelo Régua de (16 polegadas) com acabamento lacado","category":"Ferragens e ferramentas","spec":"amarelo Régua de (16 polegadas) com acabamento lacado","price":65.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0677","name":"amarelo Régua lacada a preto","category":"Ferragens e ferramentas","spec":"amarelo Régua lacada a preto","price":90.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0678","name":"300*500*1,4 mm Régua lacada a preto","category":"Ferragens e ferramentas","spec":"300*500*1,4 mm Régua lacada a preto","price":100.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0679","name":"Nível Nível de bolha 30CM","category":"Ferragens e ferramentas","spec":"Nível Nível de bolha 30CM","price":120.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0680","name":"Nível de bolha 60CM","category":"Ferragens e ferramentas","spec":"Nível de bolha 60CM","price":200.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0681","name":"Nível de bolha 90CM","category":"Ferragens e ferramentas","spec":"Nível de bolha 90CM","price":260.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0682","name":"Nível de bolha 100CM","category":"Ferragens e ferramentas","spec":"Nível de bolha 100CM","price":280.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0683","name":"Nível de bolha 150CM","category":"Ferragens e ferramentas","spec":"Nível de bolha 150CM","price":410.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0684","name":"Folha de serra Lâmina de serra laranja","category":"Ferragens e ferramentas","spec":"Folha de serra Lâmina de serra laranja","price":15.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0685","name":"Fita métrica XC-24 preta","category":"Ferragens e ferramentas","spec":"Fita métrica XC-24 preta","price":60.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0686","name":"5M Fita métrica XC-24 preta","category":"Ferragens e ferramentas","spec":"5M Fita métrica XC-24 preta","price":100.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0687","name":"7.5M Fita métrica XC-24 preta","category":"Ferragens e ferramentas","spec":"7.5M Fita métrica XC-24 preta","price":125.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0688","name":"10M Fita métrica dente-de-leão de 3m18 8,5s, novo","category":"Ferragens e ferramentas","spec":"10M Fita métrica dente-de-leão de 3m18 8,5s, novo","price":30.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0689","name":"material. Fita métrica dente-de-leão de 5m18 8,5s, novo","category":"Ferragens e ferramentas","spec":"material. Fita métrica dente-de-leão de 5m18 8,5s, novo","price":40.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0690","name":"material. Fita métrica dente-de-leão de 7.5m18 8,5s, novo","category":"Ferragens e ferramentas","spec":"material. Fita métrica dente-de-leão de 7.5m18 8,5s, novo","price":80.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0691","name":"material. Fita métrica dente-de-leão de 10m18 8,5s, novo","category":"Ferragens e ferramentas","spec":"material. Fita métrica dente-de-leão de 10m18 8,5s, novo","price":100.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0692","name":"material. Fita métrica de polipropileno Dandelion","category":"Ferragens e ferramentas","spec":"material. Fita métrica de polipropileno Dandelion","price":40.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0693","name":"3m18 8,5s Fita métrica de polipropileno Dandelion","category":"Ferragens e ferramentas","spec":"3m18 8,5s Fita métrica de polipropileno Dandelion","price":115.0,"unit":"un.","code":"A definir","image":null,"page":40
}
, {
  "id":"p0694","name":"Pregos de expansão com","category":"Pregos","spec":"Pregos de expansão com","price":30.0,"unit":"un.","code":"A definir","image":"images/produtos/prego.jpg","page":40
}
, {
  "id":"p0695","name":"parafuso Pregos de expansão com","category":"Pregos","spec":"parafuso Pregos de expansão com","price":40.0,"unit":"un.","code":"A definir","image":"images/produtos/prego.jpg","page":40
}
, {
  "id":"p0696","name":"Serra de arco de 24","category":"Ferragens e ferramentas","spec":"Serra de arco de 24","price":145.0,"unit":"un.","code":"A definir","image":null,"page":41
}
, {
  "id":"p0697","name":"polegadas Serra de arco","category":"Ferragens e ferramentas","spec":"polegadas Serra de arco","price":80.0,"unit":"un.","code":"A definir","image":null,"page":41
}
, {
  "id":"p0698","name":"Serra de corte rápida","category":"Ferragens e ferramentas","spec":"Serra de corte rápida","price":180.0,"unit":"un.","code":"A definir","image":null,"page":41
}
, {
  "id":"p0699","name":"Parafusos Parafusos para drywall","category":"Ferragens e ferramentas","spec":"Parafusos Parafusos para drywall","price":140.0,"unit":"un.","code":"A definir","image":null,"page":41
}
, {
  "id":"p0700","name":"Parafusos para drywall","category":"Ferragens e ferramentas","spec":"Parafusos para drywall","price":140.0,"unit":"un.","code":"A definir","image":null,"page":41
}
, {
  "id":"p0701","name":"Broca hexagonal 500","category":"Ferragens e ferramentas","spec":"Broca hexagonal 500","price":580.0,"unit":"un.","code":"A definir","image":null,"page":41
}
, {
  "id":"p0702","name":"Broca hexagonal 350","category":"Ferragens e ferramentas","spec":"Broca hexagonal 350","price":580.0,"unit":"un.","code":"A definir","image":null,"page":41
}
, {
  "id":"p0703","name":"Broca hexagonal 300","category":"Ferragens e ferramentas","spec":"Broca hexagonal 300","price":580.0,"unit":"un.","code":"A definir","image":null,"page":42
}
, {
  "id":"p0704","name":"Broca hexagonal 250","category":"Ferragens e ferramentas","spec":"Broca hexagonal 250","price":580.0,"unit":"un.","code":"A definir","image":null,"page":42
}
, {
  "id":"p0705","name":"Broca hexagonal 200","category":"Ferragens e ferramentas","spec":"Broca hexagonal 200","price":580.0,"unit":"un.","code":"A definir","image":null,"page":42
}
, {
  "id":"p0706","name":"Broca hexagonal 150","category":"Ferragens e ferramentas","spec":"Broca hexagonal 150","price":480.0,"unit":"un.","code":"A definir","image":null,"page":42
}
, {
  "id":"p0707","name":"Broca hexagonal 100 Puxador","category":"Ferragens e ferramentas","spec":"Broca hexagonal 100 Puxador","price":640.0,"unit":"un.","code":"A definir","image":null,"page":42
}
, {
  "id":"p0708","name":"Parafusos de expansão M6","category":"Ferragens e ferramentas","spec":"Parafusos de expansão M6","price":5.0,"unit":"un.","code":"A definir","image":null,"page":42
}
, {
  "id":"p0709","name":"Parafusos de expansão M8","category":"Ferragens e ferramentas","spec":"Parafusos de expansão M8","price":6.0,"unit":"un.","code":"A definir","image":null,"page":42
}
, {
  "id":"p0710","name":"Parafusos de expansão","category":"Ferragens e ferramentas","spec":"Parafusos de expansão","price":10.0,"unit":"un.","code":"A definir","image":null,"page":42
}
, {
  "id":"p0711","name":"M10 Parafusos de expansão","category":"Ferragens e ferramentas","spec":"M10 Parafusos de expansão","price":17.0,"unit":"un.","code":"A definir","image":null,"page":42
}
, {
  "id":"p0712","name":"M12 Gancho de expansão M6","category":"Ferragens e ferramentas","spec":"M12 Gancho de expansão M6","price":6.0,"unit":"un.","code":"A definir","image":null,"page":42
}
, {
  "id":"p0713","name":"Gancho de expansão M8","category":"Ferragens e ferramentas","spec":"Gancho de expansão M8","price":10.0,"unit":"un.","code":"A definir","image":null,"page":42
}
, {
  "id":"p0714","name":"Gancho de expansão M10","category":"Ferragens e ferramentas","spec":"Gancho de expansão M10","price":16.0,"unit":"un.","code":"A definir","image":null,"page":42
}
, {
  "id":"p0715","name":"Gancho de expansão M12","category":"Ferragens e ferramentas","spec":"Gancho de expansão M12","price":30.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0716","name":"Puxador Tubo quadrado de","category":"Tubos","spec":"Puxador Tubo quadrado de","price":830.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":43
}
, {
  "id":"p0717","name":"30*30*600 mm Puxador Puxador de tubo","category":"Tubos","spec":"30*30*600 mm Puxador Puxador de tubo","price":900.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":43
}
, {
  "id":"p0718","name":"quadrado 30*30*800mm Puxador de tubo","category":"Tubos","spec":"quadrado 30*30*800mm Puxador de tubo","price":945.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":43
}
, {
  "id":"p0719","name":"quadrado 30*30*1000mm Tubo redondo 32*600mm","category":"Tubos","spec":"quadrado 30*30*1000mm Tubo redondo 32*600mm","price":600.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":43
}
, {
  "id":"p0720","name":"Tubo redondo 32*800mm","category":"Tubos","spec":"Tubo redondo 32*800mm","price":645.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":43
}
, {
  "id":"p0721","name":"Tubo redondo","category":"Tubos","spec":"Tubo redondo","price":715.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":43
}
, {
  "id":"p0722","name":"32*1000mm Puxador modelo 32*600S","category":"Ferragens e ferramentas","spec":"32*1000mm Puxador modelo 32*600S","price":625.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0723","name":"Puxador preto mate","category":"Ferragens e ferramentas","spec":"Puxador preto mate","price":600.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0724","name":"32*600mm Puxador sarjado","category":"Ferragens e ferramentas","spec":"32*600mm Puxador sarjado","price":690.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0725","name":"38*600mm Puxador ajustável","category":"Ferragens e ferramentas","spec":"38*600mm Puxador ajustável","price":760.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0726","name":"12-192 Puxador oco em","category":"Ferragens e ferramentas","spec":"12-192 Puxador oco em","price":25.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0727","name":"Acessórios para portas","category":"Ferragens e ferramentas","spec":"Acessórios para portas","price":785.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0728","name":"Bomba de ar em aço","category":"Ferragens e ferramentas","spec":"Bomba de ar em aço","price":255.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0729","name":"inoxidável Bomba de ar 38 preto","category":"Ferragens e ferramentas","spec":"inoxidável Bomba de ar 38 preto","price":205.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0730","name":"Bomba de ar 45 Placa","category":"Ferragens e ferramentas","spec":"Bomba de ar 45 Placa","price":180.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0731","name":"dobrável Bomba de ar pequena de","category":"Ferragens e ferramentas","spec":"dobrável Bomba de ar pequena de","price":70.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0732","name":"35 mm Bomba de ar 164 preto","category":"Ferragens e ferramentas","spec":"35 mm Bomba de ar 164 preto","price":325.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0733","name":"Cana telescópica - HN - 2","category":"Ferragens e ferramentas","spec":"Cana telescópica - HN - 2","price":83.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0734","name":"metros Cana telescópica - HN - 3","category":"Ferragens e ferramentas","spec":"metros Cana telescópica - HN - 3","price":110.0,"unit":"un.","code":"A definir","image":null,"page":43
}
, {
  "id":"p0735","name":"soldaPPR Ferro de soldar elétrico","category":"Ferragens e ferramentas","spec":"soldaPPR Ferro de soldar elétrico","price":125.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0736","name":"PS-360 de 60 W Ferro de soldar elétrico de","category":"Ferragens e ferramentas","spec":"PS-360 de 60 W Ferro de soldar elétrico de","price":100.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0737","name":"60 W Fio de solda 200G","category":"Ferragens e ferramentas","spec":"60 W Fio de solda 200G","price":225.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0738","name":"Fio de solda 60G","category":"Ferragens e ferramentas","spec":"Fio de solda 60G","price":70.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0739","name":"Fita veda rosca Tecido de matéria-prima","category":"Ferragens e ferramentas","spec":"Fita veda rosca Tecido de matéria-prima","price":8.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0740","name":"MAAT Tecido de grande porte,","category":"Ferragens e ferramentas","spec":"MAAT Tecido de grande porte,","price":17.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0741","name":"matéria-prima Tecido bruto","category":"Ferragens e ferramentas","spec":"matéria-prima Tecido bruto","price":8.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0742","name":"Tecido cru, tamanho","category":"Ferragens e ferramentas","spec":"Tecido cru, tamanho","price":20.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0743","name":"Alicate Alicate de corte com cabo","category":"Ferragens e ferramentas","spec":"Alicate Alicate de corte com cabo","price":110.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0744","name":"Fracesa Amircano","category":"Tubos","spec":"Fracesa Amircano","price":600.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0745","name":"Fracesa Amircano","category":"Tubos","spec":"Fracesa Amircano","price":380.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0746","name":"Francesa Americano","category":"Tubos","spec":"Francesa Americano","price":300.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0747","name":"Francesa de 12 polegadas","category":"Ferragens e ferramentas","spec":"Francesa de 12 polegadas","price":280.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0748","name":"Francesa de 10 polegadas","category":"Ferragens e ferramentas","spec":"Francesa de 10 polegadas","price":230.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0749","name":"Francesa de 8 polegadas","category":"Ferragens e ferramentas","spec":"Francesa de 8 polegadas","price":190.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0750","name":"Chave de fendas dupla de","category":"Ferragens e ferramentas","spec":"Chave de fendas dupla de","price":25.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0751","name":"4 polegadas Chave de fendas","category":"Ferragens e ferramentas","spec":"4 polegadas Chave de fendas","price":45.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0752","name":"Caterpillar Chave de fendas plana YG","category":"Ferragens e ferramentas","spec":"Caterpillar Chave de fendas plana YG","price":20.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0753","name":"Chave de estrela YG","category":"Ferragens e ferramentas","spec":"Chave de estrela YG","price":20.0,"unit":"un.","code":"A definir","image":null,"page":44
}
, {
  "id":"p0754","name":"Alicate de bico longo nº 5, Chave","category":"Ferragens e ferramentas","spec":"Alicate de bico longo nº 5, Chave","price":110.0,"unit":"un.","code":"A definir","image":null,"page":45
}
, {
  "id":"p0755","name":"8\" Alicate de cabos nº 5 de","category":"Ferragens e ferramentas","spec":"8\" Alicate de cabos nº 5 de","price":110.0,"unit":"un.","code":"A definir","image":null,"page":45
}
, {
  "id":"p0756","name":"8\" Alicate de pressão 10\"","category":"Ferragens e ferramentas","spec":"8\" Alicate de pressão 10\"","price":170.0,"unit":"un.","code":"A definir","image":null,"page":45
}
, {
  "id":"p0757","name":"Alicate de cabo longo","category":"Ferragens e ferramentas","spec":"Alicate de cabo longo","price":340.0,"unit":"un.","code":"A definir","image":null,"page":45
}
, {
  "id":"p0758","name":"Alicate de cabo longo","category":"Ferragens e ferramentas","spec":"Alicate de cabo longo","price":315.0,"unit":"un.","code":"A definir","image":null,"page":45
}
, {
  "id":"p0759","name":"PINÇA DE TORRE","category":"Ferragens e ferramentas","spec":"PINÇA DE TORRE","price":100.0,"unit":"un.","code":"A definir","image":null,"page":45
}
, {
  "id":"p0760","name":"Alicate de bico longo","category":"Ferragens e ferramentas","spec":"Alicate de bico longo","price":80.0,"unit":"un.","code":"A definir","image":null,"page":45
}
, {
  "id":"p0761","name":"Alicate de bico longo","category":"Ferragens e ferramentas","spec":"Alicate de bico longo","price":95.0,"unit":"un.","code":"A definir","image":null,"page":45
}
, {
  "id":"p0762","name":"Alicate de corte","category":"Ferragens e ferramentas","spec":"Alicate de corte","price":95.0,"unit":"un.","code":"A definir","image":null,"page":45
}
, {
  "id":"p0763","name":"Alicate de corte","category":"Ferragens e ferramentas","spec":"Alicate de corte","price":80.0,"unit":"un.","code":"A definir","image":null,"page":45
}
, {
  "id":"p0764","name":"Alicate","category":"Ferragens e ferramentas","spec":"Alicate","price":95.0,"unit":"un.","code":"A definir","image":null,"page":45
}
, {
  "id":"p0765","name":"Alicate","category":"Ferragens e ferramentas","spec":"Alicate","price":80.0,"unit":"un.","code":"A definir","image":null,"page":45
}
, {
  "id":"p0766","name":"Chave Chave de rebarbadora","category":"Ferragens e ferramentas","spec":"Chave Chave de rebarbadora","price":75.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0767","name":"angular Chave inglesa amarela de","category":"Ferragens e ferramentas","spec":"angular Chave inglesa amarela de","price":45.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0768","name":"14 mm Chave inglesa amarela de","category":"Ferragens e ferramentas","spec":"14 mm Chave inglesa amarela de","price":45.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0769","name":"13 mm Chave inglesa amarela de","category":"Ferragens e ferramentas","spec":"13 mm Chave inglesa amarela de","price":45.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0770","name":"12 mm Chave inglesa amarela de","category":"Ferragens e ferramentas","spec":"12 mm Chave inglesa amarela de","price":45.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0771","name":"10 mm Chave inglesa tridente 9","category":"Ferragens e ferramentas","spec":"10 mm Chave inglesa tridente 9","price":45.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0772","name":"11-13 Chave inglesa tridente 8","category":"Ferragens e ferramentas","spec":"11-13 Chave inglesa tridente 8","price":45.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0773","name":"10-12 Chave Inglesa Trident 10","category":"Ferragens e ferramentas","spec":"10-12 Chave Inglesa Trident 10","price":45.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0774","name":"12-14 Chave inglesa com mola","category":"Ferragens e ferramentas","spec":"12-14 Chave inglesa com mola","price":110.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0775","name":"21mm Chave inglesa com mola","category":"Ferragens e ferramentas","spec":"21mm Chave inglesa com mola","price":100.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0776","name":"19mm Chave inglesa com mola","category":"Ferragens e ferramentas","spec":"19mm Chave inglesa com mola","price":90.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0777","name":"Chave de rodas cruzada","category":"Ferragens e ferramentas","spec":"Chave de rodas cruzada","price":235.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0778","name":"Dobradiça OXFDAD","category":"Ferragens e ferramentas","spec":"Dobradiça OXFDAD","price":100.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0779","name":"Dobradiça borboleta de","category":"Ferragens e ferramentas","spec":"Dobradiça borboleta de","price":60.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0780","name":"2,5\" 4 dobradiças de porta","category":"Ferragens e ferramentas","spec":"2,5\" 4 dobradiças de porta","price":25.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0781","name":"Dobradiça hidráulica de 77 g, braço reto, dobradiça","category":"Ferragens e ferramentas","spec":"Dobradiça hidráulica de 77 g, braço reto, dobradiça","price":20.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0782","name":"hidráulica Braço de suporte da","category":"Ferragens e ferramentas","spec":"hidráulica Braço de suporte da","price":15.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0783","name":"dobradiça Curva central da charneira","category":"Ferragens e ferramentas","spec":"dobradiça Curva central da charneira","price":15.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0784","name":"30 mm de largura, 0,7 mm de espessura, 1,5 m,","category":"Ferragens e ferramentas","spec":"30 mm de largura, 0,7 mm de espessura, 1,5 m,","price":125.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0785","name":"Arame 1.6MM","category":"Arames","spec":"Arame 1.6MM","price":80.0,"unit":"kg","code":"A definir","image":null,"page":46
}
, {
  "id":"p0786","name":"Arame farpado com ponta","category":"Arames","spec":"Arame farpado com ponta","price":550.0,"unit":"un.","code":"A definir","image":null,"page":46
}
, {
  "id":"p0787","name":"Chave inglesa com mola","category":"Ferragens e ferramentas","spec":"Chave inglesa com mola","price":85.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0788","name":"SPRAY PAINT 40#270g Tinta spray","category":"Ferragens e ferramentas","spec":"SPRAY PAINT 40#270g Tinta spray","price":70.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0789","name":"SPRAY PAINT 15#","category":"Ferragens e ferramentas","spec":"SPRAY PAINT 15#","price":70.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0790","name":"SPRAY PAINT 125#","category":"Ferragens e ferramentas","spec":"SPRAY PAINT 125#","price":70.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0791","name":"SPRAY PAINT 301#","category":"Ferragens e ferramentas","spec":"SPRAY PAINT 301#","price":70.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0792","name":"SPRAY PAINT 318#","category":"Ferragens e ferramentas","spec":"SPRAY PAINT 318#","price":95.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0793","name":"SPRAY PAINT 188#","category":"Ferragens e ferramentas","spec":"SPRAY PAINT 188#","price":95.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0794","name":"Arame farpado 50 kg x 800","category":"Arames","spec":"Arame farpado 50 kg x 800","price":5570.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0795","name":"m Arame farpado 40 kg x 800","category":"Arames","spec":"m Arame farpado 40 kg x 800","price":4740.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0796","name":"m Arame navalha 101 45 cm","category":"Arames","spec":"m Arame navalha 101 45 cm","price":690.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0797","name":"SPARY PAINT #6 ORANGE","category":"Ferragens e ferramentas","spec":"SPARY PAINT #6 ORANGE","price":75.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0798","name":"RED SPARY PAINT #672 GONGOCHENGRANGE RED SPARY PAINT #37 GRASS","category":"Ferragens e ferramentas","spec":"RED SPARY PAINT #672 GONGOCHENGRANGE RED SPARY PAINT #37 GRASS","price":75.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0799","name":"GREEN SPARY PAINT #349 TAXI","category":"Ferragens e ferramentas","spec":"GREEN SPARY PAINT #349 TAXI","price":75.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0800","name":"YELLOW SPARY PAINT #27 LEAF","category":"Ferragens e ferramentas","spec":"YELLOW SPARY PAINT #27 LEAF","price":75.0,"unit":"un.","code":"A definir","image":null,"page":47
}
, {
  "id":"p0801","name":"IBR IBR 0.5mm*0.85*3.6 MGIBR050","category":"Chapas IBR","spec":"IBR IBR 0.5mm*0.85*3.6 MGIBR050","price":895.0,"unit":"un.","code":"A definir","image":"images/produtos/ibr.jpg","page":48
}
, {
  "id":"p0802","name":"IBR 0.4mm*0.85*3.6 MGIBR040","category":"Chapas IBR","spec":"IBR 0.4mm*0.85*3.6 MGIBR040","price":770.0,"unit":"un.","code":"A definir","image":"images/produtos/ibr.jpg","page":48
}
, {
  "id":"p0803","name":"IBR 0.3mm*0.85*3.6 MGIBR030","category":"Chapas IBR","spec":"IBR 0.3mm*0.85*3.6 MGIBR030","price":540.0,"unit":"un.","code":"A definir","image":"images/produtos/ibr.jpg","page":48
}
, {
  "id":"p0804","name":"IBR 0.25mm*0.85*3.6 MGIBR025","category":"Chapas IBR","spec":"IBR 0.25mm*0.85*3.6 MGIBR025","price":465.0,"unit":"un.","code":"A definir","image":"images/produtos/ibr.jpg","page":48
}
, {
  "id":"p0805","name":"Chapa de aço Chapa de aço 1mm MGCHAPA10","category":"Ferros","spec":"Chapa de aço Chapa de aço 1mm MGCHAPA10","price":1600.0,"unit":"un.","code":"A definir","image":"images/produtos/chapa-aco.jpg","page":48
}
, {
  "id":"p0806","name":"Chapa de aço 1.2mm MGCHAPA12","category":"Ferros","spec":"Chapa de aço 1.2mm MGCHAPA12","price":1800.0,"unit":"un.","code":"A definir","image":"images/produtos/chapa-aco.jpg","page":48
}
, {
  "id":"p0807","name":"Cantoneira MGCANTONEIRA5030 Cantoneira 30*30-5.0mm","category":"Ferros","spec":"Cantoneira MGCANTONEIRA5030 Cantoneira 30*30-5.0mm","price":650.0,"unit":"un.","code":"A definir","image":"images/produtos/cantoneira.jpg","page":48
}
, {
  "id":"p0808","name":"MGCANTONEIRA3040 Cantoneira 40*40-3.0mm","category":"Ferros","spec":"MGCANTONEIRA3040 Cantoneira 40*40-3.0mm","price":510.0,"unit":"un.","code":"A definir","image":"images/produtos/cantoneira.jpg","page":48
}
, {
  "id":"p0809","name":"MGCANTONEIRA3030 Cantoneira 30*30-3.0mm","category":"Ferros","spec":"MGCANTONEIRA3030 Cantoneira 30*30-3.0mm","price":350.0,"unit":"un.","code":"A definir","image":"images/produtos/cantoneira.jpg","page":48
}
, {
  "id":"p0810","name":"MGCANTONEIRA3025 Cantoneira 25*25-3.0mm","category":"Ferros","spec":"MGCANTONEIRA3025 Cantoneira 25*25-3.0mm","price":310.0,"unit":"un.","code":"A definir","image":"images/produtos/cantoneira.jpg","page":48
}
, {
  "id":"p0811","name":"3.2# MGELECTRODE32","category":"Eletrodos","spec":"3.2# MGELECTRODE32","price":430.0,"unit":"un.","code":"A definir","image":"images/produtos/eletrodo.jpg","page":48
}
, {
  "id":"p0812","name":"Electrode 2.5# MGELECTRODE25","category":"Eletrodos","spec":"Electrode 2.5# MGELECTRODE25","price":220.0,"unit":"un.","code":"A definir","image":"images/produtos/eletrodo.jpg","page":48
}
, {
  "id":"p0813","name":"Varão 6# MGVARAO06","category":"Ferros","spec":"Varão 6# MGVARAO06","price":60.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":49
}
, {
  "id":"p0814","name":"Varão 8# MGVARAO08","category":"Ferros","spec":"Varão 8# MGVARAO08","price":125.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":49
}
, {
  "id":"p0815","name":"Varão 10# MGVARAO10","category":"Ferros","spec":"Varão 10# MGVARAO10","price":185.0,"unit":"un.","code":"A definir","image":"images/produtos/varao.jpg","page":49
}
, {
  "id":"p0816","name":"Tubos Tubos de 1.0mm*20*30 MG102030","category":"Tubos","spec":"Tubos Tubos de 1.0mm*20*30 MG102030","price":355.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":49
}
, {
  "id":"p0817","name":"Tubos de 1.0mm*40*40 MG104040","category":"Tubos","spec":"Tubos de 1.0mm*40*40 MG104040","price":440.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":49
}
, {
  "id":"p0818","name":"Tubos de 1.0mm*25*25 MG102525","category":"Tubos","spec":"Tubos de 1.0mm*25*25 MG102525","price":290.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":49
}
, {
  "id":"p0819","name":"Tubos de 1.0mm*30*30 MG103030","category":"Tubos","spec":"Tubos de 1.0mm*30*30 MG103030","price":355.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":49
}
, {
  "id":"p0820","name":"Tubos de 1.0mm*20*20 MG102020","category":"Tubos","spec":"Tubos de 1.0mm*20*20 MG102020","price":205.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":49
}
, {
  "id":"p0821","name":"Tubos de 1.0mm*20*40 MG102040","category":"Tubos","spec":"Tubos de 1.0mm*20*40 MG102040","price":355.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":49
}
, {
  "id":"p0822","name":"Tubos de 0.8mm*20*40 MG082040","category":"Tubos","spec":"Tubos de 0.8mm*20*40 MG082040","price":285.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":49
}
, {
  "id":"p0823","name":"Tubos de 0.8mm*30*30 MG083030","category":"Tubos","spec":"Tubos de 0.8mm*30*30 MG083030","price":270.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":49
}
, {
  "id":"p0824","name":"Tubos de 0.8mm*25*25 MG082525","category":"Tubos","spec":"Tubos de 0.8mm*25*25 MG082525","price":215.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":49
}
, {
  "id":"p0825","name":"Tubos de 0.8mm*20*20 MG082020","category":"Tubos","spec":"Tubos de 0.8mm*20*20 MG082020","price":185.0,"unit":"un.","code":"A definir","image":"images/produtos/tubos.jpg","page":49
}
, {
  "id":"p0826","name":"prastico Preco de 6# MGPRECO60","category":"Pregos","spec":"prastico Preco de 6# MGPRECO60","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":50
}
, {
  "id":"p0827","name":"Preco de 5# MGPRECO50","category":"Pregos","spec":"Preco de 5# MGPRECO50","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":50
}
, {
  "id":"p0828","name":"Preco de 4# MGPRECO40","category":"Pregos","spec":"Preco de 4# MGPRECO40","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":50
}
, {
  "id":"p0829","name":"Preco de 3.5# MGPRECO35","category":"Pregos","spec":"Preco de 3.5# MGPRECO35","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":50
}
, {
  "id":"p0830","name":"Preco de 3# MGPRECO30","category":"Pregos","spec":"Preco de 3# MGPRECO30","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":50
}
, {
  "id":"p0831","name":"Preco de 2# MGPRECO20","category":"Pregos","spec":"Preco de 2# MGPRECO20","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":50
}
, {
  "id":"p0832","name":"Preco de 1# MGPRECO10","category":"Pregos","spec":"Preco de 1# MGPRECO10","price":80.0,"unit":"kg","code":"A definir","image":"images/produtos/prego.jpg","page":50
}
, {
  "id":"p0833","name":"CIMENTO DUGONGO 42.5","category":"Cimentos","spec":"CIMENTO DUGONGO 42.5","price":510,"unit":"un.","code":"A definir","image":"images/produtos/cimento.jpg","page":1
}
, {
  "id":"p0834","name":"Varão 6#","category":"Ferros","spec":"Varão 6#","price":60,"unit":"un.","code":"MGVARAO06","image":"images/produtos/varao.jpg","page":1
}
, {
  "id":"p0835","name":"Electrode 3.2#","category":"Eletrodos","spec":"Electrode 3.2#","price":430,"unit":"un.","code":"MGELECTRODE32","image":"images/produtos/eletrodo.jpg","page":1
}
];

const CATEGORIES=['Todas','Chapas de Zinco','Chapas IBR','Pregos','Ferros','Tubos','Cimentos','Eletrodos','Arames','Materiais e acessórios','Ferramentas','Segurança e sinalização','Casa e hidráulica','Construção e manutenção','Ferragens e ferramentas','Outros produtos'];

const CART_KEY='mozsteel_cart',ORDER_KEY='mozsteel_order';

const PAGE_SIZE=24;

function normalizeCatalog() {

  const fixes= {

    p0003: {
      name:'Cantoneira 30*30-5.0mm',category:'Ferros',spec:'Cantoneira 30*30-5.0mm',image:'images/produtos/cantoneira.jpg'
    }
    ,

    p0007: {
      name:'Electrode 3.2#',category:'Eletrodos',spec:'Electrode 3.2#',image:'images/produtos/eletrodo.jpg'
    }
    ,

    p0018: {
      name:'CIMENTO DUGONGO 42.5',category:'Cimentos',spec:'CIMENTO DUGONGO 42.5',image:'images/produtos/cimento.jpg'
    }
    ,

    p0035: {
      name:'Pregos para telhado com plástico',spec:'Pregos para telhado com plástico',image:'images/produtos/prego.jpg'
    }
    ,

    p0036: {
      name:'Pregos para telhado sem plástico',spec:'Pregos para telhado sem plástico',image:'images/produtos/prego.jpg'
    }
    ,

    p0037: {
      name:'Pregos 6#',spec:'Pregos 6#',image:'images/produtos/prego.jpg'
    }
    ,

    p0038: {
      name:'Pregos 5#',spec:'Pregos 5#',image:'images/produtos/prego.jpg'
    }

  }
  ;

  PRODUCTS.forEach(p=> {

    if(fixes[p.id])Object.assign(p,fixes[p.id]);

    const t=(p.name+' '+p.spec).toLowerCase();

    if(/\bibr\b/.test(t))p.category='Chapas IBR';

    else if(/cimento|dugongo/.test(t))p.category='Cimentos';

    else if(/electrode|eletrodo/.test(t))p.category='Eletrodos';

    else if(/tubos?\b/.test(t))p.category='Tubos';

    else if(/varão|cantoneira|chapa de aço|chapa aço/.test(t))p.category='Ferros';

    else if(/arame/.test(t))p.category='Arames';

    else if(/prego/.test(t) || p.category==='Pregos')p.category='Pregos';

    if(p.category==='Materiais e acessórios' && /corda/.test(t))p.category='Construção e manutenção';

  }
  );

}

normalizeCatalog();

function money(v) {
  return new Intl.NumberFormat('pt-MZ', {
    style:'currency',currency:'MZN',maximumFractionDigits:0
  }
  ).format(Number(v)||0)
}

function getProduct(id) {
  return PRODUCTS.find(p=>p.id===id)
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)||'[]')
  }
  catch {
    return[]
  }
}

function saveCart(c) {
  localStorage.setItem(CART_KEY,JSON.stringify(c));
  updateCartCount()
}

function updateCartCount() {
  const n=getCart().reduce((s,i)=>s+(Number(i.qty)||0),0);
  document.querySelectorAll('[data-cart-count]').forEach(e=>e.textContent=n)
}

function toast(msg) {
  const t=document.querySelector('[data-toast]');
  if(!t)return;
  t.textContent=msg;
  t.classList.add('show');
  clearTimeout(window.__toast);
  window.__toast=setTimeout(()=>t.classList.remove('show'),2200)
}

function addToCart(id,qty=1) {
  const p=getProduct(id);
  if(!p)return;
  let c=getCart(),i=c.find(x=>x.id===id);
  i?i.qty+=qty:c.push( {
    id,qty
  }
  );
  saveCart(c);
  toast(`${p.name} adicionado ao carrinho ✓`)
}

function productImg(p) {
  return p.image?`<img src="${p.image}" alt="${p.name}" loading="lazy">`:`<div class="no-image"><span>MS</span><small>Imagem não disponível</small></div>`
}

function categoryMark(category) {
  const marks= {
    'Chapas de Zinco':'CZ','Chapas IBR':'IBR','Pregos':'PG','Ferros':'FE','Tubos':'TB','Cimentos':'CM','Eletrodos':'EL','Arames':'AR','Materiais e acessórios':'MA','Ferramentas':'FT','Segurança e sinalização':'SS','Casa e hidráulica':'CH','Construção e manutenção':'CO','Ferragens e ferramentas':'FH','Outros produtos':'OT'
  }
  ;
  return marks[category]||'MS'
}

function catalogCard(p) {
  const code=p.code&&p.code!=='A definir'?p.code:'REFERÊNCIA';
  return `<article class="product-card catalog-card"><div class="catalog-mark"><span>${categoryMark(p.category)}</span><small>${p.category}</small><b>${p.page?`PÁG. $ {
    p.page
  }
  `:'CATÁLOGO'}</b></div><div class="p-body"><small class="code">${code}</small><h3>${p.name}</h3><p>${p.spec}</p><div class="p-foot"><strong>${money(p.price)}</strong><span>/ ${p.unit}</span></div><div class="p-actions"><button class="btn btn-ghost" data-detail="${p.id}">Ver detalhes</button><button class="btn btn-primary" data-add="${p.id}">Adicionar</button></div></div></article>`
}

function card(p) {
  return `<article class="product-card home-product"><div class="p-media home-product-mark"><span class="home-mark">${categoryMark(p.category)}</span><span class="p-tag">${p.category}</span></div><div class="p-body"><small class="code">${p.code&&p.code!=='A definir'?p.code:'REFERÊNCIA'}</small><h3>${p.name}</h3><p>${p.spec}</p><div class="p-foot"><strong>${money(p.price)}</strong><span>/ ${p.unit}</span></div><div class="p-actions"><button class="btn btn-ghost" data-detail="${p.id}">Ver detalhes</button><button class="btn btn-primary" data-add="${p.id}">Adicionar</button></div></div></article>`
}

function detail(p) {
  const rel=PRODUCTS.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,4);
  return `<div class="detail-box catalog-detail"><div class="detail-img catalog-detail-mark"><span>${categoryMark(p.category)}</span><small>${p.category}</small><b>${p.page?`Página $ {
    p.page
  }
  `:'Catálogo'}</b></div><div><span class="eyebrow">${p.category}</span><h2>${p.name}</h2><p class="detail-spec">${p.spec}</p><div class="detail-price">${money(p.price)} <small>/ ${p.unit}</small></div><div class="qty"><button data-qminus>−</button><input id="detailQty" value="1" min="1" type="number"><button data-qplus>+</button></div><button class="btn btn-primary btn-wide" data-detail-add="${p.id}">Adicionar ao carrinho</button><p class="ref-note">Preço de referência do catálogo. Disponibilidade e entrega: confirmar com a empresa.</p></div></div><div class="related"><h3>Mais nesta categoria</h3><div class="mini-grid">${rel.map(catalogCard).join('')}</div></div>`
}

function openDetail(id) {
  const p=getProduct(id),m=document.querySelector('#modal');
  if(!p||!m)return;
  m.querySelector('[data-detail-content]').innerHTML=detail(p);
  m.classList.add('open');
  document.body.classList.add('lock')
}

function closeModal() {
  document.querySelector('#modal')?.classList.remove('open');
  document.body.classList.remove('lock')
}

function setup() {

  updateCartCount();

  document.querySelector('[data-menu]')?.addEventListener('click',()=>document.querySelector('.nav')?.classList.toggle('open'));

  document.addEventListener('click',e=> {

    const a=e.target.closest('[data-add]');
    if(a) {
      addToCart(a.dataset.add);
      return
    }

    const d=e.target.closest('[data-detail]');
    if(d) {
      openDetail(d.dataset.detail);
      return
    }

    if(e.target.closest('[data-close]')||e.target.id==='modal') {
      closeModal();
      return
    }

    const da=e.target.closest('[data-detail-add]');
    if(da) {
      addToCart(da.dataset.detailAdd,Math.max(1,Number(document.querySelector('#detailQty')?.value||1)));
      closeModal();
      return
    }

    if(e.target.closest('[data-qminus]')) {
      let q=document.querySelector('#detailQty');
      q.value=Math.max(1,Number(q.value)-1);
      return
    }

    if(e.target.closest('[data-qplus]')) {
      let q=document.querySelector('#detailQty');
      q.value=Number(q.value)+1;
      return
    }

    if(e.target.closest('[data-clear-cart]')) {
      localStorage.removeItem(CART_KEY);
      renderCart();
      return
    }

    const minus=e.target.closest('[data-minus]');
    if(minus) {
      changeQty(minus.dataset.minus,-1);
      return
    }

    const plus=e.target.closest('[data-plus]');
    if(plus) {
      changeQty(plus.dataset.plus,1);
      return
    }

    const rem=e.target.closest('[data-remove]');
    if(rem) {
      saveCart(getCart().filter(x=>x.id!==rem.dataset.remove));
      renderCart();
      return
    }

    if(e.target.closest('[data-checkout]')) {
      document.querySelector('#checkout')?.scrollIntoView( {
        behavior:'smooth'
      }
      );
      return
    }

  }
  );

  document.addEventListener('keydown',e=> {
    if(e.key==='Escape')closeModal()
  }
  );

}

function changeQty(id,d) {
  let c=getCart(),i=c.find(x=>x.id===id);
  if(!i)return;
  i.qty+=d;
  if(i.qty<1)c=c.filter(x=>x.id!==id);
  saveCart(c);
  renderCart()
}

function renderHome() {

  const f=document.querySelector('[data-featured]');

  if(f)f.innerHTML=PRODUCTS.filter(p=>['Chapas IBR','Ferros','Tubos','Cimentos','Eletrodos'].includes(p.category)).slice(0,8).map(card).join('');

  const cats=document.querySelector('[data-cats]');

  if(cats) {
    const icons=['▱','⌁','✦','╱','□','◈','✧','⌁'];
    cats.innerHTML=CATEGORIES.slice(1,9).map((c,i)=> {
      const n=PRODUCTS.filter(p=>p.category===c).length;
      return `<a class="cat-card ${n?'':'empty'}" href="${n?'catalogo.html?categoria='+encodeURIComponent(c):'#'}"><span class="cat-icon">${icons[i]}</span><b>${c}</b><small>${n?n+' produtos':'Sem produtos no documento'}</small><i>↗</i></a>`
    }
    ).join('')
  }

  document.querySelectorAll('[data-total-products]').forEach(e=>e.textContent=PRODUCTS.length);

}

function renderCatalog() {

  const box=document.querySelector('[data-catalog]');
  if(!box)return;

  const search=document.querySelector('[data-search]'),sort=document.querySelector('[data-sort]'),filters=document.querySelector('[data-filters]'),pagination=document.querySelector('[data-pagination]');

  let state= {
    cat:new URLSearchParams(location.search).get('categoria')||'Todas',q:'',sort:'rel',page:1
  }
  ;

  function categoryButton(c) {
    const n=c==='Todas'?PRODUCTS.length:PRODUCTS.filter(p=>p.category===c).length;
    return `<button class="filter ${state.cat===c?'active':''}" data-cat="${c}">${c}<small>${n}</small></button>`
  }

  function paintFilters() {
    filters.innerHTML=CATEGORIES.map(categoryButton).join('')
  }

  function filtered() {

    let list=PRODUCTS.filter(p=>(state.cat==='Todas'||p.category===state.cat)&&(!state.q||`${p.name} ${p.spec} ${p.category} ${p.code}`.toLowerCase().includes(state.q.toLowerCase())));

    if(state.sort==='az')list.sort((a,b)=>a.name.localeCompare(b.name,'pt'));

    else if(state.sort==='za')list.sort((a,b)=>b.name.localeCompare(a.name,'pt'));

    else if(state.sort==='low')list.sort((a,b)=>a.price-b.price);

    else if(state.sort==='high')list.sort((a,b)=>b.price-a.price);

    else {
      const order=CATEGORIES.indexOf(state.cat);
      list.sort((a,b)=> {
        if(state.cat!=='Todas')return a.name.localeCompare(b.name,'pt');
        const ca=CATEGORIES.indexOf(a.category),cb=CATEGORIES.indexOf(b.category);
        return (ca-cb)||a.name.localeCompare(b.name,'pt')
      }
      )
    }

    return list;

  }

  function paintPagination(total) {

    const pages=Math.ceil(total/PAGE_SIZE);
    if(pages<=1) {
      pagination.innerHTML='';
      return
    }

    let html=`<button class="page-btn arrow" data-page="${Math.max(1,state.page-1)}" ${state.page===1?'disabled':''}>←</button>`;

    const start=Math.max(1,state.page-2),end=Math.min(pages,start+4);

    for(let i=start;
    i<=end;
    i++)html+=`<button class="page-btn ${i===state.page?'active':''}" data-page="${i}">${i}</button>`;

    html+=`<button class="page-btn arrow" data-page="${Math.min(pages,state.page+1)}" ${state.page===pages?'disabled':''}>→</button>`;

    pagination.innerHTML=html;

  }

  function paint() {

    const list=filtered(),total=list.length;

    const start=(state.page-1)*PAGE_SIZE,shown=list.slice(start,start+PAGE_SIZE);

    box.innerHTML=shown.map(catalogCard).join('');

    document.querySelector('[data-count]').textContent=`${total} produto${total===1?'':'s'}`;

    document.querySelector('[data-result-state]').textContent=state.cat==='Todas'?'Todos os produtos':state.cat;

    document.querySelector('[data-empty]').hidden=!!total;

    document.querySelectorAll('[data-total-products]').forEach(e=>e.textContent=PRODUCTS.length);

    paintFilters();
    paintPagination(total);

  }

  filters.addEventListener('click',e=> {
    const b=e.target.closest('[data-cat]');
    if(b) {
      state.cat=b.dataset.cat;
      state.page=1;
      paint()
    }
  }
  );

  pagination.addEventListener('click',e=> {
    const b=e.target.closest('[data-page]');
    if(b&&!b.disabled) {
      state.page=Number(b.dataset.page);
      paint()
    }
  }
  );

  search.addEventListener('input',e=> {
    state.q=e.target.value.trim();
    state.page=1;
    paint()
  }
  );

  sort.addEventListener('change',e=> {
    state.sort=e.target.value;
    state.page=1;
    paint()
  }
  );

  document.querySelectorAll('[data-reset]').forEach(btn=>btn.addEventListener('click',()=> {
    state= {
      cat:'Todas',q:'',sort:'rel',page:1
    }
    ;
    search.value='';
    sort.value='rel';
    paint()
  }
  ));

  paint();

}

function renderCart() {

  const box=document.querySelector('[data-cart]');
  if(!box)return;
  let c=getCart();

  if(!c.length) {
    box.innerHTML=`<div class="empty" style="margin:55px 0"><div class="empty-icon">🛒</div><h2>Seu carrinho está vazio.</h2><p>Escolha os materiais no catálogo para montar o seu pedido.</p><a class="btn btn-primary" href="catalogo.html">Explorar catálogo</a></div>`;
    return
  }

  let subtotal=0;
  c.forEach(i=> {
    const p=getProduct(i.id);
    if(p)subtotal+=p.price*i.qty
  }
  );

  box.innerHTML=`<div class="cart-layout"><section><div class="cart-head"><b>${c.reduce((s,i)=>s+i.qty,0)} itens</b><button data-clear-cart>Limpar carrinho</button></div>${c.map(i=>{const p=getProduct(i.id);return `<article class="cart-row"><div class="cart-img">$ {
    productImg(p)
  }
  </div><div class="cart-info"><small>$ {
    p.category
  }
  </small><h3>$ {
    p.name
  }
  </h3><p>$ {
    p.spec
  }
  </p></div><div class="qty mini"><button data-minus="${p.id}">−</button><b>$ {
    i.qty
  }
  </b><button data-plus="${p.id}">+</button></div><strong>$ {
    money(p.price*i.qty)
  }
  </strong><button class="x" data-remove="${p.id}" aria-label="Remover">×</button></article>`}).join('')}</section><aside class="summary"><span class="eyebrow">RESUMO DO PEDIDO</span><h2>Total</h2><div><span>Subtotal</span><b>${money(subtotal)}</b></div><div><span>Entrega</span><span>A confirmar</span></div><hr><div class="total"><span>Total</span><strong>${money(subtotal)}</strong></div><button class="btn btn-primary btn-wide" data-checkout>Finalizar pedido</button><p>O valor de entrega e a disponibilidade serão confirmados pela empresa.</p></aside></div><section id="checkout" class="checkout"><div><span class="eyebrow">FINALIZAÇÃO</span><h2>Dados para o pedido</h2><p>Protótipo frontend: nenhum pagamento real é processado.</p></div><form id="checkoutForm"><div class="form-grid"><label>Nome completo<input required name="name"></label><label>Telefone<input required name="phone"></label><label>WhatsApp<input name="whatsapp"></label><label>Email<input type="email" name="email"></label><label>Cidade<input required name="city" value="" placeholder="Digite a cidade"></label><label>Bairro<input name="bairro"></label><label class="full">Endereço<input required name="address"></label><label class="full">Observações<textarea name="notes" rows="3"></textarea></label></div><h3>Método de pagamento</h3><div class="pay-grid"><label><input required type="radio" name="payment" value="M-Pesa"><span>M-Pesa<small>A configurar</small></span></label><label><input type="radio" name="payment" value="e-Mola"><span>e-Mola<small>A configurar</small></span></label><label><input type="radio" name="payment" value="BIM/BCI"><span>BIM / BCI<small>Pagamento por banco</small></span></label><label><input type="radio" name="payment" value="Pagamento na entrega"><span>Na entrega<small>A confirmar</small></span></label></div><button class="btn btn-primary btn-wide" type="submit">Confirmar pedido ✓</button></form></section>`;

  document.querySelector('#checkoutForm')?.addEventListener('submit',finishOrder)

}

function finishOrder(e) {
  e.preventDefault();
  const c=getCart();
  if(!c.length)return;
  const data=Object.fromEntries(new FormData(e.currentTarget));
  const total=c.reduce((s,i)=>s+getProduct(i.id).price*i.qty,0);
  const order= {
    id:'MS-'+new Date().getFullYear()+'-'+String(Date.now()).slice(-6),date:new Date().toLocaleString('pt-MZ'),state:'Recebido',customer:data,items:c,total
  }
  ;
  localStorage.setItem(ORDER_KEY,JSON.stringify(order));
  localStorage.removeItem(CART_KEY);
  updateCartCount();
  document.querySelector('[data-cart]').innerHTML=`<div class="success"><div class="check">✓</div><span class="eyebrow">PEDIDO RECEBIDO</span><h2>Pedido realizado com sucesso!</h2><p>Pedido <b>${order.id}</b> guardado neste protótipo.</p><div class="order-grid"><span>Cliente<strong>${data.name}</strong></span><span>Total<strong>${money(total)}</strong></span><span>Pagamento<strong>${data.payment}</strong></span><span>Estado<strong>Recebido</strong></span></div><div><a class="btn btn-primary" href="index.html">Voltar ao início</a> <a class="btn btn-ghost" href="catalogo.html">Continuar comprando</a></div></div>`
}

document.addEventListener('DOMContentLoaded',()=> {
  setup();
  renderHome();
  renderCatalog();
  renderCart()
}
);
