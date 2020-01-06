// browers would like to repqint the screen 16.6ms,60 frame a second is ideal
// if there is code on the stack ,it can't actually do a render .

//  render & call stack all need stack empty 
// the difference is that the render is given a higner priority than your callback
// 1. render queue -> every 16ms it's going to queue a rend, wait till the stack is clear before it can actually do that render.
//  render block -> 
//                  1. can't select text on the screen 
//                  2. can't click things and see the response


// call stack 执行完了 首先render 然后再去push callback queue中的 anonymous callback
// render 比较厉害 所以你以最快的速度放入 callback queue中的 16ms 才有一次push到stack中的机会