<template>
    <div class="score">
        <div>{{ counter }}</div>
        <div>랜덤 점수: {{ score }}</div>
        <div>합계 점수: {{ total }}</div>
        <div class="result">{{ totalState}}</div>
        <div class="buttons">
            <button @click="doScore()" class="button blue">실행</button>
            <button @click="reset()" class="button">새로고침</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    name: 'ScoreView',
    computed: {
        //...mapState('scoreStore',['total','score']),
        ...mapState('scoreStore',{totalNum:'total',scoreNum:'score'}),
        ...mapGetters('scoreStore', ['getCountString', 'getTotalState']),
        total() {
            //return this.$store.state.total;
            return this.totalNum;//mapState 사용해서 단축
        },
        score() {
            //return this.$store.state.score;
            return this.scoreNum;
        },
        counter() {
            //return this.$store.getters['scoreStore/getCountString'];
            return this.getCountString;
        },
        totalState() {
            //return this.$store.getters['scoreStore/getTotalState'];
            return this.getTotalState;
        }
    },
    methods: {
        ...mapActions('scoreStore', ['doScore', 'reset']),
        /*doScore() {
            this.$store.dispatch('scoreStore/doScore');
        },
        reset() {
            this.$store.dispatch('scoreStore/reset');
        }*/
    }
};
</script>

<style scoped>
.result { padding: 10px 10px; font-size:20px; color:red; }
.buttons { position:relative; height:32px; margin-top:20px; }
.buttons > .button { overflow:visible; cursor:pointer; min-width:125px; height:32px; margin:0 2px; padding:0 15px; line-height:32px; font-size:14px; border:1px solid #dfdfdf; background:#fff; border-radius:10px; }
.buttons > .button.blue { color:#fff; border-color:#0099d2 !important; background:#0099d2 !important; }
</style>