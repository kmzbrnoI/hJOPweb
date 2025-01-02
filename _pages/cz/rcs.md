---
layout: page
title: Systém RCS
permalink: /rcs
order: 40
lang: cz
---

hJOP umožňuje řídit příslušenství (přestavníky, návěstidla, získávání stavu
obsazení kolejových obvodů atd.) jedním z několika dostupných systémů. Všechny sdružuje pod obecné
jméno „RCS – Railroad Control System“. Níže je uveden seznam podporovaných
systémů.

hJOPserver od verze 5 je distribuován včetně knihoven pro podporu všech systémů
níže, takže knihovny není nutné samostatně stahovat. Knihovny jsou dodávány
jako dll soubory.

## 1. XpressNET {#xpressnet}

[XpressNET knihovna](https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt) umožňuje
připojení ke sběrnici XpressNET, skrze kterou lze řídit stacionární prvky kolejiště a získávat
stav vstupů z kolejiště. Pro připojení hJOPserveru ke kolejišti je nutné využít dvě LI -- jedno
se používá pro řízení jízdy a druhé pro připojení k RCS (pro řízení příslušenství).
Je možné použít buď dvě centrály – každou se svým LI – nebo jednu centrálu se dvěma LI.

Knihovna používá dekodéry příslušenství jako výstupy a zpětné hlášení jako vstupy.

<a class="btn" href="https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt">Zdrojové kódy</a>
<a class="btn" href="https://github.com/kmzbrnoI/rcs-lib-XpressNET-qt/wiki">Návod</a>

## 2. MTB Network Library {#mtb-net}

*MTB Network Library* umožňuje komunikaci s aplikací
[MTB Daemon](https://mtb.kmz-brno.cz/v4/daemon), která se připojuje
k [MTB v4](https://mtb.kmz-brno.cz/). Nahrazuje knihovnu *MTB v2*.

<a class="btn" href="https://github.com/kmzbrnoI/mtb-net-lib/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/mtb-net-lib">Zdrojové kódy</a>

## 3. Simulace {#ximulator}

[Simulační knihovna](https://github.com/kmzbrnoI/mtb-simulator-lib) se
nepřipojuje ke kolejišti, ale kolejiště emuluje. Hodí se pro testování
hJOP bez připojeného kolejiště.

<a class="btn" href="https://github.com/kmzbrnoI/mtb-simulator-lib/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/mtb-simulator-lib">Zdrojové kódy</a>

---

## Specifikace RCS API

<a class="btn" href="https://github.com/kmzbrnoI/rcs-api">Číst specifikaci RCS API</a>


## RCSI – Railroad Control System Interface

*RCSI* je rozhraní k RCS knihovně z rodičovské aplikace. RCSI se používá
např. v hJOPserveru. Může existovat pro různé programovací jazyky.

<a class="btn" href="https://github.com/kmzbrnoI/rcs-delphi">RCSI v Object Pascalu</a>

## MTB v2 {#mtb}

*Tato knihovna již není vyvíjena, byla nahrazena knihovnou MTB Network Library.*

MTB knihovna umožňuje komunikaci s [moduly MTB v2](https://mtb.kmz-brno.cz/).

<a class="btn" href="https://github.com/kmzbrnoI/mtb-lib/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/mtb-lib">Zdrojové kódy</a>
