function processData(input) {
    let inputs = input.split("\n");
    // console.log(inputs)
    let count = inputs.slice(1);
    // console.log('COUNT-->', count.length);
    let queue = [];
    
    for(let i = 1; i <= count.length; i++) {
      let args = inputs[i].split(' ');
      // console.log('args-->', args)
      let cmd = +args[0];
      // console.log('cmd-->', cmd);
      
      if(cmd === 1) {
        queue.push(args[1]);
      } else if(cmd === 2) {
        queue.shift();
      } else if (cmd === 3) {
        console.log(queue[0])
      }
    }   
  
} 


///////////////////////////////////////////////////////////////////
//a way using switch cases

function processData(input) {
    //Enter your code here
    let lines = input.split("\n");
    let count = +lines[0];
    let queue = [];
    for (let i = 1; i <= count; i++) {
        let args = lines[i].split(' ');
        let cmd = +args[0];
        let arg;
        switch (cmd) {
            case 1:
                arg = args[1];
                queue.push(arg);
                break;
            case 2:
                queue.shift();
                break;
            case 3:
                console.log(queue[0]);
                break;
        }
    }
} 
