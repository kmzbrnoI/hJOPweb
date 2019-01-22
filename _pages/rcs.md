---
layout: page
title: Systém RCS
permalink: /rcs
order: 40
---

hJOP umožňuje řídit příslušenství několika různými systémy. Všechny sdružuje
pod obecné jméno „RCS -- Railroad Control System“. Níže jsou některé konkrétní
knihovny, které lze použít spolu s hJOPserverem.

Knihovny jsou dodávány jako dll soubory.

V současné době probíhají práce na vývoji knihovny pro XpressNET, která umožní
řízení příslušenství přes XpressNET -- za využití sběrnic RS nebo S88.

## MTB knihovna

MTB knihovna je dostupná [na githubu](https://github.com/kmzbrnoI/mtb-lib), kde
je [velmi vyčerpávající dokumentace](https://github.com/kmzbrnoI/mtb-lib/wiki)
jejího API. Toto API je společné pro všechny RCS knihovny.

Tato knihovna může sloužit komukoliv, kdo má zájem snadno a rychle
komunikovat s [MTB](http://mtb.kmz-brno.cz/) -- například studentům
v [Laboratoři řízení kolejových vozidel MENDELU](http://lrkv.pef.mendelu.cz/).

## Simulator knihovna

[Simulační knihovna](https://github.com/kmzbrnoI/mtb-simulator-lib) poskytuje
alternativu ke knihovně `MTB.dll`. Implementuje úplně stejné API, takže lze
systém MTB simulovat prostou výměnou dll souborů.

## XpressNET knihovna

[XpressNET knihovna](https://github.com/kmzbrnoI/rcs-lib-XpressNET) umožňuje
připojení ke sběrnici XpressNET, skrze kterou lze řídit kolejiště a získávat
informace z něj. Pro připojení ke kolejišti je nutné využít dvě LI -- jedno
se připojuje přímo k hJOPserveru a druhé k této knihovně.

Knihovna zatím není hotová, momentálně je ve vývoji.

## RCS – Railroad Control System Interface

RCS je implementace rozhraní umožňující načíst dll knihovnu přímo z vašeho
oblíbeného programovacího jazyka a využívat její funkcionality prostým voláním
metod třídy.

Momentálně existuje [pro jazyk Object Pascal](https://github.com/kmzbrnoI/rcs-delphi).

## Vzorová RCS knihovna v jazyce C

Pokud si chcete napsat vlastní RCS knihovnu, můžete využít
[šablonu pro jazyk C](https://github.com/kmzbrnoI/rcs-lib). Na této šabloně
staví XpressNETí knihovna.

