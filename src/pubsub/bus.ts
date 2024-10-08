import Singleton from "../classes/Singleton"

class PubSubBus extends Singleton {
  private subscribers: { [eventName: string]: Function[] } = {}

  subscribe(eventName: string, callback: Function) {
    if (!this.subscribers[eventName]) {
      this.subscribers[eventName] = []
    }
    this.subscribers[eventName].push(callback)
  }

  publish(eventName: string, data?: any) {
    if (this.subscribers[eventName]) {
      this.subscribers[eventName].forEach((callback) => callback(data))
    }
  }
}

const bus = new PubSubBus()

export default bus