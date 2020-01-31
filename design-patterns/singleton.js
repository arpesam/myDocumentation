/* You use a singleton when you need to manage a shared resource. For instance a printer spooler. Your application should only have a single instance of the spooler in order to avoid conflicting request for the same resource.

Or a database connection or a file manager etc */


function Process(state) {
  this.state = state
}

const Singleton = (function() {
  function ProcessManager() {
    this.numProcess = 0
  }

  let pManager 

  function createProcessManager() {
    pManager = new ProcessManager()
    return pManager
  }

  return {
    getProcessManager() {
      if (!pManager) pManager = createProcessManager()
      return pManager
    }
  }
})()

const processManager = Singleton.getProcessManager()
const processManager2 = Singleton.getProcessManager()

console.log(processManager === processManager2)

