const root = document.querySelector('#root')
root.textContent = new Date().toLocaleTimeString()

class Timer {
   #timerInstance

   constructor(root) {
      this.root = root
   }

   #getDate() {
      return  new Date().toLocaleTimeString()
   }

   #stopTimer() {
      clearInterval(this.#timerInstance)
      this.#timerInstance = null
   }

   app() {
      if (this.#timerInstance) return this.#stopTimer()
      this.#timerInstance = setInterval(() => this.root.textContent = this.#getDate(), 1000)
   }
}

const timer = new Timer(root).app()
root.onclick = () => timer.app()
