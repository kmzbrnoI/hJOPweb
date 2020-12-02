---
layout: page
title: Chci nasadit hJOP
permalink: /navod
order: 4
lang: cz
---

Na této stránce je popsáno, jak nasadit hJOP na kolejiště. K hJOP momentálně
není psaný návod. Místo toho zde budou postupně zveřejňovány video návody,
které vás provedou jednotlivými kroky nasazení hJOP.

### Obsah

 1. Zkontrolujte si, že máte [kompatibilní kolejiště](/#requirements).
 2. \[[návod](#panel-bitmap)\] V hJOPeditoru nakreslete reliéfy stanic
    v bitmapovém režimu, zadejte oddělovače bloků. Uložte soubory `.bpnl`.
 3. \[[návod](#tech-bloky)\] Na serveru vytvořte zesilovače a technologické bloky.
 4. \[[návod](#tech-bloky)\] Načtěte definice bloků serveru do editoru.
   Přepněte editaci reliéfu do režimu _bloků_. V každém panelu přiřaďte všechny
   grafické bloky technologickým bloků.
 5. \[[návod](#tech-bloky)\] Všechny `opnl` soubory vložte do programu
   `hJOPmerger`, exportujte soubor bloků pro server do souboru
   `data/stanice.spnl` v adresáři hJOPserveru.
 6. \[[návod](#tech-bloky)\] Restartujte aplikaci hJOPserver, zkontrolujte
   načtení oblastí řízení a správné přiřazení bloků oblastem řízení.
 7. Na serveru vytvořte alespoň jednoho uživatele.
 8. hJOPserver: proveďte _central start_ serveru v simulačním režimu.
 9. `opnl` soubory panelů otevřete v programu `hJOPpanel`, nastavte hJOPpanel
    podle svých potřeb. Připojte se k serveru. Bloky by měly být aktivní.
10. Připojte kolejiště k hJOPserveru.
11. Vytvořte závěrovou tabulku, přidejte hnací vozidla. Doplňte cokoliv dalšího,
   co potřebujete.

## 2: kreslení panelů v bitmapovém režimu {#panel-bitmap}

<iframe width="560" height="315" src="https://www.youtube.com/embed/yKBagCjvenA"
frameborder="0" allowfullscreen></iframe>

Pro inspiraci se vám mohou hodit [panely stanic Klubu modelářů železnic Brno
I](https://github.com/kmzbrnoI/hJOPpanely). Návod je k dispozici v plném rozlišení
[zde](https://drive.google.com/file/d/1XiB_bdifbnzNHLh4CceLVB3WwzTYgvmd/view?usp=sharing).

## 3–6: technologické bloky {#tech-bloky}

<iframe width="560" height="315" src="https://www.youtube.com/embed/-zceBipR_-Y"
frameborder="0" allowfullscreen></iframe>

Video je k dispozici v plném rozlišení
[zde](https://drive.google.com/file/d/1BsrkUwtsiEimDWxnaVy6WTyIaGXJkoc_/view?usp=sharing).

---

## Archív videonávodů

<iframe width="560" height="315" src="https://www.youtube.com/embed/4P8mZKATbmc"
frameborder="0" allowfullscreen></iframe>

Tento návod je z roku 2017 a nezahrnuje tedy některé změny v nových verzích
k hJOP. Video tutoriál je k dispozici v plném rozlišení na
[ulož.to](https://uloz.to/!TWc2NvWaNWW4/hjopeditor-tutorial-mp4).
Pro rychlé stahování z ulož.to zdarma lze využít například program
[Vžum](http://vzum.8u.cz/).

Pozor: od hJOPserveru v5 se nestahují `dll` knihovny (`simulator.dll`)
samostatně, ale hJOPserver se stahuje jako `zip` soubor, který tyto knihovny již
obsahuje.
