
import {
  Injectable
} from '@angular/core';


@Injectable()
export class DummyService {

  foo = () => {
    alert('Dummy');
  }
}
