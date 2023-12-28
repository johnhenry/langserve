RunnableSequence {
  lc_serializable: true,
  lc_kwargs: {
    first: ChatPromptTemplate {
      lc_serializable: true,
      lc_kwargs: {
        inputVariables: [ 'text' ],
        promptMessages: [
          SystemMessagePromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              prompt: PromptTemplate {
                lc_serializable: true,
                lc_kwargs: {
                  inputVariables: [],
                  templateFormat: 'f-string',
                  template: 'You are a helpful assistant who generates comma separated lists.\n' +
                    'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                    'ONLY return a comma separated list, and nothing more.'
                },
                lc_runnable: true,
                lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
                inputVariables: [],
                outputParser: undefined,
                partialVariables: undefined,
                templateFormat: 'f-string',
                template: 'You are a helpful assistant who generates comma separated lists.\n' +
                  'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                  'ONLY return a comma separated list, and nothing more.',
                validateTemplate: true
              }
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
            prompt: PromptTemplate {
              lc_serializable: true,
              lc_kwargs: {
                inputVariables: [],
                templateFormat: 'f-string',
                template: 'You are a helpful assistant who generates comma separated lists.\n' +
                  'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                  'ONLY return a comma separated list, and nothing more.'
              },
              lc_runnable: true,
              lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
              inputVariables: [],
              outputParser: undefined,
              partialVariables: undefined,
              templateFormat: 'f-string',
              template: 'You are a helpful assistant who generates comma separated lists.\n' +
                'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                'ONLY return a comma separated list, and nothing more.',
              validateTemplate: true
            }
          },
          HumanMessagePromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              prompt: PromptTemplate {
                lc_serializable: true,
                lc_kwargs: {
                  inputVariables: [ 'text' ],
                  templateFormat: 'f-string',
                  template: '{text}'
                },
                lc_runnable: true,
                lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
                inputVariables: [ 'text' ],
                outputParser: undefined,
                partialVariables: undefined,
                templateFormat: 'f-string',
                template: '{text}',
                validateTemplate: true
              }
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
            prompt: PromptTemplate {
              lc_serializable: true,
              lc_kwargs: {
                inputVariables: [ 'text' ],
                templateFormat: 'f-string',
                template: '{text}'
              },
              lc_runnable: true,
              lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
              inputVariables: [ 'text' ],
              outputParser: undefined,
              partialVariables: undefined,
              templateFormat: 'f-string',
              template: '{text}',
              validateTemplate: true
            }
          }
        ],
        partialVariables: [Object: null prototype] {}
      },
      lc_runnable: true,
      lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
      inputVariables: [ 'text' ],
      outputParser: undefined,
      partialVariables: [Object: null prototype] {},
      promptMessages: [
        SystemMessagePromptTemplate {
          lc_serializable: true,
          lc_kwargs: {
            prompt: PromptTemplate {
              lc_serializable: true,
              lc_kwargs: {
                inputVariables: [],
                templateFormat: 'f-string',
                template: 'You are a helpful assistant who generates comma separated lists.\n' +
                  'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                  'ONLY return a comma separated list, and nothing more.'
              },
              lc_runnable: true,
              lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
              inputVariables: [],
              outputParser: undefined,
              partialVariables: undefined,
              templateFormat: 'f-string',
              template: 'You are a helpful assistant who generates comma separated lists.\n' +
                'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                'ONLY return a comma separated list, and nothing more.',
              validateTemplate: true
            }
          },
          lc_runnable: true,
          lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
          prompt: PromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              inputVariables: [],
              templateFormat: 'f-string',
              template: 'You are a helpful assistant who generates comma separated lists.\n' +
                'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                'ONLY return a comma separated list, and nothing more.'
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
            inputVariables: [],
            outputParser: undefined,
            partialVariables: undefined,
            templateFormat: 'f-string',
            template: 'You are a helpful assistant who generates comma separated lists.\n' +
              'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
              'ONLY return a comma separated list, and nothing more.',
            validateTemplate: true
          }
        },
        HumanMessagePromptTemplate {
          lc_serializable: true,
          lc_kwargs: {
            prompt: PromptTemplate {
              lc_serializable: true,
              lc_kwargs: {
                inputVariables: [ 'text' ],
                templateFormat: 'f-string',
                template: '{text}'
              },
              lc_runnable: true,
              lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
              inputVariables: [ 'text' ],
              outputParser: undefined,
              partialVariables: undefined,
              templateFormat: 'f-string',
              template: '{text}',
              validateTemplate: true
            }
          },
          lc_runnable: true,
          lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
          prompt: PromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              inputVariables: [ 'text' ],
              templateFormat: 'f-string',
              template: '{text}'
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
            inputVariables: [ 'text' ],
            outputParser: undefined,
            partialVariables: undefined,
            templateFormat: 'f-string',
            template: '{text}',
            validateTemplate: true
          }
        }
      ],
      validateTemplate: true
    },
    middle: [
      ChatOpenAI {
        lc_serializable: true,
        lc_kwargs: {
          callbacks: undefined,
          openAIApiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        lc_runnable: true,
        verbose: false,
        callbacks: undefined,
        tags: [],
        metadata: {},
        caller: AsyncCaller {
          maxConcurrency: Infinity,
          maxRetries: 6,
          onFailedAttempt: [Function: defaultFailedAttemptHandler],
          queue: PQueue {
            _events: Events <[Object: null prototype] {}> {},
            _eventsCount: 0,
            _intervalCount: 0,
            _intervalEnd: 0,
            _pendingCount: 0,
            _resolveEmpty: [Function: empty],
            _resolveIdle: [Function: empty],
            _carryoverConcurrencyCount: false,
            _isIntervalIgnored: true,
            _intervalCap: Infinity,
            _interval: 0,
            _queue: PriorityQueue { _queue: [] },
            _queueClass: [class PriorityQueue],
            _concurrency: Infinity,
            _intervalId: undefined,
            _timeout: undefined,
            _throwOnTimeout: false,
            _isPaused: false
          }
        },
        cache: undefined,
        _encoding: undefined,
        lc_namespace: [ 'langchain', 'chat_models', 'openai' ],
        temperature: 1,
        topP: 1,
        frequencyPenalty: 0,
        presencePenalty: 0,
        n: 1,
        logitBias: undefined,
        modelName: 'gpt-3.5-turbo',
        modelKwargs: {},
        stop: undefined,
        user: undefined,
        timeout: undefined,
        streaming: false,
        maxTokens: undefined,
        openAIApiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        azureOpenAIApiVersion: undefined,
        azureOpenAIApiKey: undefined,
        azureOpenAIApiInstanceName: undefined,
        azureOpenAIApiDeploymentName: undefined,
        azureOpenAIBasePath: undefined,
        organization: undefined,
        client: undefined,
        clientConfig: {
          apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          organization: undefined,
          baseURL: undefined,
          dangerouslyAllowBrowser: true,
          defaultHeaders: undefined,
          defaultQuery: undefined
        }
      }
    ],
    last: CommaSeparatedListOutputParser {
      lc_serializable: false,
      lc_kwargs: {},
      lc_runnable: true,
      lc_namespace: [ 'comma-separated-list' ]
    }
  },
  lc_runnable: true,
  first: ChatPromptTemplate {
    lc_serializable: true,
    lc_kwargs: {
      inputVariables: [ 'text' ],
      promptMessages: [
        SystemMessagePromptTemplate {
          lc_serializable: true,
          lc_kwargs: {
            prompt: PromptTemplate {
              lc_serializable: true,
              lc_kwargs: {
                inputVariables: [],
                templateFormat: 'f-string',
                template: 'You are a helpful assistant who generates comma separated lists.\n' +
                  'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                  'ONLY return a comma separated list, and nothing more.'
              },
              lc_runnable: true,
              lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
              inputVariables: [],
              outputParser: undefined,
              partialVariables: undefined,
              templateFormat: 'f-string',
              template: 'You are a helpful assistant who generates comma separated lists.\n' +
                'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                'ONLY return a comma separated list, and nothing more.',
              validateTemplate: true
            }
          },
          lc_runnable: true,
          lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
          prompt: PromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              inputVariables: [],
              templateFormat: 'f-string',
              template: 'You are a helpful assistant who generates comma separated lists.\n' +
                'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                'ONLY return a comma separated list, and nothing more.'
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
            inputVariables: [],
            outputParser: undefined,
            partialVariables: undefined,
            templateFormat: 'f-string',
            template: 'You are a helpful assistant who generates comma separated lists.\n' +
              'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
              'ONLY return a comma separated list, and nothing more.',
            validateTemplate: true
          }
        },
        HumanMessagePromptTemplate {
          lc_serializable: true,
          lc_kwargs: {
            prompt: PromptTemplate {
              lc_serializable: true,
              lc_kwargs: {
                inputVariables: [ 'text' ],
                templateFormat: 'f-string',
                template: '{text}'
              },
              lc_runnable: true,
              lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
              inputVariables: [ 'text' ],
              outputParser: undefined,
              partialVariables: undefined,
              templateFormat: 'f-string',
              template: '{text}',
              validateTemplate: true
            }
          },
          lc_runnable: true,
          lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
          prompt: PromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              inputVariables: [ 'text' ],
              templateFormat: 'f-string',
              template: '{text}'
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
            inputVariables: [ 'text' ],
            outputParser: undefined,
            partialVariables: undefined,
            templateFormat: 'f-string',
            template: '{text}',
            validateTemplate: true
          }
        }
      ],
      partialVariables: [Object: null prototype] {}
    },
    lc_runnable: true,
    lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
    inputVariables: [ 'text' ],
    outputParser: undefined,
    partialVariables: [Object: null prototype] {},
    promptMessages: [
      SystemMessagePromptTemplate {
        lc_serializable: true,
        lc_kwargs: {
          prompt: PromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              inputVariables: [],
              templateFormat: 'f-string',
              template: 'You are a helpful assistant who generates comma separated lists.\n' +
                'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                'ONLY return a comma separated list, and nothing more.'
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
            inputVariables: [],
            outputParser: undefined,
            partialVariables: undefined,
            templateFormat: 'f-string',
            template: 'You are a helpful assistant who generates comma separated lists.\n' +
              'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
              'ONLY return a comma separated list, and nothing more.',
            validateTemplate: true
          }
        },
        lc_runnable: true,
        lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
        prompt: PromptTemplate {
          lc_serializable: true,
          lc_kwargs: {
            inputVariables: [],
            templateFormat: 'f-string',
            template: 'You are a helpful assistant who generates comma separated lists.\n' +
              'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
              'ONLY return a comma separated list, and nothing more.'
          },
          lc_runnable: true,
          lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
          inputVariables: [],
          outputParser: undefined,
          partialVariables: undefined,
          templateFormat: 'f-string',
          template: 'You are a helpful assistant who generates comma separated lists.\n' +
            'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
            'ONLY return a comma separated list, and nothing more.',
          validateTemplate: true
        }
      },
      HumanMessagePromptTemplate {
        lc_serializable: true,
        lc_kwargs: {
          prompt: PromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              inputVariables: [ 'text' ],
              templateFormat: 'f-string',
              template: '{text}'
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
            inputVariables: [ 'text' ],
            outputParser: undefined,
            partialVariables: undefined,
            templateFormat: 'f-string',
            template: '{text}',
            validateTemplate: true
          }
        },
        lc_runnable: true,
        lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
        prompt: PromptTemplate {
          lc_serializable: true,
          lc_kwargs: {
            inputVariables: [ 'text' ],
            templateFormat: 'f-string',
            template: '{text}'
          },
          lc_runnable: true,
          lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
          inputVariables: [ 'text' ],
          outputParser: undefined,
          partialVariables: undefined,
          templateFormat: 'f-string',
          template: '{text}',
          validateTemplate: true
        }
      }
    ],
    validateTemplate: true
  },
  middle: [
    ChatOpenAI {
      lc_serializable: true,
      lc_kwargs: {
        callbacks: undefined,
        openAIApiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      },
      lc_runnable: true,
      verbose: false,
      callbacks: undefined,
      tags: [],
      metadata: {},
      caller: AsyncCaller {
        maxConcurrency: Infinity,
        maxRetries: 6,
        onFailedAttempt: [Function: defaultFailedAttemptHandler],
        queue: PQueue {
          _events: Events <[Object: null prototype] {}> {},
          _eventsCount: 0,
          _intervalCount: 0,
          _intervalEnd: 0,
          _pendingCount: 0,
          _resolveEmpty: [Function: empty],
          _resolveIdle: [Function: empty],
          _carryoverConcurrencyCount: false,
          _isIntervalIgnored: true,
          _intervalCap: Infinity,
          _interval: 0,
          _queue: PriorityQueue { _queue: [] },
          _queueClass: [class PriorityQueue],
          _concurrency: Infinity,
          _intervalId: undefined,
          _timeout: undefined,
          _throwOnTimeout: false,
          _isPaused: false
        }
      },
      cache: undefined,
      _encoding: undefined,
      lc_namespace: [ 'langchain', 'chat_models', 'openai' ],
      temperature: 1,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      n: 1,
      logitBias: undefined,
      modelName: 'gpt-3.5-turbo',
      modelKwargs: {},
      stop: undefined,
      user: undefined,
      timeout: undefined,
      streaming: false,
      maxTokens: undefined,
      openAIApiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      azureOpenAIApiVersion: undefined,
      azureOpenAIApiKey: undefined,
      azureOpenAIApiInstanceName: undefined,
      azureOpenAIApiDeploymentName: undefined,
      azureOpenAIBasePath: undefined,
      organization: undefined,
      client: undefined,
      clientConfig: {
        apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        organization: undefined,
        baseURL: undefined,
        dangerouslyAllowBrowser: true,
        defaultHeaders: undefined,
        defaultQuery: undefined
      }
    }
  ],
  last: CommaSeparatedListOutputParser {
    lc_serializable: false,
    lc_kwargs: {},
    lc_runnable: true,
    lc_namespace: [ 'comma-separated-list' ]
  },
  lc_namespace: [ 'langchain_core', 'runnables' ]
}
RunnableSequence {
  lc_serializable: true,
  lc_kwargs: {
    first: ChatPromptTemplate {
      lc_serializable: true,
      lc_kwargs: {
        inputVariables: [ 'text' ],
        promptMessages: [
          SystemMessagePromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              prompt: PromptTemplate {
                lc_serializable: true,
                lc_kwargs: {
                  inputVariables: [],
                  templateFormat: 'f-string',
                  template: 'You are a helpful assistant who generates comma separated lists.\n' +
                    'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                    'ONLY return a comma separated list, and nothing more.'
                },
                lc_runnable: true,
                lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
                inputVariables: [],
                outputParser: undefined,
                partialVariables: undefined,
                templateFormat: 'f-string',
                template: 'You are a helpful assistant who generates comma separated lists.\n' +
                  'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                  'ONLY return a comma separated list, and nothing more.',
                validateTemplate: true
              }
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
            prompt: PromptTemplate {
              lc_serializable: true,
              lc_kwargs: {
                inputVariables: [],
                templateFormat: 'f-string',
                template: 'You are a helpful assistant who generates comma separated lists.\n' +
                  'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                  'ONLY return a comma separated list, and nothing more.'
              },
              lc_runnable: true,
              lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
              inputVariables: [],
              outputParser: undefined,
              partialVariables: undefined,
              templateFormat: 'f-string',
              template: 'You are a helpful assistant who generates comma separated lists.\n' +
                'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                'ONLY return a comma separated list, and nothing more.',
              validateTemplate: true
            }
          },
          HumanMessagePromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              prompt: PromptTemplate {
                lc_serializable: true,
                lc_kwargs: {
                  inputVariables: [ 'text' ],
                  templateFormat: 'f-string',
                  template: '{text}'
                },
                lc_runnable: true,
                lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
                inputVariables: [ 'text' ],
                outputParser: undefined,
                partialVariables: undefined,
                templateFormat: 'f-string',
                template: '{text}',
                validateTemplate: true
              }
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
            prompt: PromptTemplate {
              lc_serializable: true,
              lc_kwargs: {
                inputVariables: [ 'text' ],
                templateFormat: 'f-string',
                template: '{text}'
              },
              lc_runnable: true,
              lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
              inputVariables: [ 'text' ],
              outputParser: undefined,
              partialVariables: undefined,
              templateFormat: 'f-string',
              template: '{text}',
              validateTemplate: true
            }
          }
        ],
        partialVariables: [Object: null prototype] {}
      },
      lc_runnable: true,
      lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
      inputVariables: [ 'text' ],
      outputParser: undefined,
      partialVariables: [Object: null prototype] {},
      promptMessages: [
        SystemMessagePromptTemplate {
          lc_serializable: true,
          lc_kwargs: {
            prompt: PromptTemplate {
              lc_serializable: true,
              lc_kwargs: {
                inputVariables: [],
                templateFormat: 'f-string',
                template: 'You are a helpful assistant who generates comma separated lists.\n' +
                  'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                  'ONLY return a comma separated list, and nothing more.'
              },
              lc_runnable: true,
              lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
              inputVariables: [],
              outputParser: undefined,
              partialVariables: undefined,
              templateFormat: 'f-string',
              template: 'You are a helpful assistant who generates comma separated lists.\n' +
                'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                'ONLY return a comma separated list, and nothing more.',
              validateTemplate: true
            }
          },
          lc_runnable: true,
          lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
          prompt: PromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              inputVariables: [],
              templateFormat: 'f-string',
              template: 'You are a helpful assistant who generates comma separated lists.\n' +
                'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                'ONLY return a comma separated list, and nothing more.'
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
            inputVariables: [],
            outputParser: undefined,
            partialVariables: undefined,
            templateFormat: 'f-string',
            template: 'You are a helpful assistant who generates comma separated lists.\n' +
              'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
              'ONLY return a comma separated list, and nothing more.',
            validateTemplate: true
          }
        },
        HumanMessagePromptTemplate {
          lc_serializable: true,
          lc_kwargs: {
            prompt: PromptTemplate {
              lc_serializable: true,
              lc_kwargs: {
                inputVariables: [ 'text' ],
                templateFormat: 'f-string',
                template: '{text}'
              },
              lc_runnable: true,
              lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
              inputVariables: [ 'text' ],
              outputParser: undefined,
              partialVariables: undefined,
              templateFormat: 'f-string',
              template: '{text}',
              validateTemplate: true
            }
          },
          lc_runnable: true,
          lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
          prompt: PromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              inputVariables: [ 'text' ],
              templateFormat: 'f-string',
              template: '{text}'
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
            inputVariables: [ 'text' ],
            outputParser: undefined,
            partialVariables: undefined,
            templateFormat: 'f-string',
            template: '{text}',
            validateTemplate: true
          }
        }
      ],
      validateTemplate: true
    },
    middle: [
      ChatOpenAI {
        lc_serializable: true,
        lc_kwargs: {
          callbacks: undefined,
          openAIApiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        lc_runnable: true,
        verbose: false,
        callbacks: undefined,
        tags: [],
        metadata: {},
        caller: AsyncCaller {
          maxConcurrency: Infinity,
          maxRetries: 6,
          onFailedAttempt: [Function: defaultFailedAttemptHandler],
          queue: PQueue {
            _events: Events <[Object: null prototype] {}> {},
            _eventsCount: 0,
            _intervalCount: 0,
            _intervalEnd: 0,
            _pendingCount: 0,
            _resolveEmpty: [Function: empty],
            _resolveIdle: [Function: empty],
            _carryoverConcurrencyCount: false,
            _isIntervalIgnored: true,
            _intervalCap: Infinity,
            _interval: 0,
            _queue: PriorityQueue { _queue: [] },
            _queueClass: [class PriorityQueue],
            _concurrency: Infinity,
            _intervalId: undefined,
            _timeout: undefined,
            _throwOnTimeout: false,
            _isPaused: false
          }
        },
        cache: undefined,
        _encoding: undefined,
        lc_namespace: [ 'langchain', 'chat_models', 'openai' ],
        temperature: 1,
        topP: 1,
        frequencyPenalty: 0,
        presencePenalty: 0,
        n: 1,
        logitBias: undefined,
        modelName: 'gpt-3.5-turbo',
        modelKwargs: {},
        stop: undefined,
        user: undefined,
        timeout: undefined,
        streaming: false,
        maxTokens: undefined,
        openAIApiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        azureOpenAIApiVersion: undefined,
        azureOpenAIApiKey: undefined,
        azureOpenAIApiInstanceName: undefined,
        azureOpenAIApiDeploymentName: undefined,
        azureOpenAIBasePath: undefined,
        organization: undefined,
        client: undefined,
        clientConfig: {
          apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          organization: undefined,
          baseURL: undefined,
          dangerouslyAllowBrowser: true,
          defaultHeaders: undefined,
          defaultQuery: undefined
        }
      }
    ],
    last: CommaSeparatedListOutputParser {
      lc_serializable: false,
      lc_kwargs: {},
      lc_runnable: true,
      lc_namespace: [ 'comma-separated-list' ]
    }
  },
  lc_runnable: true,
  first: ChatPromptTemplate {
    lc_serializable: true,
    lc_kwargs: {
      inputVariables: [ 'text' ],
      promptMessages: [
        SystemMessagePromptTemplate {
          lc_serializable: true,
          lc_kwargs: {
            prompt: PromptTemplate {
              lc_serializable: true,
              lc_kwargs: {
                inputVariables: [],
                templateFormat: 'f-string',
                template: 'You are a helpful assistant who generates comma separated lists.\n' +
                  'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                  'ONLY return a comma separated list, and nothing more.'
              },
              lc_runnable: true,
              lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
              inputVariables: [],
              outputParser: undefined,
              partialVariables: undefined,
              templateFormat: 'f-string',
              template: 'You are a helpful assistant who generates comma separated lists.\n' +
                'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                'ONLY return a comma separated list, and nothing more.',
              validateTemplate: true
            }
          },
          lc_runnable: true,
          lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
          prompt: PromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              inputVariables: [],
              templateFormat: 'f-string',
              template: 'You are a helpful assistant who generates comma separated lists.\n' +
                'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                'ONLY return a comma separated list, and nothing more.'
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
            inputVariables: [],
            outputParser: undefined,
            partialVariables: undefined,
            templateFormat: 'f-string',
            template: 'You are a helpful assistant who generates comma separated lists.\n' +
              'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
              'ONLY return a comma separated list, and nothing more.',
            validateTemplate: true
          }
        },
        HumanMessagePromptTemplate {
          lc_serializable: true,
          lc_kwargs: {
            prompt: PromptTemplate {
              lc_serializable: true,
              lc_kwargs: {
                inputVariables: [ 'text' ],
                templateFormat: 'f-string',
                template: '{text}'
              },
              lc_runnable: true,
              lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
              inputVariables: [ 'text' ],
              outputParser: undefined,
              partialVariables: undefined,
              templateFormat: 'f-string',
              template: '{text}',
              validateTemplate: true
            }
          },
          lc_runnable: true,
          lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
          prompt: PromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              inputVariables: [ 'text' ],
              templateFormat: 'f-string',
              template: '{text}'
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
            inputVariables: [ 'text' ],
            outputParser: undefined,
            partialVariables: undefined,
            templateFormat: 'f-string',
            template: '{text}',
            validateTemplate: true
          }
        }
      ],
      partialVariables: [Object: null prototype] {}
    },
    lc_runnable: true,
    lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
    inputVariables: [ 'text' ],
    outputParser: undefined,
    partialVariables: [Object: null prototype] {},
    promptMessages: [
      SystemMessagePromptTemplate {
        lc_serializable: true,
        lc_kwargs: {
          prompt: PromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              inputVariables: [],
              templateFormat: 'f-string',
              template: 'You are a helpful assistant who generates comma separated lists.\n' +
                'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
                'ONLY return a comma separated list, and nothing more.'
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
            inputVariables: [],
            outputParser: undefined,
            partialVariables: undefined,
            templateFormat: 'f-string',
            template: 'You are a helpful assistant who generates comma separated lists.\n' +
              'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
              'ONLY return a comma separated list, and nothing more.',
            validateTemplate: true
          }
        },
        lc_runnable: true,
        lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
        prompt: PromptTemplate {
          lc_serializable: true,
          lc_kwargs: {
            inputVariables: [],
            templateFormat: 'f-string',
            template: 'You are a helpful assistant who generates comma separated lists.\n' +
              'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
              'ONLY return a comma separated list, and nothing more.'
          },
          lc_runnable: true,
          lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
          inputVariables: [],
          outputParser: undefined,
          partialVariables: undefined,
          templateFormat: 'f-string',
          template: 'You are a helpful assistant who generates comma separated lists.\n' +
            'A user will pass in a category, and you should generate 5 objects in that category in a comma separated list.\n' +
            'ONLY return a comma separated list, and nothing more.',
          validateTemplate: true
        }
      },
      HumanMessagePromptTemplate {
        lc_serializable: true,
        lc_kwargs: {
          prompt: PromptTemplate {
            lc_serializable: true,
            lc_kwargs: {
              inputVariables: [ 'text' ],
              templateFormat: 'f-string',
              template: '{text}'
            },
            lc_runnable: true,
            lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
            inputVariables: [ 'text' ],
            outputParser: undefined,
            partialVariables: undefined,
            templateFormat: 'f-string',
            template: '{text}',
            validateTemplate: true
          }
        },
        lc_runnable: true,
        lc_namespace: [ 'langchain_core', 'prompts', 'chat' ],
        prompt: PromptTemplate {
          lc_serializable: true,
          lc_kwargs: {
            inputVariables: [ 'text' ],
            templateFormat: 'f-string',
            template: '{text}'
          },
          lc_runnable: true,
          lc_namespace: [ 'langchain_core', 'prompts', 'prompt' ],
          inputVariables: [ 'text' ],
          outputParser: undefined,
          partialVariables: undefined,
          templateFormat: 'f-string',
          template: '{text}',
          validateTemplate: true
        }
      }
    ],
    validateTemplate: true
  },
  middle: [
    ChatOpenAI {
      lc_serializable: true,
      lc_kwargs: {
        callbacks: undefined,
        openAIApiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      },
      lc_runnable: true,
      verbose: false,
      callbacks: undefined,
      tags: [],
      metadata: {},
      caller: AsyncCaller {
        maxConcurrency: Infinity,
        maxRetries: 6,
        onFailedAttempt: [Function: defaultFailedAttemptHandler],
        queue: PQueue {
          _events: Events <[Object: null prototype] {}> {},
          _eventsCount: 0,
          _intervalCount: 0,
          _intervalEnd: 0,
          _pendingCount: 0,
          _resolveEmpty: [Function: empty],
          _resolveIdle: [Function: empty],
          _carryoverConcurrencyCount: false,
          _isIntervalIgnored: true,
          _intervalCap: Infinity,
          _interval: 0,
          _queue: PriorityQueue { _queue: [] },
          _queueClass: [class PriorityQueue],
          _concurrency: Infinity,
          _intervalId: undefined,
          _timeout: undefined,
          _throwOnTimeout: false,
          _isPaused: false
        }
      },
      cache: undefined,
      _encoding: undefined,
      lc_namespace: [ 'langchain', 'chat_models', 'openai' ],
      temperature: 1,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      n: 1,
      logitBias: undefined,
      modelName: 'gpt-3.5-turbo',
      modelKwargs: {},
      stop: undefined,
      user: undefined,
      timeout: undefined,
      streaming: false,
      maxTokens: undefined,
      openAIApiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      azureOpenAIApiVersion: undefined,
      azureOpenAIApiKey: undefined,
      azureOpenAIApiInstanceName: undefined,
      azureOpenAIApiDeploymentName: undefined,
      azureOpenAIBasePath: undefined,
      organization: undefined,
      client: undefined,
      clientConfig: {
        apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        organization: undefined,
        baseURL: undefined,
        dangerouslyAllowBrowser: true,
        defaultHeaders: undefined,
        defaultQuery: undefined
      }
    }
  ],
  last: CommaSeparatedListOutputParser {
    lc_serializable: false,
    lc_kwargs: {},
    lc_runnable: true,
    lc_namespace: [ 'comma-separated-list' ]
  },
  lc_namespace: [ 'langchain_core', 'runnables' ]
}
