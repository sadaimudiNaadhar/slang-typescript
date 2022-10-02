/// <summary>
///    Base class for all the Builders

import { Expression } from "./Expression";
import { RDParser } from "./RDParser";


class AbstractBuilder {

}

export class ExpressionBuilder extends AbstractBuilder {
    public exprString: string;

    constructor(expr: string) {
        super();
        this.exprString = expr;
    }

    getExpression(): Expression | null {
        try {
            const p = new RDParser(this.exprString);
            return p.callExpr();
        }
        catch (e) {
            return null;
        }
    }
}