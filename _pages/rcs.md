---
layout: page
title: Systém RCS
permalink: /rcs
order: 40
---

hJOP umožňuje řídit příslušenství několika různými systémy. Všechny sdružuje
pod obecné jméno „RCS -- Railroad Control System“. Níže jsou některé konkrétní
knihovny, které lze použít spolu s hJOPserverem.

hJOPserver od verze 5 je distribuován včetně těchto knihoven, takže knihovny
není nutné samostatně stahovat. Knihovny jsou dodávány jako dll soubory.

## MTB knihovna

MTB knihovna umožňuje komunikaci s [moduly MTB](https://mtb.kmz-brno.cz/).
Knihovna je dostupná [na githubu](https://github.com/kmzbrnoI/mtb-lib), kde
je [podrobná dokumentace](https://github.com/kmzbrnoI/mtb-lib/wiki)
jejího API. Toto API je společné pro všechny RCS knihovny.

<a class="btn" href="https://github.com/kmzbrnoI/mtb-lib/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/mtb-lib">Zdrojové kódy</a>

Tato knihovna může sloužit komukoliv, kdo má zájem snadno a rychle
komunikovat s [MTB](http://mtb.kmz-brno.cz/) -- například studentům
v [Laboratoři řízení kolejových vozidel MENDELU](http://lrkv.pef.mendelu.cz/).

## Simulator knihovna

[Simulační knihovna](https://github.com/kmzbrnoI/mtb-simulator-lib) poskytuje
alternativu ke knihovně MTB. Implementuje úplně stejné API, takže lze systém
MTB simulovat bez kolejiště.

<a class="btn" href="https://github.com/kmzbrnoI/mtb-simulator-lib/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/mtb-simulator-lib">Zdrojové kódy</a>

## XpressNET knihovna

[XpressNET knihovna](https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt) umožňuje
připojení ke sběrnici XpressNET, skrze kterou lze řídit kolejiště a získávat
informace z něj. Pro připojení ke kolejišti je nutné využít dvě LI -- jedno
se připojuje přímo k hJOPserveru (pro řízení jízdy) a druhé k této knihovně
(pro řízení příslušenství). Je možné použít buď dvě centrály – každou se svým LI
 – nebo jednu centrálu s dvěma LI.

Knihovna používá dekodéry příslušenství jako vstupy i výstupy.

Knihovna je v beta verzi – je dostupná k veřejnému testování. Probíhá testování
a ladění knihovny na různých modulech a centrálách. Budeme rádi za otestování
a [nahlášení chyb](https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt/issues).

<a class="btn" href="https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt">Zdrojové kódy</a>
<a class="btn" href="https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt/wiki">Návod</a>

---

## RCS – Railroad Control System Interface

RCS je implementace rozhraní umožňující načíst dll knihovnu přímo z vašeho
oblíbeného programovacího jazyka a využívat její funkcionality prostým voláním
metod třídy.

Momentálně existuje [pro jazyk Object Pascal](https://github.com/kmzbrnoI/rcs-delphi).

## Vzorová RCS knihovna v jazyce C

Pokud si chcete napsat vlastní RCS knihovnu, můžete využít
[šablonu pro jazyk C](https://github.com/kmzbrnoI/rcs-lib).
