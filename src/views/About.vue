<template>
  <div class="container">
    <p>Tento projekt je vytvorený ako diplomová práca.</p>
    <p>
        Záverečná práca je zameraná na analýzu dostupných riešení tagovania slovenských textov a ich implementácia 
        a optimalizácia vo webovom prostredí.
    </p>
    <p class="italic">        
        Tokenizácia je proces rozdelenia textových reťazcov na zoznam tokenov, v tomto prípade slov. 
        Následne je možné tieto slová kategorizovať podľa slovných druhov a ďalších gramatických kategórií - tagovanie slov. 
        Tagovanie slov sa využíva v oblasti spracovania prirodzeného jazyka na analýzu textov (korpusov).
    </p>

    <img src="../assets/about.svg" alt="loading" />

  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss">
$pink: #dd00ac;
$darkPink: #40263b;
$blue: #00c9f5;
$white: #fff;
$light: #dbe6ea;
$dark: #272640;

.container {
  width: 1180px;
  margin: 0 auto;
  padding: 10px 20px;

  .italic {
      font-style: italic;
  }

  img {
      display: block;
      width: 720px;
      margin: 50px auto;
  }
}

@media screen and (max-width: 1180px) {
    .container {
        width: 720px;
    }
}

@media screen and (max-width: 720px) {
    .container {
        width: auto;
        padding-left: 20px;
        padding-right: 20px;

        img {
            width: 100%;
        }
    }
}
</style>