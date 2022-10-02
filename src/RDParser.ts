import { BinaryExpression } from "./BinaryExpression";
import { Operator, Token } from "./Config";
import { Expression } from "./Expression";
import { Lexer } from "./Lexer";
import { NumericConstant } from "./NumericConstant";
import { UnaryExpression } from "./UnaryExpression";

export class RDParser extends Lexer {
    private currentToken: Token | undefined;

    constructor(str: string) {
        super(str);
    }

    callExpr(): Expression {
        this.currentToken = this.getToken();
        return this.expr();
    }

    expr(): Expression {
        let lToken: Token;
        let RetValue: Expression = this.term();
        while (this.currentToken == Token.TOK_PLUS || this.currentToken == Token.TOK_SUB) {
            lToken = this.currentToken;
            this.currentToken = this.getToken();
            const e1: Expression = this.expr();
            RetValue = new BinaryExpression(RetValue, e1,
                lToken == Token.TOK_PLUS ? Operator.PLUS : Operator.MINUS);

        }

        return RetValue;

    }

    term() {
        let lToken: Token;
        let RetValue: Expression = this.factor();

        while (this.currentToken == Token.TOK_MUL || this.currentToken == Token.TOK_DIV) {
            lToken = this.currentToken;
            this.currentToken = this.getToken();


            const e1: Expression = this.term();
            RetValue = new BinaryExpression(RetValue, e1,
                lToken == Token.TOK_MUL ? Operator.MUL : Operator.DIV);

        }

        return RetValue;
    }

    factor(): Expression {
        let lToken: Token;
        let RetValue: Expression;

        if (this.currentToken == Token.TOK_DOUBLE) {

            RetValue = new NumericConstant(this.getNumber());
            this.currentToken = this.getToken();

        }
        else if (this.currentToken == Token.TOK_OPAREN) {

            this.currentToken = this.getToken();

            RetValue = this.expr();  // Recurse

            if (this.currentToken != Token.TOK_CPAREN) {
                console.log("Missing Closing Parenthesis\n");
                throw new Error("Missing Closing Parenthesis");

            }
            this.currentToken = this.getToken();
        }

        else if (this.currentToken == Token.TOK_PLUS || this.currentToken == Token.TOK_SUB) {
            lToken = this.currentToken;
            this.currentToken = this.getToken();
            RetValue = this.factor();

            RetValue = new UnaryExpression(RetValue,
                lToken == Token.TOK_PLUS ? Operator.PLUS : Operator.MINUS);
        }
        else {

            console.log("Illegal Token");
            throw new Error("Illegal Token");
        }

        return RetValue;

    }
}
