// src/app/state/counter.state.ts
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Increment } from './counter.action';

export interface CounterStateModel {
  count: number;
}

@State<CounterStateModel>({
  name: 'counter',
  defaults: {
    count: 0
  }
})
export class CounterState {
  @Selector()
  static getCount(state: CounterStateModel): number {
    return state.count;
  }

  @Action(Increment)
  increment({ getState, setState }: StateContext<CounterStateModel>) {
    const state = getState();
    setState({ count: state.count + 1 });
  }
}
