---
layout: page
title: hJOPserver
permalink: /hJOPserver
order: 10
lang: cz
---

hJOPserver je centrální mozek celého řízení kolejiště. Umožňuje editovat
technologické bloky, připojit se ke kolejišti a řídit jej. Umožňuje připojení
[obslužných pracovišť](/hJOPpanel) skrze počítačovou síť a komunikaci
jednoduchým
[protokolem](https://github.com/kmzbrnoI/hJOPserver/wiki/panelServer).

<a class="btn" href="https://github.com/kmzbrnoI/hJOPserver/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/hJOPserver">Zdrojové kódy</a>

hJOPserver udržuje databázi bloků, závěrovou tabulku, databázi hnacích vozidel,
souprav, stanic, zesilovačů a uživatelů.

hJOPserver se připojuje ke kolejišti dvěma nezávislými systémy (USB kabely):

 1. [Systém pro řízení příslušenství (RCS)](/rcs)
 2. [Systém pro řízení jízdy lokomotiv](/trakce)

Alternativně lze oba systémy připojit k jedné DCC centrále za využít dvou LI
připojených k jedné DCC centrále.

![Screenshot stavu technologie](assets/img/hJOPserver-tech.png)
*Stav technologie.*

![Screenshot seznamu bloků](assets/img/hJOPserver-blk.png)
*Databáze bloků.*

![Screenshot databáze jízdních cest](assets/img/hJOPserver-jc.png)
*Databáze jízdních cest.*

![Screenshot databáze hnacích vozidel](assets/img/hJOPserver-hv.png)
*Databáze hnacích vozidel.*

Zdrojové kódy jsou k dispozici na [githubu](https://github.com/kmzbrnoI/hJOPserver),
v [Releases](https://github.com/kmzbrnoI/hJOPserver/releases) jsou k dispozici
zkompilované servery různých verzí. Projekt taky obsahuje
[Wiki](https://github.com/kmzbrnoI/hJOPserver/wiki), kde jsou popsaná dostupná
API serveru.
