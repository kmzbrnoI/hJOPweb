---
layout: page
title: O projektu
permalink: /index
lang: cz
---

hJOP je otevřený softwarový balík umožňující řídit modelové kolejiště dle ZTP-JOP.

![Panel stanice](/assets/img/hJOPpanel-le-sy.png)
*Příklad panelu stanic v hJOP.*

hJOP je vyvíjena [Klubem modelářů železnic Brno I](http://kmz-brno.cz/), kde je
nasazena na modulových i pevných kolejištích. Je to hlavní software, kterým se
řídí provoz na kolejištích. hJOP je nasazena také v [Laboratoři řízení
kolejových vozidel MENDELU](http://lrkv.pef.mendelu.cz/), která spolupracuje na
jeho vývoji a testování.

hJOP umožňuje vytvořit libovolný layout kolejiště, vytvoření reliéfů je otázka
*nakreslení reliéfu* a znalostí technologie zabezpečovacích zařízení skutečné
železnice.

hJOP je vyvíjena jako *opensource projekt* pod *Apache License v2.0*. Kdokoliv si
může stáhnout [zdrojové kódy](https://github.com/kmzbrnoI/) či [spustitelné
soubory](vyzkouset). hJOP nemá žádné licence, všechen software je v plné
verzi zdarma.

<div style="text-align:center;">
<a class="btn" style="width:250px;" href="vyzkouset">Chci si vyzkoušet hJOP</a>
</div>

## Základní vlastnosti

 * Grafické rozhraní na bázi jednotného obslužného pracoviště (JOP).
 * Platforma OS Windows.
 * Editor technologických bloků, [editor reliéfů stanic](/hJOPeditor).
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
 * Podpora [softwarových ovladačů](/Jerry).
 * Podpora [ovladačů na mobilních zařízeních](/androidDriver).
 * Automatické řízení jízdy vlaků, možnost převzít řízení ovladačem.
 * Uživatelské účty, autentizace dispečerů.
 * Automatické spouštění zvuků (houkání před pískáčky, trubka vlakvedoucího
   v zastávce).
 * [Poloautomatické staniční hlášení](https://www.kmz-brno.cz/stanicni-hlaseni/).
 * Možnost zadat na jednu staniční kolej více souprav.

## Požadavky

 * Příslušenství řízené pomocí [MTB-BUS](http://mtb.kmz-brno.cz/) nebo XpressNET
   – RS, S88 (*novinka srpen 2019*).
   - [Řízení příslušenství přes XpressNET](/rcs) je dostupné v beta verzi.
 * Jízda řízená DCC centrálou s rozhraním XpressNET. LI pro připojení k počítači.
 * Kolejiště rozdělené na kolejové obvody jako na skutečné železnici, hlídání
   poloh řízených výhybek.
 * Kalibrovaná hnací vozidla ([Co to znamená?](http://www.kmz-brno.cz/rychlostni-tabulky-pro-provoz-vozidel-na-klubovnich-kolejistich/)).

<div style="text-align:center;">
<a class="btn" style="width:200px; margin: 10px;" href="struct">Chci vědět více</a>
<a class="btn" style="width:200px; margin: 10px;" href="contact">Kdo za tím stojí</a>
</div>
