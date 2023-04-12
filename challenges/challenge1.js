/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *    
 *  my answer: Step 1, Step 2, Step 3 because that is the order they appear
 *            in the program.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 * my answer: Step 1, Step 3, Step 2 (because there is a delay on the 
 *            snooze function)
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?  
 * 
 * my answer:  I think they will run in 1, 2, 3 because there is no delay.
 * was my guess correct? no (upon reviewing the material again, it might be because
 * the 0ms argument means at least 0ms, not exactly 0ms.  Plus, snooze() has
 * more steps that would take longer to complete)
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

