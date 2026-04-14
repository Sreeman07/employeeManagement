import{create} from 'zustand'
export const useCounterStore=create((set)=>({
    newCounter:0,
    newCounter1:100,
    //add user state (name,age,email)
    user:{name:"ravi",email:"ravi@mail.com,age:21"},
    //function to change email
    changeEmail:()=>set({...user,email:"test@mail.com"}),
    //function to change name and age
    changeNameandAge:()=>set({...user,name:"bhanu",age:23}),
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0})
    

}))