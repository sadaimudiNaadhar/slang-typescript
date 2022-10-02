import { Expression } from "./Expression";
import { Operator } from "./Config";
import { RuntimeContext } from "./RuntimeContext";

export class BinaryExpression extends Expression {

    private opr: Operator
    private exp1: Expression
    private exp2: Expression

    constructor(exp1: Expression, exp2: Expression, opr: Operator) {
        super();

        this.exp1 = exp1;
        this.exp2 = exp2;
        this.opr = opr;
    }

    evaluate(context: RuntimeContext): number {
        
        switch (this.opr) {
            case Operator.PLUS:
                return this.exp1.evaluate(context) + this.exp2.evaluate(context);
            case Operator.MINUS:
                return this.exp1.evaluate(context) - this.exp2.evaluate(context);
            case Operator.DIV:
                return this.exp1.evaluate(context) / this.exp2.evaluate(context);
            case Operator.MUL:
                return this.exp1.evaluate(context) * this.exp2.evaluate(context);
        }

        return NaN;
    }
}