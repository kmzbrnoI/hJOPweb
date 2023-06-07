---
layout: page
title: FAQ – často kladené dotazy
permalink: /faq
order: 90
lang: cz
---

<div class="faq-question">
<p>Komunikuje hJOP pouze s centrálami, které uvádíte na webu nebo i jinými?
Respektive, co byste doporučil, jaké centrály a komponenty se osvědčily nejlépe?</p>
</div>

<div class="faq-answer">
<p>hJOP komunikuje s libovolnými centrálami, ke kterým se lze připojit pomocí
protokolu XpressNET. My jsme v klubu používali tyto centrály:</p>

<ul>
<li>NanoX. Celkem fungovalo, občas drobné problémy s firmwarem, nutné použít
jiné LI než vestavěné. Vestavěnému LI se občas po delší době rozpadne komunikace.
Vhodná levná centrála pro menší kolejiště. [2016]</li>
<li>Lenz LZV100. Tuto centrálu jsme chvíli používali na klubovním velkém kolejišti,
fungovala dobře. Momentálně ji dlouhodobě úspěšně používáme pro řízení modulovky TT.
Nevýhodou je vyšší cena. Dnes je dostupný její následovník – LZV200, kterou jsme
ale zatím nezkoušeli.[2023]</li>
<li>Digikeijs DR5000. Tuto centrálu aktuálně úspěšně používáme na velkém klubovním
kolejišti H0. V počátku jsme s ní měli problémy, ale ty se časem samy vyřešily
(vůbec netušíme jak). Centrálu používáme s externím uLI. [2023]</li>
<li>Roco Z21. Tuto centrálu jsme nikdy nezkoušeli, ale nebál bych se s ní
hJOPku provozovat. Na Z21 jsou obecně dobré reference. Stačí Start verze.</li>
</ul>

<p>hJOP bohužel není pravidelně testována na řízení příslušenství přes XpressNET.
Příslušenství (výhybky, přestavníky, návěstidla, snímání detekce obsazení, ...)
našich klubovních kolejišť je řízeno pomocí <a href="https://mtb.kmz-brno.cz/">systému
MTB</a>, DCC centrálou řídíme jen jízdu vlaků.
Proto nemáme s DCC komponenty pro řízení příslušenství moc zkušeností.
Systém MTB bohužel (zatím) není dostupný ke koupi. Je možné, že nasazení hJOP
v domácích podmínkách bude vyžadovat trochu trpělivosti, ale možné je.</p>
</div>

<hr />
<div class="faq-question"><p>Je možné připojit hJOP k centrále Roco Z21 přímo
přes WiFi bez použití drátového LI?</p></div>

<div class="faq-answer"><p>
V současné době není možné připojení hJOP k Z21 přes počítačovou síť.
Připojení k Z21 možné je, je ale třeba využít libovolné drátové LI s USB rozhraním.
</p></div>

<hr />

<div class="faq-question"><p>Lze hJOP provozovat tak, že ji bude ovládat více
lidí a budeme si hrát na výpravčí a na strojvedoucí?</p></div>

<div class="faq-answer"><p>Ano. Každá oblast řízení může mít svého výpravčího na
svém vlastním počítači.  Jedinou podmínkou je, že počítače musí být ve stejné
síti.  Každé hnací vozidlo může být řízeno jiným strojvedoucím. Doporučené
řešení je využít aplikací <a href="/Jerry">Jerry</a> a <a
href="/hJOPdriver">hJOPdriver</a>. Každý strojvedoucí má svůj mobil, tablet
nebo počítač, z kterého řídí jednu nebo více lokomotiv. Alternativně lze řídit
jízdu lokomotiv pomocí fyzických ovladačů připojených přímo k centrále. Tato
konfigurace však nenabízí tak pohodlné předávání hnacích vozidel mezi počítačem
a strojvedoucím.</p></div>

<hr />

