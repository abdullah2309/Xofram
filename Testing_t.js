let BufferSize = 4;
let BufferValue = 7;
let DiceValue = 5;

let MoveOut = Math.floor(Math.random() * 10);     // random value
let preMoveOut = Math.floor(Math.random() * 10);  // random value

let End;

console.log("Initial MoveOut:", MoveOut);
console.log("Initial preMoveOut:", preMoveOut);

// // ---------------------------------SMALL
while (true) {

    End = BufferValue - MoveOut + preMoveOut;

    if (End === BufferSize) {
        console.log("Result is Equal to BufferSize");
        break;
    }

    // adjust automatically
    if (End < BufferSize) {
        preMoveOut++;   // increase this
    } else {
        MoveOut++;      // increase this
    }
}

console.log("Final MoveOut:", MoveOut);
console.log("Final preMoveOut:", preMoveOut);
console.log("End:", End);











// let BufferSize = 10;
// // let Start = 7;
// let BufferValue = 1;
// let DiceValue = 5;
// let MoveOut = 0;
// let End;


// // ---------------------------------SMALL

// let preMoveOut = 0;

// if (BufferValue <= BufferSize) {
//   console.log("small");

//  while (BufferValue - MoveOut + preMoveOut !== BufferSize) {
//   if(MoveOut >= 0) {
//     if(BufferValue - MoveOut + preMoveOut < BufferSize) {
//       MoveOut++;
//     } else {
//       preMoveOut++;
//     }
//   } else {
//     // MoveOut++;
//   }
// }

// End = BufferValue - MoveOut + preMoveOut;

// console.log("MoveOut:", MoveOut);
// console.log("preMoveOut:", preMoveOut);
// console.log("End:", End);
// }

// ---------------------------------BIG

// if(BufferValue > BufferSize) {
//   console.log("Big"); 
//   while (BufferValue - MoveOut > BufferSize ) {
//     MoveOut += 1;
//   }
//   End = BufferValue - MoveOut;
//   console.log("MoveOut: " + MoveOut);
//   console.log("End: " + End);
// }



