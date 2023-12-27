import { Request, Response } from "express";
import { readFileSync } from "node:fs";

import parrot from "./parrot";
import share from "./share";
import arrowplane from "./arrowplane";

import type { InputsMapInput } from "./types.d";

const inputsMap = (body: any) => (input: InputsMapInput) => {
  let name,
    kind = "text",
    label;
  if (typeof input === "string") {
    name = input;
    label = name;
  } else {
    name = input.name;
    kind = input.kind || kind;
    label = input.label || name;
  }
  return `<label>${label}
  <textarea type="${kind}" name="${name}" >${body[name] || ""}</textarea>
</label>`;
};

const resetStyle = readFileSync(
  new URL("../style/reset.css", import.meta.url).pathname,
  "utf8"
);
const defaultStyle = readFileSync(
  new URL("../style/index.css", import.meta.url).pathname,
  "utf8"
);
const html = (form: string = "") => {
  return `<html>
  <head>
    <title>Playground</title>
    <script>
      const reset = ()=>{
        document.querySelectorAll('input, textarea').forEach((input)=>{
          input.value = '';
        });
      }
    </script>
    <link rel="icon" href="data:;base64,${parrot}">
    <style>
      ${resetStyle}
      ${defaultStyle}
    </style>
  </head>
  <body>
    <main>
      ${form}
    </main>
  </body>
</html>`;
};

const playground_route = (
  chain: any,
  options: { inputs: (string | InputsMapInput)[] } = { inputs: [] }
) => {
  return async (req: Request, res: Response) => {
    const { inputs } = options;
    const result =
      req.method === "POST"
        ? `<output>${await chain.invoke(req.body)}</output>`
        : null;
    res.set("Content-Type", "text/html");
    res.send(
      Buffer.from(
        html(`<form method="POST">
        <h1>🦜 <span class="first-word">LangServe</span> Playground</h1>
        <h2>Try It </h2>
        <div>
        <header><h3>Inputs</h3> <span class="reset" onclick="reset()">Reset</span></header>
        ${inputs.map(inputsMap(req.body || {}))}
        </div>${
          result !== null
            ? `<h2>Output</h2>
        <div>
        ${result}
        </div>`
            : ""
        }
        <footer>
        <!--<button type="button">${share} Share</button>-->
        <button type="submit">${arrowplane} Start</button>
        </footer>
      </form>
      `)
      )
    );
  };
};

import CryptoJS from "crypto-js";
import { v5 } from "uuid";

const invoke_route = (chain: any) => {
  return async (req: Request, res: Response) => {
    const run_id = v5(
      CryptoJS.MD5(JSON.stringify(req.body.input)).toString(),
      "1b671a64-40d5-491e-99b0-da01ff1f3341"
    );
    const output = await chain.invoke(req.body.input);
    res.set("Content-Type", "application/json");
    res.send(
      JSON.stringify({
        output,
        callback_events: [],
        metadata: { run_id },
      })
    );
  };
};

export { playground_route, invoke_route };
