import nodeConfig from "@rakhal/eslint-config/node";

export default [...nodeConfig, { ignores: ["dist/"] }];
