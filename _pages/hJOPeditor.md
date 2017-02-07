---
layout: page
title: hJOPeditor
permalink: /hJOPeditor
order: 11
---

hJOPeditor je software sloužící k editaci reliéfů. Je důležité pochopit, že
editor needituje celý projekt kolejiště, ale vždy jen jednu stanici. Před
započatím samotné editace je nutné v serveru vytvořit technologické bloky.
V editoru se pak jen technologické bloky přiřadí konkrétním segmentům v reliéfu.

Editace reliéfu probíhá v několika fázích.

## Bitmapa

![](/assets/img/hJOPeditor-bmp)

V této fázi si editor vytvoří obraz kolejiště jako bitmapový obrázek. Blokům
nepřiřazuje žádnou logiku. Naedituje koleje, výhybky, návěstidla, přejezdy a
všechny další symboly, které se v reliéfu mají objevit. Soubor je možno ukázat
do binárního souboru s příponou `bpnl`.

Editor se následně přepne do módu oddělovačů, kde naedituje dělení mezi úseky.
Z módu oddělovačů se lze přepnout vždy zpět do módu bitmapy.

## Vektor

Po dokončení editaci bitmapy editor celý reliéf *zvektorizuje* přepnutím do
módu editace bloků. Jednotlivé segmenty se spojí v logické bloky -- například
50 symbolů tvořící kolej 1 se spojí do jednoho bloku reprezentující kolej 1.

![](/assets/img/hJOPeditor-obj)

Editor každému bloku přiřadí technologický blok a soubor uloží v textovém formátu
s příponou `opln`. Soubor `opnl` bude později načten panelem.

![](/assets/img/hJOPeditor-prirazeni)

Pozor: z tohoto módu není v současnosti cesty zpět do módu bitmapy. Reliéf
tedy nelze změnit.

V poslední fázi se editor přepne do módu editace kořenů bloků, kde každému
úseku obsahujícím výhybku naedituje kořen barvení.

Výsledný soubor `opnl` se předhodí panelu, který jej zobrazí.

