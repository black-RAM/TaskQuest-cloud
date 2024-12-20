import Singleton from "./Singleton";
import PSE from "../enums/PubSubEvents";
import ToDoInterface from "../interfaces/ToDoInterface";
import updateToDoCounterParameters from "../interfaces/updateToDoCounterParams";
import uuid from "../types/uuid";

type EventSubscribersMap = {
  [event in PSE]: Function[];
};

class PubSub extends Singleton {
  private subscribers: EventSubscribersMap = {
    [PSE.PostMessage]: [],
    [PSE.PutCoins]: [],
    [PSE.PostCategory]: [],
    [PSE.PutProject]: [],
    [PSE.PutToDo]: [],
    [PSE.PostGroupCount]: [],
    [PSE.DeleteToDo]: [],
    [PSE.DeleteProject]: [],
    [PSE.PutProjectData]: []
  };

  subscribe(e: PSE, callback: Function) {
    this.subscribers[e].push(callback);
  };

  publish(e: PSE.PostMessage, d: string): void;
  publish(e: PSE.PutCoins, d: number): void;
  publish(e: PSE.PostCategory, d: uuid): void;
  publish(e: PSE.PutProject, d: uuid): void;
  publish(e: PSE.PutToDo, d: ToDoInterface): void;
  publish(e: PSE.PostGroupCount, d: updateToDoCounterParameters): void;
  publish(e: PSE.DeleteToDo, d: uuid): void;
  publish(e: PSE.DeleteProject, d: uuid): void;
  publish(e: PSE.PutProjectData): void;
  publish(e: PSE, d?: any): void {
    this.subscribers[e].forEach((callback) => callback(d));
  };
};

const PS = new PubSub();

export default PS;