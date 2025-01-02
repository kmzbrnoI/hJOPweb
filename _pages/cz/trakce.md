---
layout: page
title: Systém Trakce
permalink: /trakce
order: 41
lang: cz
---

hJOP od verze 5.0 umožňuje řídit jízdu hnacích vozidel několika různými
systémy. Všechny sdružuje pod obecné jméno „Trakce“. Níže jsou konkrétní
knihovny, které lze použít spolu s hJOPserverem.

Knihovny jsou dodávány jako dll soubory.

Pokud máte zájem naprogramovat si vlastní knihovnu, můžete se podívat na
[specifikaci API mezi hJOPserverem a knihovnou
trakce](https://github.com/kmzbrnoI/xn-lib-cpp-qt/wiki).

## 1. XpressNET knihovna

[XpressNET knihovna](https://github.com/kmzbrnoI/xn-lib-cpp-qt) komunikuje
pomocí LI s DCC centrálou podporující protokol XpressNET. Toto rozhraní bylo
součástí hJOP od pradávna, od verze hJOPserveru 5 je však kompletně předěláno
a dodáváno jako samostatná knihovna.

<a class="btn" href="https://github.com/kmzbrnoI/xn-lib-cpp-qt/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/xn-lib-cpp-qt">Zdrojové kódy</a>

## 2. Simulátor knihovna

[Simulační knihovna](https://github.com/kmzbrnoI/trakce-simulator) je určena
primárně pro vývoj. Umožňuje simulovat centrálu bez nutnosti fyzického
připojení k centrále.

<a class="btn" href="https://github.com/kmzbrnoI/trakce-simulator/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/trakce-simulator">Zdrojové kódy</a>

---

## API pro volání knihovny

Pokud byste chtěli některou z knihoven výše použít ve svém projektu, můžete
využít připravené rozhraní pro volání knihovny do vašeho oblíbeného
programovacího jazyka.

Momentálně existuje [pro jazyk Object
Pascal](https://github.com/kmzbrnoI/trakce-delphi).
