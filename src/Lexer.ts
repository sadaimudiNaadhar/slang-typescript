import { Token } from "./Config";

export class Lexer {
    iExpr: string // Expression string
    index: number; // index into a character
    length: number; // Length of the string
    numbr: number; // Last grabbed number from the stream

    constructor(expr: string) {
        this.iExpr = expr;
        this.length = this.iExpr.length;
        this.index = 0;
        this.numbr = 0;
    }

    getToken(): Token {

        let tok: Token = Token.ILLEGAL_TOKEN;
        const iExpr = this.iExpr;
        const length = this.length;

        while (this.index < length && (iExpr[this.index] == ' ' || iExpr[this.index] == '\t'))
            this.index++;

        if (this.index == length)
            return Token.TOK_NULL;

        switch (iExpr[this.index]) {
            case '+':
                tok = Token.TOK_PLUS;
                this.index++;
                break;
            case '-':
                tok = Token.TOK_SUB;
                this.index++;
                break;
            case '/':
                tok = Token.TOK_DIV;
                this.index++;
                break;
            case '*':
                tok = Token.TOK_MUL;
                this.index++;
                break;
            case '(':
                tok = Token.TOK_OPAREN;
                this.index++;
                break;
            case ')':
                tok = Token.TOK_CPAREN;
                this.index++;
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                {
                    let str = "";
                    while (this.index < length &&
                        (iExpr[this.index] == '0' ||
                            iExpr[this.index] == '1' ||
                            iExpr[this.index] == '2' ||
                            iExpr[this.index] == '3' ||
                            iExpr[this.index] == '4' ||
                            iExpr[this.index] == '5' ||
                            iExpr[this.index] == '6' ||
                            iExpr[this.index] == '7' ||
                            iExpr[this.index] == '8' ||
                            iExpr[this.index] == '9')) {
                        str += String(iExpr[this.index]).toString();
                        this.index++;
                    }
                    this.numbr = Number(str);
                    tok = Token.TOK_DOUBLE;
                }
                break;
            default:
                console.log("Error While Analyzing Tokens");
                throw new Error("Error While Analyzing Tokens");
        }

        return tok;
    }

    getNumber(): number { 
        return this.numbr; 
    }
}

