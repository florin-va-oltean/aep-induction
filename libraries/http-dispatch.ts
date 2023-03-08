
//DEPS:event-specs:LATEST
/** 
 * this lib does exactly the same as the generic-dispatch lib 
 * but the function has more precise types and therefore while editing it
 * you will have automatic statement completion
 */


function dispatch(event:HttpRequest):string{
    if(event.body!==null && event.body!==undefined && event.body.step!==undefined && event.body.step!==null){
        return "test:induction:test_"+event.body.step;
    }else{
        return "test:induction:test";
    }
}