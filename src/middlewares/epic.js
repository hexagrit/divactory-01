import { createEpicMiddleware } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/add/observable/of';
import { ajax } from 'rxjs/add/observable/dom/ajax';
import { throw as _throw } from 'rxjs/add/observable/throw';
import { catch as _catch } from 'rxjs/add/operator/catch';
import { timer } from 'rxjs/add/observable/timer';
import { mergeMap } from 'rxjs/add/operator/mergeMap';
import { map } from 'rxjs/add/operator/map';
import { filter } from 'rxjs/add/operator/filter';
import { debounceTime } from 'rxjs/add/operator/debounceTime';
import { throttleTime } from 'rxjs/add/operator/throttleTime';
import { takeUntil } from 'rxjs/add/operator/takeUntil';
import { skipUntil } from 'rxjs/add/operator/skipUntil';

import { rootEpic } from '../ducks';

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    Observable,
    catch: _catch,
    throw: _throw,
    of,
    mergeMap,
    map,
    filter,
    ajax,
    debounceTime,
    distinctUntilChanged,
    throttleTime,
    timer,
    switchMap,
    takeUntil,
    merge,
    skipUntil,
    concatAll,
    concat
  }
});

export default epicMiddleware;
