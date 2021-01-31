---
layout: page
title: Struktura projektu
permalink: /struct
order: 2
lang: cz
---

Softwarový balík hJOP je složen z několika základních programů a několika
programů rozšiřujících. Všechny tyto programy pracují v součinnosti tak, aby
umožnily editaci kolejiště na míru a -- a to především -- pohodlné řízení.


## Základní SW

 * [**hJOPeditor**](/hJOPeditor): editor sloužící k vytváření reliéfů stanic.
 * [**hJOPmerger**](/hJOPmerger): maličký program, který vezme definice
   jednotlivých reliéfů z editoru a spojí je do konfiguračního souboru
   pro server.
 * [**hJOPserver**](/hJOPserver): hlavní logický člen celého projektu. Řeší
   technologii provozu. Umožňuje konfigurovat technologické bloky kolejiště,
   načítat definiční soubory reliéfů z *hJOPmerger*u a provozovat kolejiště.
   Pro provoz kolejiště je typicky zapnutý na samostatném počítači,
   dispečeři s ním neinteragují. Jedná se o hlavní mozek celého provozu.
 * [**hJOPpanel**](/hJOPpanel): panel umožňující zobrazovat reliéfy vytvořené
   v *hJOPeditor*u. Panel se připojuje pomocí počítačové sítě k běžícímu
   *hJOPserveru* a umožňuje získat a změnit stav kolejiště. Jedná se o terminál,
   který je běžně ovládán dispečery. V síti je obvykle spuštěno několik možných
   panelů -- například každý u konkrétní stanice --, které se připojují
   k jednomu serveru. Na jednom počítači lze spustit více panelů. Může běžet na
   stejném počítači jako hJOPserver.


## Rozšiřující SW

 * [**Jerry**](/Jerry): program umožňující řídit jízdu vlaku z role
   strojvedoucího.
 * [**hJOPdriver**](/hJOPdriver): mobilní aplikace pro Android sloužící
   k řízení jízdy souprav.
 * [**uLI-master**](/uLI-master): hardware umožňující připojení Roco Multimaus
   k obslužným pracovištím, umožňuje řídit jízdu vlaku hardwarovým ovladačem.
 * [**uLI-daemon**](/uLI-daemon): software umožňující spřažení *uLI-master*
   se zbytkem technologie kolejiště. Je nutný pro funkci *uLI-master*.
 * [**hJOPclock**](/hJOPclock): desktopová aplikace umožňující zobrazit modelový
   čas (například na projektor).
