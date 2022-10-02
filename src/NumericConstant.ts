import { Expression } from "./Expression";
import { RuntimeContext } from "./RuntimeContext";

export class NumericConstant extends Expression {

    private value: number

    constructor(value: number) {
        super();

        this.value = value;
    }

    evaluate(context: RuntimeContext): number {
        return this.value
    }
}