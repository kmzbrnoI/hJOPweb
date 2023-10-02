---
layout: page
title: O projektu
permalink: /index
lang: cz
---

hJOP je otevřený softwarový balík umožňující řídit modelové kolejiště dle ZTP-JOP.

{% include figure.html url="/assets/img/hJOPpanel-le-sy.png" caption="Příklad panelu stanic v hJOP." %}

hJOP je vyvíjena [Klubem modelářů železnic Brno I](https://kmz-brno.cz/), kde je
nasazena na modulových i pevných kolejištích. Je to hlavní software, kterým se
řídí provoz na kolejištích. hJOP je nasazena také v [Laboratoři řízení
kolejových vozidel MENDELU](https://lrkv.pef.mendelu.cz/), která spolupracuje na
jeho vývoji a testování, a na několika dalších soukromých kolejištích.

hJOP umožňuje vytvořit libovolný layout kolejiště, vytvoření reliéfů je otázka
*nakreslení reliéfu* a znalostí technologie zabezpečovacích zařízení skutečné
železnice.

hJOP je vyvíjena jako *opensource projekt* pod *Apache License v2.0*. Kdokoliv si
může stáhnout [zdrojové kódy](https://github.com/kmzbrnoI/) či [spustitelné
soubory](vyzkouset). hJOP není nijak zpoplatněna, všechen software je v plné
verzi ke stažení zdarma.

Cílem hJOP je nabídnout bezpečné a pohodlné řízení modelového kolejiště podobné
řízení skutečné české železnice. A to primárně ve výše zmíněném klubu,
sekundárně i kdekoliv jinde. To se odráží například v tom, že hJOP podporuje
i běžně dostupný komerční hardware. hJOP je možné nasadit i na domácí
kolejiště.

<a class="btn btn-center" style="width:250px;" href="vyzkouset">Chci si vyzkoušet hJOP</a>

## Základní vlastnosti {#basicProperties}

 * Grafické rozhraní na bázi jednotného obslužného pracoviště (JOP).
 * Platforma OS Windows.
 * Editor technologických bloků, [editor reliéfů stanic](/hJOPeditor).
 * Kolejové úseky, výhybky, výkolejky, infračidla, S-COM i mechanická návěstidla,
   skupinová návěstidla, tratě, zámky, přejezdy, pomocná stavědla, rozpojovače,
   dvojitá kolejová spojka.
 * Jízdní cesty, plně konfigurovatelná závěrová tabulka.
 * Přenos čísla vlaku.
 * Možnost spustit kolejiště v *automatickém režimu*, kdy kolejiště na klik
   odjezdí předem připravený grafikon.
 * Řízení v režimu server–klienti.
 * Podpora ručních ovladačů (např. Roco Multimaus).
 * Podpora [softwarových ovladačů](/Jerry).
 * Podpora [ovladačů na mobilních zařízeních](/hJOPdriver).
 * Automatické řízení jízdy vlaků, možnost převzít řízení ovladačem.
 * Uživatelské účty, autentizace dispečerů.
 * Automatické spouštění zvuků (houkání před pískáčky, trubka vlakvedoucího
   v zastávce, ...).
 * [Poloautomatické staniční hlášení](https://www.kmz-brno.cz/stanicni-hlaseni/).
 * Možnost zadat na jednu staniční kolej více souprav.
 * [JSON API pro komunikaci s externími nadstavbovými
   aplikacemi](https://github.com/kmzbrnoI/hJOPserver/wiki/ptServer), možnost
   tvorby vlastních automatizačních skriptů.

## Požadavky {#requirements}

 * Příslušenství řízené pomocí [MTBbus](http://mtb.kmz-brno.cz/) nebo [XpressNET](/rcs#xpressnet).
 * Jízda řízená DCC centrálou s rozhraním XpressNET. LI pro připojení k počítači.
 * Kolejiště rozdělené na kolejové obvody jako na skutečné železnici.
 * Kalibrovaná hnací vozidla ([Co to znamená?](http://www.kmz-brno.cz/rychlostni-tabulky-pro-provoz-vozidel-na-klubovnich-kolejistich/)).
 * Je doporučeno snímat polohy řízených výhybek, ale není to nutné.

<div style="text-align:center;">
<a class="btn" style="width:200px; margin: 10px;" href="struct">Chci vědět více</a>
<a class="btn" style="width:200px; margin: 10px;" href="contact">Kdo za tím stojí</a>
</div>
