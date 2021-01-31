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

{% include figure.html url="/assets/img/hJOPserver-tech.png" caption="Stav technologie" %}
{% include figure.html url="/assets/img/hJOPserver-blk.png" caption="Databáze bloků" %}
{% include figure.html url="/assets/img/hJOPserver-jc.png" caption="Databáze jízdních cest" %}
{% include figure.html url="/assets/img/hJOPserver-hv.png" caption="Databáze hnacích vozidel." %}

Zdrojové kódy jsou k dispozici na [githubu](https://github.com/kmzbrnoI/hJOPserver),
v [Releases](https://github.com/kmzbrnoI/hJOPserver/releases) jsou k dispozici
zkompilované servery různých verzí. Projekt taky obsahuje
[Wiki](https://github.com/kmzbrnoI/hJOPserver/wiki), kde jsou popsaná dostupná
API serveru.
