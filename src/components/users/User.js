import users from '../../SVGs/users.svg';
import { Route, Switch } from 'react-router-dom';
import { UserList } from './UserList';
import { UserAdd } from './UserAdd';
import { UserEdit } from './UserEdit';
import { UserProfile } from './UserProfile';

export function Users() {

  return (
    <div className='content'>
      <div className='svgs'>
        <object className='world' type="image/svg+xml" data={users}>
          <img src={users} alt="imagee" />
        </object>
      </div>
      <div className="Body">
        <section className='welcome'>
          <h1> Our precious USERS!</h1>
        </section>
        <section className='mainContent'>
          {/* routes for users */}
          <Switch>
            <Route exact path="/users/">
              <UserList />
            </Route>
            <Route exact path="/users/add">
              <UserAdd />
            </Route>
            <Route exact path="/users/edit/:id">
              <UserEdit />
            </Route>
            <Route exact path="/users/:id">
              <UserProfile />
            </Route>
          </Switch>
        </section>
      </div>
    </div>
  );
}





