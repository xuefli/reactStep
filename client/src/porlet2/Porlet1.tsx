import * as React from "react";

// import { Loadable } from "react-loadable";
import { Porlet21 } from "./porlet21/Porlet21";

// const LoadableComponent = Loadable({
//     loader: () => import('./porlet21/Porlet21'),
//     loading: undefined,
//   });

export class Porlet1 extends React.Component<{}, {}> {
   public render() {
        return [
            <div> component for porlet1</div>,
            <div> component for porlet1</div>,
            <Porlet21/>,
            // <LoadableComponent/>,
        ];
    }
}
