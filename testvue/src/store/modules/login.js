import axios from 'axios';

const loginStore = {
    namespaced: true,
    state: {
        memberId:'',
        accessToken:''
    },
    getters: {
        isLogin(state) {
            return state.accessToken == '' ? false : true;
        }
    },
    mutations: {
        // memberId를 설정합니다.
        setMmemberId(state, memberId) {
            state.memberId = memberId;
        },
        // accessToken를 설정합니다.
        setAccessToken(state, accessToken) {
            state.accessToken = accessToken;
        },
        // 초기화시킵니다.
        reset(state) {
            state.memberId = '';
            state.accessToken = '';
        }
    },
    actions: {
    }
};

export default loginStore;