---
layout: page
title: FAQ – často kladené dotazy
permalink: /faq
order: 90
lang: cz
---

<span class="faq-question">Lze hJOP provozovat tak, že ji bude ovládat více
lidí a budeme si hrát na výpravčí a na strojvedoucí?</span>

<span class="faq-answer">Ano. Každá oblast řízení může mít svého výpravčího na
svém vlastním počítači.  Jedinou podmínkou je, že počítače musí být ve stejné
síti.  Každé hnací vozidlo může být řízeno jiným strojvedoucím. Doporučené
řešení je využít aplikací [Jerry](/Jerry) a [hJOPdriver](/androidDriver). Každý
strojvedoucí má svůj mobil, tablet nebo počítač, z kterého řídí jednu nebo více
lokomotiv. Alternativně lze řídit jízdu lokomotiv pomocí fyzických ovladačů
připojených přímo k centrále. Tato konfigurace však nenabízí tak pohodlné
předávání hnacích vozidel mezi počítačem a strojvedoucím.</span>

<span class="faq-question">Jak je to s kódováním S-com návěstidel?
Umí hJOP např. na vjezdovém návěstidle předvěstit návěst odjezdového návěstidla?
Dočetl jsem se, že S-com umí všechny kombinace návěštění na konkrétním návěstidle.
Jak to ale bude, když se ve vlakové cestě přestaví odjezdové návěstidlo ze
"stůj" na "volno", umí hJOP na základě toho poslat kód do vjezdového návěstidla,
aby se přestavilo z "výstrahy" na "volno"?</span>

<span class="faq-answer">hJOP podporuje plnohodnotné přenášení návěstí. V příkladu
popsaném v otázce samozřejmě dojde k přenosu návěsti odjezdového návěstidla
na návěstidlo vjezdové. Podobně probíhá například přenášení návěstidel do autobloku,
z autobloku, návěstí cestových návěstidel apod.

<span class="faq-answer">Je třeba si uvědomit, že vysílání návěstí z hJOP jinak
nesouvisí s protokolem pro přenos návěstí S-COM. S-COM je protokol, kterým je
možné řídit návěstidlo pomocí 3 vodičů, tento protokol řeší fyzické připojení
návěstidel. hJOP posílá do systému pro řízení příslušenství kód návěsti. Jak si
tento systém návěst zpracuje je na něm. Pokud používáte [řízení přes
XpressNET](/trakce), dojde k překladu návěsti na výstupní moduly DCC.</span>

<span class="faq-question">Lze hJOP provozovat tak, že si "naprogramuji" nějaký
plán, kde budou vlaky jezdit dle GVD včetně zastavování v zastávkách, u perónů
či jinde, čas pobytu, případně i změnu směru jízdy?  Do toho pak ještě případně
ovládat nějaký posun nebo jiný vlak mimo GVD, což by tedy všechno zvládl
ovládat jeden člověk?</span>

hJOP je zabezpečovací systém pro řízení modelového kolejiště. Jeho cílem je být
obdobou elektronického stavědla. hJOP momentálně nepodporuje práci s grafikonem
vlakové dopravy. Aktuálně probíhá vývoj na grafiko-technologické nadstavbě hJOP
(GTN), která by měla přinést možnost zobrazit si v hJOP grafikon, zaznamenávat
do grafikonu reálně odjeté vlaky a dokonce i automaticky stavět jízdní cesty
podle grafikonu (ASVC). GTN pro hJOP je aktuálně na začátku vývoje.

hJOP aktuálně podporuje toto:

 * Když dojede Os/MOs vlak na kolej s perónem, vlak zastaví správně u perónu.
 * Lze nakonfigurovat, aby vlaky automaticky zastavovaly v zastávkách v trati.
   Jízda vlaku se pak řídí jednoduchou logikou "počkej v zastávce x vteřin a pak
   jeď dál".
 * U vlaků lze zadávat předvídané odjezdy.
 * Lze si napsat program, který se připojí k hJOP, a který bude např. hJOP dávat
   povely ke stavění konkrétních cest v konkrétní časy. Takový program pak
   může sloužit jako pomocník při ježdění podle grafikonu.

<span class="faq-question">
Komunikuje hJOP pouze s centrálami, které uvádíte na webu nebo i jinými?
Respektive, co byste doporučil, jaké centrály a komponenty se osvědčily nejlépe?
</span>

hJOP komunikuje s libovolnými centrálami, ke kterým se lze připojit pomocí
protokolu XpressNET. My jsme v klubu používali tyto centrály:

 * NanoX. Celkem fungovalo, občas drobné problémy s firmwarem, nutné použít
   jiné LI než vestavěné. Vestavěnému LI se občas po delší době rozpadne komunikace.
   Vhodné na menší kolejiště.
 * Lenz LV100. Tuto centrálu máme aktuálně nasazenou na klubovním velkém kolejišti,
   funguje dobře.
 * Digikeijs DR5000. Tuto centrálu jsme zkoušeli, ale nebyli jsme schopni jak
   s vestavěným LI tak s externím LI komunikaci zprovoznit. 25. 4. 2020 jsme
   nahlásili chyby na Digikeijs, chyby zatím nebyly opraveny.

hJOP bohužel není pravidelně testována na řízení příslušenství přes XpressNET.
Příslušenství (výhybky, přestavníky, návěstidla, snímání detekce obsazení, ...)
našich klubovních kolejišť je řízeno pomocí [systému
MTB](https://mtb.kmz-brno.cz/), DCC centrálou řídíme jen jízdu vlaků.
Proto nemáme s DCC komponenty pro řízení příslušenství moc zkušeností.
Systém MTB bohužel (zatím) není dostupný ke koupi. Je možné, že nasazení hJOP
v domácích podmínkách bude vyžadovat trochu trpělivosti, ale možné je.
