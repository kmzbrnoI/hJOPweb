---
layout: post
title: hJOPdriver v2.1
tags: hJOPdriver mobile app
lang: cz
---

Byla vydána nová verze mobilní aplikace hJOPdriver určené k řízení jízdy
hnacích vozidel v ekosystému hJOP.

Nová verze 2.1 přináší zásadní novinku: **vlakový zabezpečovač**.

<a class="btn" href="https://youtube.com/shorts/pHLn-Pu8gQA?si=-T0vwPiKkTKhU1it">Ukázka fungování</a>

Vlakový zabezpečovač podporuje režimy jízdy: 

 1. vlak,
 2. posun,

mezi kterými může strojvedoucí kdykoliv přepnout.

V režimu *vlak* je přenášen kód na návěstní opakovač, je přenášena cílová rychlost
(aktuální rychlost soupravy v hJOP).
V případě překročení cílové rychlosti je aktivována akustická výstraha, při nesnížení
rychlosti do 3 s je zavedeno nouzové brzdění. Toto chování zabezpečí včasné zastavení
vlaku před návěstidlem zakazujícím jízdu při dodržení pravidla, že zastavovací událost
je alespoň 3 s jízdy nejvyšší povolenou rychlostí od návěstidla (typicky splněno). Dále pokud cílová
rychlost hnacího vozidla je 0 km/h, není možné se s vozidlem vůbec rozjet.

V režimu *posun* není přenášen kód na návěstní opakovač a je dohlíženo pouze
nepřekročení rychlosti 40 km/h. Tento režim lze použít i pro různé mimořádné
situace, například pro jízdu na přivolávací návěst.

Dále bylo doplněno přehrání informativního zvuku při změně návěsti na návěstním
opakovači nebo cílové rychlosti.

[<img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png"
     alt="Get it on F-Droid"
     height="80">](https://f-droid.org/packages/cz.mendelu.xmarik.train_manager/)
[<img src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
     alt="Get it on Google Play"
     height="80">](https://play.google.com/store/apps/details?id=cz.mendelu.xmarik.train_manager)
