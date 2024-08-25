---
layout: post
title: hJOPeditor v2.14
tags: upgrade
lang: cz
---

Byla vydána nová verze hJOPeditoru, která přináší více větších změn.
Vydání je zatím formou předběžného vydání za účelem testování nové verze komunitou.

<a class="btn" href="https://github.com/kmzbrnoI/hJOPeditor/releases/tag/v2.14.0">hJOPeditor v2.14</a>

* Bpnl režim: skupinový posun/mazání posouvá/maže všechny objekty: nejenom
symboly, ale i konce jízdních cest, místa pro čísla kolejí, místa pro čísla
souprav, texty a oddělovače.
* Zrušení limitu na velikost výběru skupinového přesunu a mazání.
* Vytvořen nový režim *Oblasti řízení*: v tomto režimu je možné vizuálně
zkontrolovat přiřazení bloků do oblastí řízení a skupinově přiřadit bloky do
oblastí řízení. Přiřazení se provádí vybráním bloků v obdélníku, přičemž bloky
se přiřadí oblasti řízení, jejíž domeček je také v obdélníků. Původní
přiřazování oblastí řízení v režimu *Bloky* zůstává zachováno.
* Nová funkce **opnl import**: pokud upravíte bpnl panel a vygenerujete opnl,
museli jste doposud opět přiřadit všechny bloky. Nyní můžete po přechodu bpnl
-> opnl zvolit možnost "Soubor -> Importovat vazby z předchozího opnl", která
do nového opnl importuje vazby na bloky z předchozího souboru. Importují se
vazby, jejíž symboly se nezměnily. Změněné symboly je potřeba následně přiřadit
manuálně.
* Bpnl soubor: umožnit více než 256 konců jízdních cest, míst pro čísla
souprav, míst pro čísla kolejí a oddělovačů - limit 65536. Používá se nový
formát bpnl v4.1.
