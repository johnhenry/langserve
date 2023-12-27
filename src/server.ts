import bodyParser from "body-parser";
import { playground_route, invoke_route } from "./routes";

import type { InputsMapInput } from "./types.d";

const add_express_routes = (
  app: any,
  chain: any,
  options: { inputs: InputsMapInput[]; path: string } = { inputs: [], path: "" }
) => {
  const { path } = options;
  // Playground
  app.get(`${path}/playground`, playground_route(chain, options));
  app.post(
    `${path}/playground`,
    bodyParser.urlencoded({
      // to support URL-encoded bodies
      extended: true,
    })
  );
  app.post(`${path}/playground`, playground_route(chain, options));
  // Invoke
  app.post(`${path}/invoke`, bodyParser.json());
  app.post(`${path}/invoke`, invoke_route(chain));
  return app;
};

export { add_express_routes };