<div class="faq-question"><p>Jak je to s kódováním S-com návěstidel?
Umí hJOP např. na vjezdovém návěstidle předvěstit návěst odjezdového návěstidla?
Dočetl jsem se, že S-com umí všechny kombinace návěštění na konkrétním návěstidle.
Jak to ale bude, když se ve vlakové cestě přestaví odjezdové návěstidlo ze
„stůj“ na „volno“, umí hJOP na základě toho poslat kód do vjezdového návěstidla,
aby se přestavilo z „výstrahy“ na „volno“?</p></div>

<div class="faq-answer">
<p>hJOP podporuje plnohodnotné přenášení návěstí. V příkladu
popsaném v otázce samozřejmě dojde k přenosu návěsti odjezdového návěstidla
na návěstidlo vjezdové. Podobně probíhá například přenášení návěstidel do autobloku,
z autobloku, návěstí cestových návěstidel apod.</p>

<p>Je třeba si uvědomit, že vysílání návěstí z hJOP jinak
nesouvisí s protokolem pro přenos návěstí S-COM. S-COM je protokol, kterým je
možné řídit návěstidlo pomocí 3 vodičů, tento protokol řeší fyzické připojení
návěstidel. hJOP posílá do systému pro řízení příslušenství kód návěsti. Jak si
tento systém návěst zpracuje je na něm. Pokud používáte <a href="/trakce">řízení přes
XpressNET</a>, dojde k překladu návěsti na výstupní moduly DCC.</p>
</div>

<hr />

<div class="faq-question"><p>Lze hJOP provozovat tak, že si „naprogramuji“ nějaký
plán, kde budou vlaky jezdit dle GVD včetně zastavování v zastávkách, u perónů
či jinde, čas pobytu, případně i změnu směru jízdy?  Do toho pak ještě případně
ovládat nějaký posun nebo jiný vlak mimo GVD, což by tedy všechno zvládl
ovládat jeden člověk?</p></div>

<div class="faq-answer">
<p>hJOP je zabezpečovací systém pro řízení modelového kolejiště. Jeho cílem je být
obdobou elektronického stavědla. hJOP momentálně nepodporuje práci s grafikonem
vlakové dopravy. Aktuálně probíhá vývoj na graficko-technologické nadstavbě hJOP
(GTN), která by měla přinést možnost zobrazit si v hJOP grafikon, zaznamenávat
do grafikonu reálně odjeté vlaky a dokonce i automaticky stavět jízdní cesty
podle grafikonu (ASVC). GTN pro hJOP je aktuálně na začátku vývoje.</p>

<p>hJOP aktuálně podporuje toto:</p>

<ul>
<li>Když dojede Os/MOs vlak na kolej s perónem, vlak zastaví správně u perónu.</li>
<li>Lze nakonfigurovat, aby vlaky automaticky zastavovaly v zastávkách v trati.</li>
<li>Jízda vlaku se pak řídí jednoduchou logikou "počkej v zastávce x vteřin a pak jeď dál".</li>
<li>U vlaků lze zadávat předvídané odjezdy.</li>
<li>Lze si napsat program, který se připojí k hJOP, a který bude např. hJOP dávat
povely ke stavění konkrétních cest v konkrétní časy. Takový program pak
může sloužit jako pomocník při ježdění podle grafikonu.</li>
</ul>

<hr />

<div class="faq-question"><p>
Chci řídit trakci i příslušenství přes XpressNET. Je lepší použít jednu
centrálu a 2 LI nebo 2 centrály?
</p></div>

<div class="faq-answer"><p>
Použít 1 DCC centrálu a 2 LI je rozhodně levnější, proto bych tento přístup doporučil.
Ale pouze za podmínky: <strong>DCC z centrály je připojeno do kolejí přes další
zesilovače, které nepropagují zkrat do centrály</strong>. Příslušenství (např.
přestavníky výhybek) je pak připojeno buď přes jiný zesilovač nebo přímo do
centrály. Jde o to, aby v momentě, kdy nastane v kolejích zkrat, šlo přestavit
výhybky a tím se zkratu zbavit. Centrála tedy nesmí v případě zkratu vypnout DCC
signál do dekodéru přestavníků.
</p></div>

<hr />

Chybí vám tady něco?
<a class="btn btn-center" style="width: 200px;" href="/contact">Zeptat se</a>
