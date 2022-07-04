import { runSaga } from 'redux-saga'
import { fetchRandomGif } from '../../redux/sagas';

// example of saga test
describe('saga tests',() => {
  test('fetchRandomGif', async () => {
    const dispatched: any[] = [];
    await runSaga({dispatch: (action) => dispatched.push(action),},
      fetchRandomGif as any,
    ).toPromise();
    expect(dispatched[0].type).toEqual('RECEIVE_RANDOM_GIF');
  });
})