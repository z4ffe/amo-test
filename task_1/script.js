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
      root.style.setProperty('color', 'rgba(228,229,234,0.56)')
      clearInterval(this.#timerInstance)
      this.#timerInstance = null
   }

   app() {
      if (this.#timerInstance) return this.#stopTimer()
      root.style.setProperty('color', 'rgba(228,229,234,0.86)')
      this.#timerInstance = setInterval(() => this.root.textContent = this.#getDate(), 1000)
   }
}

const timer = new Timer(root)
timer.app()

root.onclick = () => timer.app()
