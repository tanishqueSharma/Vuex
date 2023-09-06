import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default{
    namespaced:true,
    state(){
        return{
            counter:0,
        };
    },
    mutations:counterMutations
    //{
        // increment(state){
        //     state.counter = state.counter + 2;
        // },
        // increase(state,payload){
        //     state.counter=state.counter+ payload.value;
        // },
    //}
    ,
    actions:counterActions
    // {
    //     increment(context){
    //         setTimeout(function(){
    //             context.commit('increment');
    //         },2000);
    //     },
    //     increase(context,payload){
    //         context.commit('increase',payload);
    //     },
    // }
    ,
    getters:counterGetters
    // {
    //     finalCounter(state){
    //         return state.counter * 3;
    //     },
    //     normalizedCounter(_,getters){
    //         const finalCounter =getters.finalCounter;
    //         if(finalCounter<0){
    //             return 0;
    //         }
    //         if(finalCounter>100){
    //             return 100;
    //         }
    //         return finalCounter;
    //     },
    // }
};
