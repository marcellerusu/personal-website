import { useState } from "react";
import styled from "styled-components";
import "../misc/peacock";

const stdLibCode =
  "const __Symbols = {}\n" +
  "class Schema {\n" +
  "  static for(schema) {\n" +
  "    if (schema instanceof Schema) return schema;\n" +
  "    if (schema instanceof Array) return new ArraySchema(schema);\n" +
  "    if (schema instanceof Function) return new FnSchema(schema);\n" +
  "    if (schema === undefined) return new AnySchema();\n" +
  "    // TODO: this should be more specific\n" +
  '    if (typeof schema === "object") return new RecordSchema(schema);\n' +
  '    const literals = ["boolean", "number", "string", "symbol"];\n' +
  "    if (literals.includes(typeof schema)) return new LiteralSchema(schema);\n" +
  "  }\n" +
  "\n" +
  "  static or(...schema) {\n" +
  "    return new OrSchema(...schema);\n" +
  "  }\n" +
  "\n" +
  "  static and(a, b) {\n" +
  "    [a, b] = [Schema.for(a), Schema.for(b)];\n" +
  "    if (a instanceof RecordSchema && b instanceof RecordSchema) {\n" +
  "      return a.combine(b);\n" +
  "    }\n" +
  "    return new AndSchema(a, b);\n" +
  "  }\n" +
  "\n" +
  "  static any(name) {\n" +
  "    return new AnySchema(name);\n" +
  "  }\n" +
  "\n" +
  "  static literal(value) {\n" +
  "    return new LiteralSchema(value);\n" +
  "  }\n" +
  "\n" +
  "\n" +
  "  constructor(schema) {\n" +
  "    this.schema = schema;\n" +
  "  }\n" +
  "\n" +
  "  valid(other) {\n" +
  "    throw null;\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "class OrSchema extends Schema {\n" +
  "  constructor(...schema) {\n" +
  "    super(schema.map(Schema.for));\n" +
  "  }\n" +
  "  valid(other) {\n" +
  "    return this.schema.some((s) => s.valid(other));\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "class AndSchema extends Schema {\n" +
  "  constructor(...schema) {\n" +
  "    super(schema.map(Schema.for));\n" +
  "  }\n" +
  "  valid(other) {\n" +
  "    return this.schema.every((s) => s.valid(other));\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "class RecordSchema extends Schema {\n" +
  "  constructor(schema) {\n" +
  "    super(Object.entries(schema).map(([k, v]) => [k, Schema.for(v)]));\n" +
  "  }\n" +
  "\n" +
  "  combine(other) {\n" +
  "    let newSchema = Object.fromEntries(this.schema);\n" +
  "    for (let [k, v] of other.schema) {\n" +
  "      newSchema[k] = v;\n" +
  "    }\n" +
  "    return new RecordSchema(newSchema);\n" +
  "  }\n" +
  "\n" +
  "  valid(other) {\n" +
  "    return this.schema.every(\n" +
  '      ([k, v]) => typeof other[k] !== "undefined" && v.valid(other[k])\n' +
  "    );\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "class ArraySchema extends Schema {\n" +
  "  valid(other) {\n" +
  "    if (!(other instanceof Array)) return false;\n" +
  "    return other.length === this.schema.length;\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "class FnSchema extends Schema {\n" +
  "  valid(other) {\n" +
  "    return this.schema(other);\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "class AnySchema extends Schema {\n" +
  "  valid(other) {\n" +
  "    return true;\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "class LiteralSchema extends Schema {\n" +
  "  valid(other) {\n" +
  "    return this.schema === other;\n" +
  "  }\n" +
  "}\n" +
  "const Peacock = {\n" +
  "  plus: (a, b) => a + b,\n" +
  "  minus: (a, b) => a - b,\n" +
  "  mult: (a, b) => a * b,\n" +
  "  div: (a, b) => a / b,\n" +
  "  gt: (a, b) => a > b,\n" +
  "  ls: (a, b) => a < b,\n" +
  "  gt_eq: (a, b) => a >= b,\n" +
  "  ls_eq: (a, b) => a <= b,\n" +
  "  symbol: symName => __Symbols[symName] || (__Symbols[symName] = Symbol(symName)),\n" +
  "  eq: (a, b) => a === b,\n" +
  "  Schema,\n" +
  "};\n" +
  "const print = (...params) => console.log(...params);\n";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20% 0 20%;
`;

const TextArea = styled.textarea`
  min-height: 35vh;
`;

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  button {
    width: 50%;
  }
`;

const Peacock = () => {
  const [src, setSrc] = useState("");
  const [output, setOutput] = useState("");
  const [val, setVal] = useState("");

  return (
    <Container>
      <TextArea value={src} onInput={(e) => setSrc(e.target.value)} />
      <Horizontal>
        <button
          onClick={() =>
            setOutput(window.peacockCompile(src).replace(stdLibCode, ""))
          }
        >
          compile
        </button>
        <button
          onClick={() => {
            try {
              const compiled = window.peacockCompile(src);
              eval(compiled);
            } catch (e) {
              console.error(e);
            }
          }}
        >
          run
        </button>
      </Horizontal>
      <TextArea value={output} readOnly />
    </Container>
  );
};

export default Peacock;
