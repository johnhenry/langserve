const RemoteRunnable = class {
  #invokeAddress: string = "";
  #fetch: Function;
  constructor(
    address: string = "",
    options: { fetch: Function } = { fetch: globalThis.fetch }
  ) {
    this.#invokeAddress = `${address}/invoke`;
    this.#fetch = options.fetch;
  }
  async invoke(
    input: any,
    options: any = { tags: [], metadata: {}, recursion_limit: 25 }
  ) {
    const { tags, metadata, recursion_limit } = options;
    const response = await this.#fetch(this.#invokeAddress, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input,
        config: { tags, metadata, recursion_limit },
        kwargs: {},
      }),
    });

    return await response.json().then(({ output }: any) => output);
  }
};

export { RemoteRunnable };
