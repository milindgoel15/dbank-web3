import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'checkBalance' : ActorMethod<[], number>,
  'compound' : ActorMethod<[], undefined>,
  'topUp' : ActorMethod<[number], undefined>,
  'withDraw' : ActorMethod<[number], undefined>,
}
