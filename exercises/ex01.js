// Create a function called processApplicants which processes a queue of applicants and remove those who do not meet all the requirements.
// Requirements:
// yearsExperience >= 2
// techStack = needs to have at least React experience
// Make sure to implement FIFO (First-In, First-Out)

const Queue = require('../lib/Queue')

function processApplicants(queue) {
  const tempQueue = new Queue();

// MAIN QUEUE:
  
  while(!queue.isEmpty()) {
    const applicants = queue.dequeue();

    if(
      applicants.yearsExperience >= 2 && 
      applicants.techStack.includes("React")) 
    { 
      tempQueue.enqueue(applicants)
    }
  } 

// TEMP QUEUE:

  while(!tempQueue.isEmpty()) {
    const removed = tempQueue.dequeue();
    queue.enqueue(removed);
  }  
}

const applicants = new Queue()
applicants.enqueue({ name: "John Smith", yearsExperience: 3, techStack: ['Angular', 'Node'] })
applicants.enqueue({ name: "Jane Smith", yearsExperience: 5, techStack: ['Node', 'React', 'Vue'] })
applicants.enqueue({ name: "Joe Smith", yearsExperience: 1, techStack: ['React', 'Node'] })
applicants.enqueue({ name: "Jack Smith", yearsExperience: 2, techStack: ['Node', 'MongoDB', 'React'] })

processApplicants(applicants)
console.log(applicants.printQueue())
// Expected output:
// { name: "Jane Smith", yearsExperience: 5, techStack: ['Node', 'React', 'Vue'] }
// { name: "Jack Smith", yearsExperience: 2, techStack: ['Node', 'MongoDB', 'React'] }
