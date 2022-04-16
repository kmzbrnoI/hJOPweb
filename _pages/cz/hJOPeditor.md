---
layout: page
title: hJOPeditor
permalink: /hJOPeditor
order: 11
lang: cz
---

hJOPeditor je software sloužící k editaci reliéfů. Editor needituje celý
projekt kolejiště, ale vždy jen jeden reliéf. Před započetím samotné editace
je nutné v hJOPserveru vytvořit technologické bloky. V editoru se pak jen
technologické bloky přiřadí konkrétním grafickým blokům v reliéfu.

<a class="btn" href="https://github.com/kmzbrnoI/hJOPeditor/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/hJOPeditor">Zdrojové kódy</a>

Editace reliéfu probíhá ve dvou fázích:

## Bitmapa

{% include figure.html url="/assets/img/hJOPeditor-bmp.png" caption="Editační okno v módu bitmapy." %}

V této fázi si editor vytvoří obraz kolejiště v podstatě jako bitmapový
obrázek. Blokům nepřiřazuje žádnou logiku. Na reliéf vkládá koleje, výhybky,
návěstidla, přejezdy a všechny další symboly, které se v reliéfu mají objevit.
Soubor je možno uložit do binárního souboru s příponou `bpnl`.

Editor se následně přepne do módu oddělovačů, kde vloží dělení mezi úseky.
Z módu oddělovačů se lze přepnout vždy zpět do módu bitmapy.

## Vektor

Po dokončení editace bitmapy editor celý reliéf *zvektorizuje* přepnutím do
módu editace bloků. Jednotlivé segmenty se spojí v logické bloky -- například
50 symbolů tvořící kolej 1 se spojí do jednoho bloku reprezentující kolej 1.

{% include figure.html url="/assets/img/hJOPeditor-vektor.png" caption="Editační okno v módu bloků." %}

Editor každému bloku přiřadí technologický blok a soubor uloží v textovém formátu
s příponou `opnl`. Soubor `opnl` bude později načten panelem.

{% include figure.html url="/assets/img/hJOPeditor-blk.png" caption="Přiřazování technologických bloků grafickým blokům." %}

Pozor: z tohoto módu není v současnosti cesty zpět do módu bitmapy. Reliéf
tedy nelze změnit.

V poslední fázi se editor přepne do módu editace kořenů bloků, kde každému
úseku obsahujícím výhybku přiřadí kořen barvení.

Výsledný soubor `opnl` se předhodí panelu, který jej zobrazí.

