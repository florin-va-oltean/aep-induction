
/**
 * this is the entry point in this library; this function is called by AEP runtime when 
 * a new event arrives in the queue and there is no associated session to it ; it means the AEP must 
 * start a new session and it must assign a flow/state machine to execute for this new session
 * @param event {Object} the incoming event decoded already as a JSON 
 * @return {string} a string in the format namespace:project:flow_name that points to the flow to be executed for this session 
 * 
 * IMPORTANT: this function is called only once per session, when session is created. 
 * The flow it returns is the main flow executed for this session (it is possible to have subflows called from the main flow)
 */
function dispatch(event:any):any{
    // notice that event can be anything; in fact, types are just used in design phase for automatic completion of statements in editor. 
    // return always the same flow (this is just a sample after all)

    if(event.body!==null && event.body!==undefined && event.body.step!==undefined && event.body.step!==null){
        // the body of request contains field step
        return "test:induction:test_" + event.body.step;
    }else{
        return "test:induction:test";
    }
}
