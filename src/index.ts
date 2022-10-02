import { NumericConstant } from "./NumericConstant";
import { BinaryExpression } from "./BinaryExpression";
import { Expression } from "./Expression";
import { Operator } from "./Config";
import { RuntimeContext } from "./RuntimeContext";
import { ExpressionBuilder } from "./Builder";

const exp1 = new NumericConstant(10);
const exp2 = new NumericConstant(50);

const exp: Expression = new BinaryExpression(exp1, exp2, Operator.PLUS);

console.log(exp.evaluate(new RuntimeContext()));
const b = new ExpressionBuilder("10*(10)");
const e = b.getExpression();
console.log(e?.evaluate(null));


