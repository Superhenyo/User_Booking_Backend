[**backend**](../README.md)

***

[backend](../globals.md) / default

# Function: default()

## Call Signature

> **default**(`req`, `res`): `any`

Express instance itself is a request handler, which could be invoked without
third argument.

### Parameters

#### req

`IncomingMessage` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

#### res

`ServerResponse`\<`IncomingMessage`\> | `Response`\<`any`, `Record`\<`string`, `any`\>, `number`\>

### Returns

`any`

### Defined in

[src/index.ts:13](https://github.com/Superhenyo/Users-Backend/blob/0e94953d467a98ce6cd5597e41eaac30e0705666/src/index.ts#L13)

## Call Signature

> **default**(`req`, `res`, `next`): `void` \| `Promise`\<`void`\>

### Parameters

#### req

`Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

#### res

`Response`\<`any`, `Record`\<`string`, `any`\>, `number`\>

#### next

`NextFunction`

### Returns

`void` \| `Promise`\<`void`\>

### Defined in

[src/index.ts:13](https://github.com/Superhenyo/Users-Backend/blob/0e94953d467a98ce6cd5597e41eaac30e0705666/src/index.ts#L13)
