import { Priority } from "./Priority";
export interface Task {
    txt: string,
    done: boolean,
    priority?: Priority
}