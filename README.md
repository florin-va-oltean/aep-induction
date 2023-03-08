# Introduction

This is a sample repo with one flow (`test_<step>`, where <step> is a number) that tries to exemplify how you build a functional app progressively. 

# What do to first

1. select namespace `test` 
2. go to Design/Libraries and upload all libraries into runtime 
3. go to Environment settings/Ingress queues and for queue name `dispatch-script` select the dispatch lib `generic-dispatch` from drop down box
4. go to Design/Flows and upload all flows into runtime
5. go to "Flow test data"  and select the queuedb (only one option in drop down box) plus the rte instance. 

Now you are good to go! 

# Test step 1 

In this step, you will execute flow test_1 which does not do anything; but it shows how you can do tracing. 