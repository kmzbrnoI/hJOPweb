---
layout: page
title: Systém RCS
permalink: /rcs
order: 40
lang: cz
---

hJOP umožňuje řídit příslušenství různými systémy. Všechny sdružuje pod obecné
jméno „RCS – Railroad Control System“. Níže je uveden seznam podporovaných
systémů.

hJOPserver od verze 5 je distribuován včetně knihoven pro podporu všech systémů
níže, takže knihovny není nutné samostatně stahovat. Knihovny jsou dodávány
jako dll soubory.

## XpressNET {#xpressnet}

[XpressNET knihovna](https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt) umožňuje
připojení ke sběrnici XpressNET, skrze kterou lze řídit kolejiště a získávat
informace z něj. Pro připojení ke kolejišti je nutné využít dvě LI -- jedno
se připojuje přímo k hJOPserveru (pro řízení jízdy) a druhé k této knihovně
(pro řízení příslušenství). Je možné použít buď dvě centrály – každou se svým LI
 – nebo jednu centrálu s dvěma LI.

Knihovna používá dekodéry příslušenství jako vstupy i výstupy.

<a class="btn" href="https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt">Zdrojové kódy</a>
<a class="btn" href="https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt/wiki">Návod</a>

## MTB {#mtb}

MTB knihovna umožňuje komunikaci s [moduly MTB](https://mtb.kmz-brno.cz/).
Knihovna je dostupná [na githubu](https://github.com/kmzbrnoI/mtb-lib), kde
je [podrobná dokumentace](https://github.com/kmzbrnoI/mtb-lib/wiki)
jejího API. Toto API je společné pro všechny RCS knihovny.

<a class="btn" href="https://github.com/kmzbrnoI/mtb-lib/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/mtb-lib">Zdrojové kódy</a>

Tato knihovna může sloužit komukoliv, kdo má zájem snadno a rychle
komunikovat s [MTB](http://mtb.kmz-brno.cz/) -- například studentům
v [Laboratoři řízení kolejových vozidel MENDELU](http://lrkv.pef.mendelu.cz/).

## Simulace {#ximulator}

[Simulační knihovna](https://github.com/kmzbrnoI/mtb-simulator-lib) se
nepřipojuje ke kolejišti, ale hardware kolejiště emuluje. Hodí se pro testování
hJOP bez připojeného kolejiště.

<a class="btn" href="https://github.com/kmzbrnoI/mtb-simulator-lib/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/mtb-simulator-lib">Zdrojové kódy</a>

---

## RCS – Railroad Control System Interface

RCS je implementace rozhraní umožňující načíst dll knihovnu přímo z vašeho
oblíbeného programovacího jazyka a využívat její funkcionality prostým voláním
metod třídy.

Momentálně existuje [pro jazyk Object Pascal](https://github.com/kmzbrnoI/rcs-delphi).

## Vzorová RCS knihovna v jazyce C

Pokud si chcete napsat vlastní RCS knihovnu, můžete využít
[šablonu pro jazyk C](https://github.com/kmzbrnoI/rcs-lib).
