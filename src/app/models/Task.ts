import { Priority } from "./Priority";
export interface Task {
    id: string,
    name: string,
    done: boolean,
    priority?: Priority
}