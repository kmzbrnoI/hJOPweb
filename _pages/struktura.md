---
layout: page
title: Struktura projektu
permalink: /struct
order: 2
---

Softwarový balík hJOP je složen z několika základních programů a několika
programů rozšiřujících. Všechny tyto programy pracují v součinnosti tak, aby
umožnily editaci kolejiště na míru a -- a to především -- pohodlné řízení.

## Nutný SW

 * [**hJOPeditor**](/hJOPeditor): Editor sloužící k vytváření reliéfu stanic.
 * [**hJOPmerger**](/hJOPmerger): Maličký program, který vezme definice
   definice jednotlivých stanic z editoru a spojí je do konfiguračního souboru
   pro server.
 * [**hJOPserver**](/hJOPserver): Hlavní logický člen celého projektu. Řeší
   technologii provozu. Umožňuje konfigurovat technologické bloky kolejiště,
   načítat definiční soubory reliéfů z *hJOPmerger*u a provozovat kolejiště.
   Pro provoz kolejiště je typicky zapnutý na samostatně stojícím počítači,
   dispečeři s ním neinteragují. Jedná se o hlavní mozek celého provozu.
 * [**hJOPpanel**](/hJOPpanel): Panel umožňující zobrazovat reliéfy vytvořené v
   *hJOPeditor*u. Panel se připojuje pomocí počítačové sítě k běžícímu
   *hJOPserveru* a umožňuje získat a změnit stav kolejiště. Jedná se o termínál,
   který je běžně ovládán dispečery. V síti je obvykle spuštěno několik možných
   panelů -- například každý u konkrétní stanice --, které se připojují k
   jednomu serveru.


## Rozšiřující SW

 * [**Jerry**](/Jerry): Jednoduchý program umožňující řídit jízdu vlaku z role
   strojvedoucího.
 * [**uLI-master**](/uLI-master): Hardware umožňující připojení Rocomaus k
   obslužným pracovištím, umožňuje řídit jízdu vlaku hardwarovým ovladačem.
 * [**uLI-daemon**](/uLI-daemon): Software umožňující spřažení *uLI-master*
   se zbytkem technologie kolejiště. Je nutný pro funkci *uLI-master*.
 * [**Train Manager**](/TrainManager): Mobilní aplikace pro Android sloužící k
   řízení jízdy souprav.

