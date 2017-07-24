---
layout: page
title: O projektu
---

hJOP je softwarový balík umožňující řídit modelové kolejiště dle ZTP-JOP.

![Řídící terminál](/assets/img/hJOPpanel-klb.png)
*Terminál stanice Klobouky u Brna.*

hJOP je momentálně nasazena na modulových kolejištích [Klubu modelářů železnic
Brno I](http://kmz-brno.cz/), kde umožňuje provoz na výstavách a zároveň slouží
jako bázový software pro výuku řízení kolejových vozidel v Laboratoři řízení
kolejových vozidel MENDELU.

hJOP umožňuje plně konfigurovat layout kolejiště, vytvoření reliéfů pro řízení
konkrétního kolejiště je v podstatě otázka *kreslení v malování* a znalostí
technologie zabezpečovacích zařízení skutečné železnice.

hJOP je vyvíjena jako opensource projekt pod Apache License v2.0. Kdokoliv si
může stáhnout zdrojové kódy či spustitelné soubory na
[githubu](https://github.com/kmzbrnoI/).

## Základní vlastnosti

 * Grafické rozhraní na bázi jednotného obslužného pracoviště (JOP).
 * Platforma OS Windows.
 * Editor technologických bloků, editor reliéfů stanic.
 * Kolejové úseky, výhybky, infračidla, SCom i mechanická návěstidla, tratě,
   zámky, přejezdy, rozpojovače, výkolejky, dvojitá kolejová spojka.
 * Jízdní cesty, plně konfigurovatelná závěrová tabulka.
 * Přenos čísla vlaku.
 * Podpora pro snímání stavu zesilovačů na kolejišti.
 * Možnost spustit kolejiště v *automatickém režimu*, kdy kolejiště na klik
   odjezdí předem připravený grafikon. Grafikon lze editovat ve vlastním
   skriptovacím jazyce.
 * Řízení v režimu server–klienti.
 * Podpora ručních ovladačů (např. Roco Multimaus).
 * Podpora softwarových ovladačů.
 * Podpora ovladačů na mobilních zařízeních.
 * Automatické řízení jízdy vlaků, možnost převzít řízení ovladačem.
 * Uživatelské účty, autentizace dispečerů.
 * Automatické spouštění zvuků (houkání před pískáčky, trubka vlakvedoucího
   v zastávce).
 * Poloautomatické staniční hlášení.

## Požadavky

 * Příslušenství řízené pomocí [MTB-BUS](http://mtb.kmz-brno.cz/).
 * Jízda řízená DCC centrálou s rozhraním XpressNET. LI pro připojení k počítači.
 * Kolejiště rozdělené na kolejové obvody jako na skutečné železnici, hlídání
   poloh řízených výhybek.
 * Kalibrovaná hnací vozidla ([Co to znamená?](http://www.kmz-brno.cz/rychlostni-tabulky-pro-provoz-vozidel-na-klubovnich-kolejistich/)).

## Plány na rozšíření

 * Možnost řídit příslušenství DCC centrálou.

