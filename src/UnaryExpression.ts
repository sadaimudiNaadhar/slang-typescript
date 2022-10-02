import { Expression } from "./Expression";
import { Operator } from "./Config";
import { RuntimeContext } from "./RuntimeContext";

export class UnaryExpression extends Expression {

    private opr: Operator
    private exp: Expression

    constructor(exp: Expression, opr: Operator) {
        super();

        this.exp = exp;
        this.opr = opr;
    }

    evaluate(context: RuntimeContext): number {
        
        switch (this.opr) {
            case Operator.PLUS:
                return this.exp.evaluate(context);
            case Operator.MINUS:
                return - ( this.exp.evaluate(context) );
        }

        return NaN
    }
}