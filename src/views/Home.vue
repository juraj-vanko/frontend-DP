<template>
  <div class="home">
    <div class="home__header">
      <div class="home__header__analyzer">
        <h1>
          Napíšte vetu ...
        </h1>
        <p>
          Poznámka: Veta musí byť napísaná spisovne správne.
        </p>
        <div class="home__header__analyzer__tagfield">
          <textarea :class="{'theme-dark': getDarkTheme}" name="sentence" v-model="sentence"></textarea>
          <button class="btn" @click="tagSentence(sentence)">Rozbor vety</button>
        </div>
      </div>
      <div class="home__header__illustration">
        <img v-if="getHomeLoading" src="../assets/loading-animation.svg" alt="loading" />
        <img v-else src="../assets/loading.svg" alt="loading" />
      </div>
    </div>
    <div class="home__loading" v-if="getHomeLoading">
      <BounceLoader :color="color"></BounceLoader>
    </div>
    <div class="home__result" v-if="getTaggerResult.length">     
      <h1>
        Výsledok
      </h1> 
      <h2>
          Vetný rozbor
        </h2>
      <div class="home__result__analyze">
        <div v-for="word in getTaggerResult" :key="word.id" class="part">
          <div class="part__tag">
            {{ word.schema }}
          </div>
          <div class="part__word">
            {{ word.word }}
          </div>
        </div>
      </div>
      <br />
      <h2>Slovné druhy</h2>
      <div class="home__result__list">
        <div v-for="word, id in getTaggerResult" :key="id" :class="[true ? 'home__result__list__words': '', getDarkTheme ? 'theme-dark': '']">
          <div class="description" :style="{'background':word.wordtype.color}">
            <div class="description__word">
                {{ word.word }}
                <span class="lemma">
                  {{ word.lemma+" - "+word.wordtype.slovakName }}
                </span>
            </div>
          </div>
          <div v-if="word.tags.length" class="informations">
            <div v-for="info in word.tags" :key="info.label" class="informations__information">
              <span class="label">{{ info.label }}</span>
              <span class="content">{{ info.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import BounceLoader from 'vue-spinner/src/BounceLoader.vue';

export default {
  components:{
    BounceLoader
  },
  data(){
    return {
      sentence: "",
      color: '#DD00AC',
    }
  },
  methods: {
    ...mapActions({
        tagSentence: 'home/tagSentence',
    })
},
computed: {
    ...mapGetters({
        getTaggerResult: 'home/getTaggerResult',
        getHomeLoading: 'home/getHomeLoading',
        getDarkTheme: 'home/getDarkTheme'
    }),
},

}
</script>

<style lang="scss">
$pink: #DD00AC;
$darkPink: #40263B;
$blue: #00C9F5;
$white: #fff;
$light: #dbe6ea;
$dark: #272640;

.home {
  width: 1180px;
  margin: 0 auto;  
  padding: 10px 20px;

  &__header {
    padding: 20px;
    display: flex;

    &__analyzer {
      flex: 1;

      h1 {
        font-size: 40px;
        line-height: 40px;
        padding: 0;
      }

      &__tagfield {
        display: flex;
        flex-direction: column;

        textarea {
          width: 100%;
          height: 150px;
          font-size: 18px;
          color: $dark;
          padding: 10px;
          background: rgba($color: $dark, $alpha: 0.2);
          border: 4px solid $darkPink;

          &.theme-dark {
            color: $light;
            background: rgba($color: $light, $alpha: 0.2);
          }
        }
        .btn {
          margin-top: 40px;
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          text-transform: none;
        }
      }
    }
    &__illustration {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 20px;

      img {
        width: 80%;
      }
    }    
  }

  &__loading {
    width: 30px;
    display: block;
    margin: 20px auto;
  }
  
  &__result {
    margin-top: 40px;

    h1 {
      font-size: 40px;
      line-height: 40px;
      padding: 0;
    }

    &__analyze {
      width: auto;
      display: flex;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      scrollbar-color: $pink $light;
      scrollbar-width: thin;

      .part {
        text-align: center;
        font-weight: 600;
        display:flex;
        flex-direction: column;
        justify-content: flex-end;
        min-width: 100px;
        padding: 20px 10px;

        &__tag {
          color: $pink;
          font-size: 12px;
          word-break: unset;
          padding-bottom: 10px;
        }

        &__word {
          font-size: 20px;
        }
      }
    }

    &__analyze::-webkit-scrollbar{
      height: 4px;
      width: 4px;
      background: $light;
      border-radius: 10px;
    }

    &__analyze::-webkit-scrollbar-thumb:horizontal{
      background: $pink;
      border-radius: 10px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;

      &__words {
        background-color: $white;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        border: 4px solid $darkPink;
        margin-top: 20px;


        .description {
          text-align: center;
          color: $light;
          background: $dark;
          padding: 20px 10px;
          
          &__word {
            font-size: 30px;
            display: flex;
            flex-direction: column;

            .lemma {
              margin-top: 10px;
              font-size: 17px;
            }
          }
        }
        .informations {
          padding: 20px;
          text-align: center;

          &__information {
            display: flex;
            flex-direction: column;

            .label {
              font-size: 17px;
              
            }

            .content {
              font-size: 20px;
            }
          }

          &__information:not(:first-child) {
            margin-top: 20px;
          }
        }

        &.theme-dark {
            background: rgba($color: $white, $alpha: 0.1);
          }
      }
    }    
  }
}

@media screen and (max-width: 1220px) {
  .home {
    width: auto;
  }
}

@media screen and (min-width: 721px) {
  .home {
    &__loading {
      display: none;
    }
  }
}

@media screen and (max-width: 720px) {
  .home {
    &__header {
      &__illustration {
        display: none;
      }
    }

    &__loading {
      display: block;
    }
  }
}

@media screen and (max-width: 660px) {
  .home {
    width: auto;

    &__header { 
      &__analyzer{
        &__tagfield {
          textarea {
            width: 100%;
          }
        }
      }
    }
    &__result {
      &__list {
        &__words {
          width: 100%;
        }
      }
    }
  }
}
</style>
