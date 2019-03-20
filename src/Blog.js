 import React, {Component} from 'react';
 import Tble from './table12';
 import {Route,Link,Switch} from 'react-router-dom';
import Hidden from './Hidden';
import PostData from './PostData';

 export default class Blog extends Component {

    render(){
    
        return(
            <div>
                <header><nav>
                    <ul><li class="push_button btno red">
                    <Link to="/">Home</Link></li>
                        <li class="push_button blue"><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>All foods</Link></li>
                    </ul>
                    </nav>
                </header>
                <Switch>
                <Route  path="/"  exact component={Hidden}/>
                <Route path="/new-post" component={Tble} />
                <Route path="/food-details" component={PostData} />
                
                </Switch>
            </div>
        );
    }
 }