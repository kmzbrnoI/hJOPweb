---
layout: page
title: MTB knihovna
permalink: /mtb-lib
order: 40
---

Pro správnou funkčnost hJOP byla vyvinuta knihovna komunikující s
[MTB-USB](http://mtb.kmz-brno.cz/modul_usb.htm) zařízení a knihovna, která umí
simulovat skutečné [MTB](http://mtb.kmz-brno.cz/) pro účely vývoje.

Tyto knihovny zároveň mohou sloužit komukoliv, kdo má zájem snadno a rychle
komunikovat s [MTB](http://mtb.kmz-brno.cz/) -- například pro studenty v
Laboratoři řízení kolejových vozidel MENDELU.

Knihovny jsou dodávány jako dll soubory.

## MTB knihovna

MTB knihovna je dostupná [na githubu](https://github.com/kmzbrnoI/mtb-lib), kde
je [velmi vyčerpávající dokumentace](https://github.com/kmzbrnoI/mtb-lib/wiki)
jejího API.

## Simulator knihovna

[Simulační knihovna](https://github.com/kmzbrnoI/mtb-simulator-lib) poskytuje
alternativu ke knihovně `MTB.dll`. Implementuje úplně stejné API, takže lze
systém MTB simulovat prostou výměnou dll souborů.

## RCS – Railroad Control System Interface

RCS je implementace rozhraní umožňující načíst dll knihovnu přímo z vašeho
oblíbeného programovacího jazyka a využívat její funkcionality prostým voláním
metod třídy.

Momentálně existuje [pro jazyk Object Pascal](https://github.com/kmzbrnoI/rcs-delphi).

