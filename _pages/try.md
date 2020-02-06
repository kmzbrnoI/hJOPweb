---
layout: page
title: Chci si vyzkoušet hJOP
permalink: /vyzkouset
order: 3
---

hJOP si můžete vyzkoušet stažením a spuštěním spustitelných souborů jednotlivých
aplikací:

 * [hJOPeditor](https://github.com/kmzbrnoI/hJOPeditor/releases),
 * [hJOPserver](https://github.com/kmzbrnoI/hJOPserver/releases),
 * [hJOPmerger](https://github.com/kmzbrnoI/hJOPmerger/releases),
 * [hJOPpanel](https://github.com/kmzbrnoI/hJOPpanel/releases).

Další aplikace (Jerry, uLI-daemon, ...) jsou k dispozici u jednotlivých
projektů na serveru [GitHub](https://github.com/kmzbrnoI) (vždy pod záložkou
*Releases* v repozitáři projektu).

## Chci si vyzkoušet ovládání

Můžete si stáhnout [jedno z dem](/download/), ve kterém jsou k dispozici již
hotové reliéfy, takže software můžete ovládat třeba jako Staničáře.

 * [Modulovka TT KMŽ Brno I k 6. 2. 2020](/download/hJOP-try-tt-2020-02-06.zip).
 * [Modulovka TT KMŽ Brno I k 10. 3. 2017](/download/hJOP-try-tt-2017-03-10.zip).


## Chci si nakreslit vlastní stanice

Chcete-li si kreslit vlastní panely, mohou se vám pro inspiraci hodit [panely
stanic Klubu modelářů železnic Brno I](https://github.com/kmzbrnoI/hJOPpanely).

Základy editace reliéfů váš naučí video tutoriál:

<iframe width="560" height="315" src="https://www.youtube.com/embed/4P8mZKATbmc"
frameborder="0" allowfullscreen></iframe>

Video tutoriál je k dispozici v plném rozlišení na
[ulož.to](https://uloz.to/!TWc2NvWaNWW4/hjopeditor-tutorial-mp4).
Pro rychlé stahování z ulož.to zdarma lze využít například program
[Vžum](http://vzum.8u.cz/).

### Stručný postup pro kreslení vlastního kolejiště

1. V editoru nakreslete reliéfy stanic ve formátu `bpnl` (_bitmapový režim_).
2. Na serveru vytvořte zesilovače a technologické bloky.
3. Načtěte definice bloků serveru do editoru. Přepněte editaci reliéfu do
   režimu _bloků_.
4. V každém panelu přiřaďte všechny grafické bloky technologickým bloků.
5. Všechny `opnl` soubory vložte do programu `hJOPmerger`, exportujte soubor
   bloků pro server do adresáře serveru `data/stanice.spnl`.
6. Spusťte server, zkontrolujte načtení oblastí řízení a správné přiřazení
   bloků oblastem řízení.
7. Na serveru vytvořte uživatele.
8. Spusťte server.
9. `opnl` soubory panelů předložte programu `hJOPpanel`, zkonfigurujte
   hJOPpanel (například přes GUI) podle svých potřeb. Měli byste vidět fialový
   reliéf.
10. Panel: připojte se k serveru. Bloky by měly být aktivní.
11. Pokračujte doeditováním čehokoliv, co potřebujete.
