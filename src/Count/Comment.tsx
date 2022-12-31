// import * as React from 'react';
// import Count from './Count';

// interface Props {}

// interface State {
//   count: number;
// };

// export default class App extends React.Component<Props, State> {
//   state: State = {
//     count: 0
//   };

//   increment = () => {
//     this.setState({
//       count: (this.state.count + 1)
//     });
//   };

//   decrement = () => {
//     this.setState({
//       count: (this.state.count - 1)
//     });
//   };

//   render () {
//     return (
//       <div>
//         {/* <h1>{this.state.count}</h1> */}
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//         <Count count={this.state.count}/>
//       </div>
//     );
//   }
// }
import React from "react";

const Comment = () => {
  return <div>Comment</div>;
};

export default Comment;
//app .tsx
// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import AnotherType from "./Component/AnotherType";
// // import InputForm from "./Component/InputForm";
// // import SimpleType from "./Component/SimpleType";
// // import Singletype from "./Component/Singletype";
// // import ApiData from "./Component/ApiData";
// // import Userform from "./Container/UserForm";

// import UserList from "./Container/UserList";

// // import LoginForm from "./Component/Common";
// function App() {
//   return (
//     <div>
//       {/* <UserList/> */}
//       {/* <LoginForm/> */}
//       {/* <Userform /> */}
//       {/* input Form */}
//       {/* <InputForm /> */}
//       {/* another way call state type -1*/}
//       {/* <SimpleType /> */}
//       {/*another way call state type -2(key ,value )*/}
//       {/* <AnotherType /> */}
//       {/* single type state */}
//       {/* <Singletype /> */}
//       {/* Api Calling in typescript */}
//       {/* <ApiData/> */}
//     </div>
//   );
// }

// export default App;