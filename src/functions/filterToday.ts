import filterFunction from "../types/filterFunction";
import { today } from "./dateGenerators";
import timeNormalise from "./timeNormalise";

const filterToday: filterFunction = (todos) => todos.filter(todo =>  timeNormalise(todo.dueDate).getTime() === timeNormalise(today).getTime());

export default filterToday;