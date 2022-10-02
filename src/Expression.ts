import { RuntimeContext } from "./RuntimeContext";

export abstract class Expression {
 
    abstract evaluate(context:RuntimeContext | null): number
}
