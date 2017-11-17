import * as React from "react";

// import { Porlet21 } from "./porlet21/Porlet21";
import asyncComponent from "../components/AsyncComponent";

const LoadableComponent = asyncComponent(() => import("./porlet21/Porlet21"));

export class Porlet1 extends React.Component<{}, {}> {
   public render() {
        return [
            <div key={1}> component for porlet1</div>,
            <div key={2}> component for porlet1</div>,
            // <Porlet21 key={3}/>,
            <LoadableComponent key={3}/>,
        ];
    }
}
